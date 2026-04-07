import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question2() {
  const navigate = useNavigate();
  const questionData = questions[1];

  const simulationContent = (
    <div className="bg-surface-container-high rounded-lg p-1 md:p-4 shadow-sm">
      <div className="bg-surface-container-lowest rounded-DEFAULT overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">C</div>
            <div>
              <div className="text-sm font-bold text-on-surface">Coca-Cola Promotions <span className="font-normal text-on-surface-variant">&lt;noreply@promo-coke-gift.com&gt;</span></div>
              <div className="text-[0.75rem] text-on-surface-variant">para mí</div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">star</span>
            <span className="material-symbols-outlined text-on-surface-variant text-sm">reply</span>
          </div>
        </div>
        <div className="p-0">
          <div className="bg-[#F40009] text-white p-8 text-center space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tighter uppercase italic">¡RESPONDE Y GANA!</h2>
            <div className="relative aspect-video max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
              <img 
                alt="Modern portable blender" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwtfYWGY25NZksb-tzc-5CLdAgFwFsO3LeUD8YebPc_wi_8BmrNUclj0C3_6FneZOFwFmEMnELOih-zPbhF0Tkz6S2Vok3qojgOQOInKoX213yn8xHAwVDYZt7HBMsmWsxfbsj1d-7_5Y_qcm36Y6hEVPMP_q0PoFnrAROa4hwvBw7wMV0sjbMU3yRJqy8FIUnnF-Tgo2xq-WkkNMWaSgKj0YW9q2rNUIoggxoGDfCk9LbOkgM-pwMegk5x1VSF6Csg3OZxeuoM_4" 
              />
            </div>
            <div className="space-y-4 py-4">
              <p className="text-xl font-bold uppercase">¡TU NUEVA LICUADORA PORTÁTIL TE ESPERA!</p>
              <p className="text-sm opacity-90 max-w-xs mx-auto">Queremos saber tu opinión sobre nuestros nuevos sabores. Completa la encuesta y recibe un regalo exclusivo.</p>
            </div>
            <button className="bg-white text-[#F40009] px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-slate-100 transition-colors">
              ¡EMPIEZA HOY MISMO!
            </button>
          </div>
          <div className="p-8 text-center text-[0.65rem] text-on-surface-variant bg-surface-container-low uppercase tracking-widest leading-loose">
            © 2024 The Coca-Cola Company. Todos los derechos reservados.<br/>
            Coca-Cola es una marca registrada de TCCC.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={2}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/3')}
    />
  );
}
