import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question8() {
  const navigate = useNavigate();
  const questionData = questions[7];

  const simulationContent = (
    <div className="flex justify-center">
      <div className="relative w-72 h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl p-4 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
        {/* Screen Content */}
        <div className="bg-surface-container-lowest h-full w-full rounded-[2rem] overflow-hidden flex flex-col font-body">
          {/* Message Header */}
          <div className="pt-8 pb-4 px-4 border-b border-surface-container flex flex-col items-center">
            <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">+1 410 200 918</span>
          </div>
          {/* Chat Area */}
          <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-800 leading-relaxed border border-slate-100">
              NETFLIX: Tu ultimo pago ha sido rechazado. Para seguir disfrutando de tus series, actualiza tus datos de facturacion en: 
              <span className="text-primary underline font-medium block mt-2">https://netflix-factura-es.top/billing</span>
            </div>
            <span className="text-[10px] text-slate-400 self-start ml-2">10:42 AM</span>
          </div>
          {/* Keyboard/Input Placeholder */}
          <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
            <div className="flex-1 bg-slate-100 h-9 rounded-full px-4 flex items-center">
              <span className="text-xs text-slate-400">Mensaje de texto</span>
            </div>
            <div className="w-9 h-9 bg-primary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">send</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={8}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/9')}
    />
  );
}
