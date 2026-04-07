import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';
import { AppHeader } from '../../components/layout/AppHeader';
import { AppFooter } from '../../components/layout/AppFooter';
import { Button } from '../../components/ui/Button';
import { fetchLeaderboard } from '../../api/quiz';
import { PodioAnimado } from '../../components/quiz/PodioAnimado';
import { TablaResultados } from '../../components/quiz/TablaResultados';

function getResultMessage(score, total) {
  const ratio = score / total;
  if (ratio >= 0.8) return '¡Increíble criterio! Eres un experto detectando ataques.';
  if (ratio >= 0.5) return 'Buen trabajo, aunque todavía hay detalles que se te escapan.';
  return 'Sigue practicando. El phishing es cada vez más difícil de detectar.';
}

export default function ResultPage() {
  const { state, actions } = useQuiz();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, quiz } = state;
  const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100);

  useEffect(() => {
    fetchLeaderboard()
      .then(data => setLeaderboard(data.leaderboard))
      .catch(err => console.error('Error fetching leaderboard:', err))
      .finally(() => setLoading(false));
  }, []);

  if (!user.name || !user.email) {
    return <Navigate to="/registro" replace />;
  }

  const handleRetry = () => {
    actions.resetQuiz();
    navigate('/pregunta/1');
  };

  const top3 = leaderboard.slice(0, 3);

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
      <AppHeader variant="landing" title=" Moore Landa Test de phishing" />
      
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow w-full">
        {/* Hero Result Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">workspace_premium</span>
            Evaluación Finalizada
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            ¡Bien hecho, {user.name}!
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            {getResultMessage(quiz.score, quiz.totalQuestions)}
          </p>
          
          <div className="flex justify-center gap-12 py-8">
            <div className="text-center">
              <p className="text-5xl font-black text-primary font-headline">{percentage}%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Porcentaje</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black text-on-surface font-headline">{quiz.score}/{quiz.totalQuestions}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Puntuación</p>
            </div>
          </div>
        </div>

        {/* Podium Section */}
        {!loading && leaderboard.length > 0 && (
          <PodioAnimado top3={top3} currentUser={user.name} />
        )}

        {/* Leaderboard Table */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold font-headline">Ranking Global</h3>
            {quiz.rank && (
              <span className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-bold">
                Tu posición: <span className="text-primary">#{quiz.rank}</span>
              </span>
            )}
          </div>
          
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <TablaResultados rows={leaderboard} currentUser={user.name} />
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <Button size="lg" icon="restart_alt" onClick={handleRetry}>
            Intentar de nuevo
          </Button>
          <Button variant="outlined" size="lg" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
