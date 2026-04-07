import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question9() {
  const navigate = useNavigate();
  const questionData = questions[8];

  const simulationContent = (
    <div className="w-full bg-surface-container-high rounded-xl p-4 md:p-8 mb-12 shadow-inner">
      <div className="bg-surface-container-lowest rounded-DEFAULT overflow-hidden shadow-2xl">
        <div className="bg-[#f2f6fc] px-6 py-4 flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#1a73e8] rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Google Calendar</p>
              <p className="text-xs text-on-surface-variant">invitation@google-cal-verify.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-slate-400">star</span>
            <span className="material-symbols-outlined text-slate-400">reply</span>
            <span className="material-symbols-outlined text-slate-400">more_vert</span>
          </div>
        </div>
        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1a73e8]">Invitación: Tu Pixel 7 Pro gratis está esperando</h2>
            <p className="text-on-surface-variant text-sm">Martes, 15 de Octubre • 10:00 – 10:30am</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg space-y-4">
            <p className="text-on-surface leading-relaxed">
              Has sido seleccionado como uno de los afortunados ganadores de nuestro programa de fidelización. Para reclamar tu nuevo <strong>Google Pixel 7 Pro</strong>, por favor confirma tu asistencia y completa el formulario de envío.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#1a73e8] text-white px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition-all">Sí</button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-2 rounded-full font-medium">Quizás</button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-2 rounded-full font-medium">No</button>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-outline-variant/20 rounded-lg">
            <span className="material-symbols-outlined text-[#1a73e8] mt-1">info</span>
            <div className="text-sm text-on-surface-variant space-y-2">
              <p><strong>Descripción del evento:</strong></p>
              <p>Por favor, haz clic en el siguiente enlace para verificar tu identidad y proporcionar la dirección de entrega: 
                <span className="text-blue-600 underline">https://google-awards-verification.com/claim-pixel-7</span>
              </p>
            </div>
          </div>
          <div className="pt-8 flex justify-center">
            <img 
              alt="Modern smartphone" 
              className="w-48 h-48 object-contain drop-shadow-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCtoTwNixXtnwM3Q3RFXGlWjHUMvU_OZkMjJs1wzyWPl_wfmXGNrgu_MjKhldA0NfNDNiKcNBKtqaaWUDTL10SDtpN3ust8FGViuji4nRMOpZf8Bqi8ZuHTQqtxqOwlDC8SIMoSztV88xSIRS0scOMxzC0imNxwv0MHcbil0ckRAs03pkSA5FXXGSVF0_1xiSx02jd8_k0oxqXcx2FjN5AVLuHYMLUX5dCMbIOCh_kkaxvFKmhc8S_sbnUECmyZWP8np5HRDkaT9Q" 
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={9}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/10')}
    />
  );
}
