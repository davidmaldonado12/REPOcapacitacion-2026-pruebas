import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question5() {
  const navigate = useNavigate();
  const questionData = questions[4];

  const simulationContent = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
      {/* Device 1: Suspicious Notification */}
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[280px] aspect-[9/19] bg-on-surface rounded-[2.5rem] p-3 shadow-2xl overflow-hidden ring-8 ring-surface-container-high">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-on-surface rounded-b-2xl z-20"></div>
          <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative flex flex-col">
            <div className="p-4 pt-10 space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white">sms</span>
                  </div>
                  <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">Mensajes • Ahora</span>
                </div>
                <p className="text-white text-xs font-semibold mb-1">G-938201</p>
                <p className="text-white/80 text-[11px] leading-snug">Tu código de verificación de Google es G-938201. No lo compartas con nadie.</p>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-800 to-slate-950"></div>
          </div>
        </div>
        <p className="mt-6 text-xs font-label text-on-surface-variant tracking-widest uppercase opacity-60">Notificación push</p>
      </div>

      {/* Device 2: Conversation View */}
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[280px] aspect-[9/19] bg-on-surface rounded-[2.5rem] p-3 shadow-2xl overflow-hidden ring-8 ring-surface-container-high">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-on-surface rounded-b-2xl z-20"></div>
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
            <div className="bg-white px-4 py-8 border-b border-slate-100 flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-400">arrow_back</span>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-sm">person</span>
              </div>
              <span className="text-sm font-semibold text-slate-900">Google</span>
            </div>
            <div className="p-4 flex flex-col gap-4 flex-grow">
              <div className="self-start bg-slate-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                <p className="text-xs text-slate-800">G-938201 es tu código de verificación de Google.</p>
              </div>
              <div className="self-start bg-slate-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                <p className="text-xs text-slate-800">No compartas este código con nadie por ningún motivo. Google nunca te pedirá este código por teléfono o chat.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs font-label text-on-surface-variant tracking-widest uppercase opacity-60">Hebra de mensajes</p>
      </div>

      {/* Device 3: Contextual Alert */}
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[280px] aspect-[9/19] bg-on-surface rounded-[2.5rem] p-3 shadow-2xl overflow-hidden ring-8 ring-surface-container-high">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-on-surface rounded-b-2xl z-20"></div>
          <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative flex flex-col">
            <div className="p-4 pt-10 space-y-4">
              <div className="bg-error-container rounded-2xl p-4 border border-error/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[16px] text-error">warning</span>
                  <span className="text-[10px] text-on-error-container font-bold uppercase tracking-wider">Seguridad</span>
                </div>
                <p className="text-on-error-container text-xs font-bold mb-1">Actividad inusual</p>
                <p className="text-on-error-container/80 text-[11px] leading-snug">Se ha detectado un intento de inicio de sesión desde Moscú, Rusia. ¿Has sido tú?</p>
                <div className="mt-3 flex gap-2">
                  <div className="flex-1 bg-on-error-container/10 rounded-lg py-1 text-center text-[10px] font-bold text-on-error-container">NO</div>
                  <div className="flex-1 bg-on-error-container/10 rounded-lg py-1 text-center text-[10px] font-bold text-on-error-container">SÍ</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-800 to-black opacity-60"></div>
          </div>
        </div>
        <p className="mt-6 text-xs font-label text-on-surface-variant tracking-widest uppercase opacity-60">Alerta del sistema</p>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={5}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/6')}
    />
  );
}
