import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from '../../components/quiz/QuestionPage';
import { questions } from '../../data/questions';

export default function Question3() {
  const navigate = useNavigate();
  const questionData = questions[2];

  const simulationContent = (
    <div className="w-full bg-surface-container-low rounded-lg p-4 md:p-12 mb-16">
      <div className="bg-surface-container-lowest rounded shadow-sm overflow-hidden max-w-2xl mx-auto">
        <div className="p-6 border-b border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">person</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface">Departamento de facturación</h3>
                <p className="text-xs text-on-surface-variant">service@paypal-billing.com</p>
              </div>
            </div>
            <div className="text-xs text-on-surface-variant">hace 10 min.</div>
          </div>
          <div className="text-xl font-medium text-on-surface">Tu factura de PayPal (00349-88)</div>
        </div>
        <div className="p-8 space-y-8">
          <div className="flex justify-center">
            <img 
              alt="Logo de PayPal" 
              className="h-12 w-auto grayscale opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDirvYEc7GTHJIXYsvZjPQofDAphG3eCiBfWX3l-E-5v8HQ7R6HqakRANK2hGAEFY6gpiNl3ucDAFgicZ3UzBxCeatq_E4cWLYQBiwf0-ytPlV2XWzJboKrBcRquVX_m1j69dBPZMbB0Up0d4t9HLjwpJI1kIwRXdxpMauXHoefMGplifLz9zhGtIsOU2MLpmMs1X9MRxJfRyfL0WZOGH76DO2G_Z8_xolWRrTM3GEXtiRE9PM7w7F3znmdXuxycS6bEbiIYK6laag" 
            />
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-on-surface">Factura de PayPal</h2>
            <p className="text-on-surface-variant">Has recibido una factura de Departamento de facturación por un importe de <span className="font-bold text-on-surface">600,00 USD</span>.</p>
          </div>
          <div className="bg-surface-container p-6 rounded-DEFAULT border border-outline-variant/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Detalle del pedido</span>
              <span className="text-xs text-on-surface-variant">ID: #4490-AX-99</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Google Play Gift Card x10</span>
              <span>$600.00</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-2 italic">Nota: "Your purchase is ready for delivery. Click below to verify."</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Ver y pagar factura
            </button>
            <p className="text-[0.7rem] text-center text-on-surface-variant max-w-xs">
              Si no has realizado esta compra, haz clic en el botón para cancelar la transacción de inmediato.
            </p>
          </div>
        </div>
        <div className="p-4 bg-surface-container-low text-[0.65rem] text-center text-on-surface-variant/60">
          © 1999–2024 PayPal, Inc. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );

  return (
    <QuestionPage
      {...questionData}
      questionId={3}
      simulationContent={simulationContent}
      onNext={() => navigate('/pregunta/4')}
    />
  );
}
