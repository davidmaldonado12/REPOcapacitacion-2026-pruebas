import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question4() {
  const navigate = useNavigate();
  const questionData = questions[3];

  const simulationContent = (
    <div className="w-full max-w-4xl bg-surface-container-low rounded-xl p-4 md:p-8 mb-12">
      <div className="bg-surface-container-lowest rounded-DEFAULT shadow-[0_20px_40px_-10px_rgba(25,28,29,0.08)] overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center overflow-hidden">
                <img 
                  alt="Dropbox Logo" 
                  className="w-6 h-6 object-contain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxXOjglL7YIaea-vYs3pyYa4-0RPRBh2h9P6RIfNinDTNwYr9kO1kqefLzGrT_lzx1cbfkJFgAZmDPEaIlvbteE2wYYduRgpgNDvebLZGhaU0BTd7Zlk4Q3qtxrOIakCiwyJzd0Xe0xBNmiH9Ha_gP67-kKXP3jlM7vuBNyRnfwKt-HfIpdjU_XpEvU35mwr8Paw0qfaf11pl_qF3xOAxfvZavTZaoqr8EVS7LnxSTOw4iaCRwLZcze0RgLJEs-d_LbSVb5A11ykY" 
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-on-surface">Dropbox</span>
                  <span className="text-xs text-on-surface-variant">&lt;no-reply@dropboxmail.com&gt;</span>
                </div>
                <div className="text-sm text-on-surface-variant">Para: tú</div>
              </div>
            </div>
            <div className="text-xs text-on-surface-variant font-label uppercase tracking-widest">
              Hace 2 minutos
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          <div className="mb-8">
            <img 
              alt="Almacenamiento Lleno" 
              className="max-w-[240px] h-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJecSZ7vWyl2XMFi9-EOBmDFrRgg1YxbSuYRLamCKROQbgC0xW88GxOMsVAluiEDMR4U9_dpsMjURhw682Eh2p_50Ql4NKPlrpOv-5UGhHZFhMs-o7gVb2XqRpTftSKTjvDHBBHubSBM2GFjXukKYxAleHJwFwfqQ8kcs155n5pmSvMWYtFnTQyDldJPq3XBwWLltPphGrJa0lH9SLrQUdMPjccRM2C4aoLPt0ZyNuCiQB-TQ-KGC-OA9yFs1ewqMQbyk5qpM_T8" 
            />
          </div>
          <h2 className="text-2xl font-bold text-on-surface mb-6">Tu almacenamiento de Dropbox está lleno</h2>
          <p className="text-on-surface-variant leading-relaxed max-w-lg mb-10">
            Hola, parece que tu Dropbox se ha quedado sin espacio. Tus archivos ya no se sincronizarán y no podrás añadir nuevos documentos hasta que liberes espacio o aumentes tu plan.
          </p>
          <button className="inline-block bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Actualiza tu Dropbox
          </button>
          <div className="mt-12 pt-8 border-t border-outline-variant/10 w-full">
            <p className="text-xs text-on-surface-variant/60 leading-normal">
              Si no has solicitado este correo, por favor ignóralo. <br/>
              Dropbox, Inc., PO Box 77767, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={4}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/5')}
    />
  );
}
