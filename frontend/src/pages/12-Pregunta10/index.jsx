import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question10() {
  const navigate = useNavigate();
  const questionData = questions[9];

  const simulationContent = (
    <div className="flex justify-center">
      <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] shadow-[0_0_0_10px_#191c1d,0_0_0_12px_#414754] overflow-hidden border-4 border-transparent">
        {/* Status Bar */}
        <div className="bg-white h-10 px-8 flex justify-between items-center text-[10px] font-bold">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">wifi</span>
            <span className="material-symbols-outlined text-[12px]">battery_full</span>
          </div>
        </div>
        {/* SMS App UI */}
        <div className="flex flex-col h-full bg-[#f0f0f0] font-body">
          <div className="bg-white/90 backdrop-blur px-4 pt-6 pb-2 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-500">person</span>
              </div>
              <div>
                <h4 className="text-xs font-bold">UPS_Express</h4>
                <p className="text-[9px] text-slate-500">Hoy 14:32</p>
              </div>
            </div>
          </div>
          <div className="flex-grow p-4 space-y-4">
            <div className="flex flex-col space-y-1">
              <div className="bg-white text-sm p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-slate-800 leading-tight">
                UPS: Su paquete con ID <span className="font-bold">#ES-9283-X</span> no se pudo entregar hoy. El repartidor volverá mañana.
                <br/><br/>
                Gestione su entrega o cambie la dirección aquí:
                <br/>
                <span className="text-blue-600 underline break-all">https://ups-seguimiento.online/gestion/entrega-fallida?id=9283</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 pb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400">add_circle</span>
            <div className="flex-grow bg-slate-100 rounded-full h-10 px-4 flex items-center border border-slate-200">
              <span className="text-slate-400 text-xs">iMessage</span>
            </div>
            <span className="material-symbols-outlined text-slate-400">mic</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={10}
      simulationContent={simulationContent}
      onNext={() => navigate('/resultado')}
    />
  );
}
