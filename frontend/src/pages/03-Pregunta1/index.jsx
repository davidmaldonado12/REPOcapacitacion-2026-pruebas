import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question1() {
  const navigate = useNavigate();
  const questionData = questions[0];

  const simulationContent = (
    <div className="bg-surface-container-high p-8 lg:p-12 rounded-lg">
      <div className="bg-surface-container-lowest rounded-DEFAULT shadow-[0_20px_40px_-10px_rgba(25,28,29,0.08)] overflow-hidden">
        {/* Email Header */}
        <div className="p-6 md:p-8 border-b border-outline-variant/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-on-surface truncate">Luís Gómez</h3>
                <span className="text-xs text-on-surface-variant font-label">10:42 (hace 2 horas)</span>
              </div>
              <p className="text-sm text-on-surface-variant flex items-center gap-1">
                <span>&lt;luis.gomez.escuela@gmail.com&gt;</span>
                <span className="material-symbols-outlined text-xs">arrow_drop_down</span>
              </p>
              <p className="mt-4 text-sm text-on-surface-variant">Para mí</p>
            </div>
          </div>
        </div>
        {/* Email Body */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex-shrink-0">
              <img 
                alt="Google Docs" 
                className="w-full h-full object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWLcsYHLlGPdfOgAsmJk9hW7B7tcDvg1KLWq92dewmKgQKjMoTIrFGMxI1HDZNM9YrP0neNKqcQhs35wkvLgal7PhxyTr2Cf_QZbJe25iG9uOOND3E1KXNoIEqeNmmRHZtgMkvOygp7fWlrpPM_1laMg3fe2_uUdKFVhg_Vu_AriGdjiGkexVdP-hvggX8oRumKESVEDS7XY-iniuRXeZ_HhGPz_HCny4S_C6CUWQKiXPr2jH5hUbpioDAksklw76YAej2dfQnaEA" 
              />
            </div>
            <div className="space-y-4">
              <p className="text-on-surface text-lg">
                <span className="font-bold">Luís Gómez</span> ha compartido un documento contigo:
              </p>
              {/* Document Preview Card */}
              <div className="bg-surface-container-low rounded-DEFAULT p-6 border border-outline-variant/20 max-w-md group cursor-default transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-blue-600 text-3xl">description</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface leading-tight">Presupuesto de departamento del 2026</h4>
                    <p className="text-xs text-on-surface-variant font-label mt-1">Google Docs • Privado</p>
                  </div>
                </div>
                <div className="relative group">
                  <button className="w-full bg-primary-container text-on-primary-container py-3 px-8 rounded-full font-semibold transition-all hover:shadow-lg active:scale-95 group-hover:bg-primary">
                    Abrir
                  </button>
                  {/* Tooltip Simulation for Hover */}
                  <div className="absolute -bottom-10 left-0 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    https://drive--google.com/l/34829/open?id=presupuesto-2026
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm italic mt-8">
                "Hola, aquí tienes el borrador del presupuesto para el próximo año que discutimos en la reunión. Por favor, revísalo antes de la entrega final."
              </p>
            </div>
          </div>
        </div>
        {/* Email Footer */}
        <div className="bg-surface-container-low/50 p-6 text-center">
          <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">
            Google Cloud • Notificaciones de Drive
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={1}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/2')}
    />
  );
}
