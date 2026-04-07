import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question6() {
  const navigate = useNavigate();
  const questionData = questions[5];

  const simulationContent = (
    <div className="bg-surface-container-high rounded-xl p-4 md:p-8 shadow-sm">
      <div className="bg-surface-container-lowest rounded-DEFAULT overflow-hidden shadow-2xl">
        <div className="border-b border-outline-variant/20 p-4 md:px-8 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-error flex items-center justify-center text-white font-bold">G</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-on-surface">Google</span>
                <span className="text-on-surface-variant text-sm">&lt;no-reply@google.support&gt;</span>
              </div>
              <div className="text-sm text-on-surface-variant">para mí</div>
            </div>
          </div>
          <div className="flex gap-4 text-on-surface-variant">
            <span className="material-symbols-outlined text-xl">reply</span>
            <span className="material-symbols-outlined text-xl">more_vert</span>
          </div>
        </div>
        <div className="p-6 md:p-12">
          <div className="max-w-2xl mx-auto border border-outline-variant/30 rounded-lg overflow-hidden">
            <div className="bg-error p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-white text-3xl">report_problem</span>
              <h3 className="text-white font-bold text-xl">Alguien tiene tu contraseña</h3>
            </div>
            <div className="p-8 space-y-6">
              <p className="text-on-surface leading-relaxed">
                Alguien acaba de usar tu contraseña para intentar iniciar sesión en tu cuenta de Google.
              </p>
              <div className="flex flex-col md:flex-row gap-8 py-4">
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">CUÁNDO</div>
                  <div className="text-on-surface font-medium">Hace un momento</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">DÓNDE</div>
                  <div className="text-on-surface font-medium">Bratislava, Eslovaquia</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">DISPOSITIVO</div>
                  <div className="text-on-surface font-medium">Firefox (Windows)</div>
                </div>
              </div>
              <p className="text-on-surface leading-relaxed">
                Google ha bloqueado este intento de inicio de sesión, pero debes cambiar tu contraseña.
              </p>
              <div className="pt-4">
                <button className="bg-primary-container hover:bg-primary-container/90 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform active:scale-95">
                  Cambiar contraseña
                </button>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 text-center">
              <p className="text-xs text-on-surface-variant">
                También puedes consultar la actividad de seguridad reciente en tu cuenta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={6}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/7')}
    />
  );
}
