import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { AppHeader } from '../layout/AppHeader';
import { AppFooter } from '../layout/AppFooter';
import { Button } from '../ui/Button';
import { submitScore } from '../../api/quiz';

export function QuestionPage({ 
  questionId, 
  title, 
  summary, 
  hint, 
  correctAnswer, 
  explanation, 
  simulationContent,
  onNext
}) {
  const { state, dispatch, actions } = useQuiz();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (answer) => {
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    dispatch({ 
      type: 'ANSWER_QUESTION', 
      payload: { 
        isCorrect: correct, 
        explanation: correct ? explanation.correct : explanation.incorrect,
        selectedOption: answer,
        questionId
      } 
    });
  };

  const handleNext = async () => {
    const isLastQuestion = questionId === state.quiz.totalQuestions;

    if (isLastQuestion) {
      setIsSubmitting(true);
      try {
        // We calculate score based on CURRENT answers + the one just given
        // Since ANSWER_QUESTION already updated the state, we can use state.quiz.score
        // BUT wait, dispatch is async in some sense (state update is next render).
        // Let's calculate it manually to be safe or rely on the updated state if we are sure.
        
        // Let's get final score.
        const finalAnswers = [...state.quiz.answers];
        const finalScore = finalAnswers.reduce((acc, curr) => acc + (curr.isCorrect ? 1 : 0), 0);

        const result = await submitScore({
          userId: state.user.userId,
          score: finalScore,
          total: state.quiz.totalQuestions
        });

        actions.setResult(result);
      } catch (err) {
        console.error('Error submitting score:', err);
      } finally {
        setIsSubmitting(false);
      }
    }

    dispatch({ type: 'NEXT_QUESTION' });
    if (onNext) onNext();
  };

  return (
    <div className="bg-surface font-body text-on-surface flex flex-col min-h-screen">
      <AppHeader variant="quiz" current={questionId} total={state.quiz.totalQuestions} />
      
      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20 flex-grow w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-6">
          <h1 className="font-headline text-5xl font-extrabold text-on-surface leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            {summary}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Simulation Area */}
          <div className="lg:col-span-8">
            {simulationContent}
          </div>

          {/* Controls Column */}
          <div className="lg:col-span-4 sticky top-32 space-y-8">
            {!showFeedback ? (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-outline-variant/10">
                <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">¿Qué crees que es?</h2>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                  Analiza los detalles. ¿Te parece una solicitud legítima o hay algo sospechoso en la URL o el remitente?
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer('phishing')}
                    className="w-full flex items-center justify-between group p-5 rounded-full border-2 border-outline-variant/30 hover:border-error hover:bg-error/5 transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-error transition-colors">report</span>
                      <span className="font-bold text-on-surface">Phishing</span>
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-error">chevron_right</span>
                  </button>
                  <button 
                    onClick={() => handleAnswer('legit')}
                    className="w-full flex items-center justify-between group p-5 rounded-full border-2 border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">verified_user</span>
                      <span className="font-bold text-on-surface">Legítimo</span>
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary">chevron_right</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className={`p-8 rounded-lg shadow-sm border-2 ${isCorrect ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'} space-y-6`}>
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${isCorrect ? 'text-success' : 'text-error'} text-3xl`}>
                    {isCorrect ? 'check_circle' : 'cancel'}
                  </span>
                  <h2 className={`font-headline text-2xl font-bold ${isCorrect ? 'text-success' : 'text-error'}`}>
                    {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
                  </h2>
                </div>
                <p className="text-on-surface leading-relaxed">
                  {isCorrect ? explanation.correct : explanation.incorrect}
                </p>
                <div className="space-y-4">
                  <h3 className="font-bold text-on-surface">Pistas clave:</h3>
                  <ul className="space-y-2">
                    {explanation.clues.map((clue, i) => (
                      <li key={i} className="flex gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-xs mt-1">info</span>
                        {clue}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  fullWidth 
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className={isCorrect ? 'bg-success hover:bg-green-700 border-none' : 'bg-error hover:bg-red-700 border-none'}
                >
                  {isSubmitting ? 'Guardando...' : (questionId === state.quiz.totalQuestions ? 'Ver resultados' : 'Siguiente')}
                </Button>
              </div>
            )}

            {/* Subtle Tip */}
            <div className="flex gap-4 p-4 rounded-DEFAULT bg-primary/5 border border-primary/10">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <p className="text-xs text-primary/80 font-medium leading-normal">
                {hint}
              </p>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
