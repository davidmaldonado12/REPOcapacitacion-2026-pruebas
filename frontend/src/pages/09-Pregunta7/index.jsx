import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question7() {
  const navigate = useNavigate();
  const questionData = questions[6];

  const simulationContent = (
    <div className="w-full bg-surface-container-high rounded-lg p-8 shadow-[0_20px_40px_-10px_rgba(25,28,29,0.08)] mb-12">
      <div className="bg-surface-container-lowest rounded-DEFAULT overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-700">shield</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm">Google</span>
                <span className="text-on-surface-variant text-xs">&lt;no-reply@accounts.google.com&gt;</span>
              </div>
              <div className="text-xs text-on-surface-variant">para mí</div>
            </div>
          </div>
          <div className="text-xs text-on-surface-variant">Hace 1 hora</div>
        </div>
        <div className="p-8 md:p-12 space-y-8">
          <div className="bg-red-50 border-l-4 border-error p-6 rounded-r-md flex items-start space-x-4">
            <span className="material-symbols-outlined text-error">warning</span>
            <div>
              <h3 className="font-bold text-on-surface mb-1">Aviso de seguridad de Google</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Es posible que atacantes respaldados por el gobierno estén intentando robar tu contraseña. Esto solo le ocurre a menos del 0,1% de los usuarios de Google. No podemos revelar cómo lo hemos descubierto porque los atacantes podrían cambiar su táctica, pero si lo logran, podrían acceder a tus datos.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-on-surface leading-relaxed">
              Para proteger tu cuenta, te recomendamos que actives la <b>Protección avanzada</b> o que cambies tu contraseña inmediatamente.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-primary-container text-white px-8 py-3 rounded-full font-medium text-sm hover:brightness-110 transition-all shadow-md">
                Cambiar contraseña
              </button>
              <button className="border border-outline-variant/50 text-primary px-8 py-3 rounded-full font-medium text-sm hover:bg-primary/5 transition-all">
                Más información
              </button>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/10 text-[0.7rem] text-on-surface-variant/70 uppercase tracking-[0.1em]">
            Enviado por el equipo de seguridad de Google
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={7}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/8')}
    />
  );
}
