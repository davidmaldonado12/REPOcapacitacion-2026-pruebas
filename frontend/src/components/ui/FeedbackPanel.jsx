import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export function FeedbackPanel({ isCorrect, explanation, onNext }) {
  return (
    <Card 
      elevation={2} 
      className={`mt-6 border-l-4 ${isCorrect ? 'border-success bg-success-surface' : 'border-error bg-error-surface'}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className={`text-xl font-bold ${isCorrect ? 'text-success' : 'text-error'}`}>
          {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
        </h3>
        
        <p className="text-text-primary leading-relaxed">
          {explanation}
        </p>

        <div className="flex justify-end">
          <Button onClick={onNext} variant="filled" className={isCorrect ? 'bg-success hover:bg-green-700' : 'bg-error hover:bg-red-700'}>
            Continuar
          </Button>
        </div>
      </div>
    </Card>
  );
}
