import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../../components/layout/AppHeader';
import { AppFooter } from '../../components/layout/AppFooter';
import { Button } from '../../components/ui/Button';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen">
      <AppHeader variant="landing" />
      
      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1] font-headline">
              ¿Puedes detectar cuándo te están engañando?
            </h1>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
                El phishing es el intento de robar información confidencial, a menudo mediante el uso de correos electrónicos, sitios web o mensajes de texto engañosos.
              </p>
              <p className="text-base md:text-lg text-slate-500 font-body leading-relaxed max-w-xl mx-auto">
                Hoy en día, la Inteligencia Artificial hace que estos ataques sean más convincentes que nunca. Pon a prueba tu capacidad para diferenciar lo real de lo falso.
              </p>
            </div>
            <div className="pt-4">
              <Button 
                size="lg" 
                icon="arrow_forward" 
                onClick={() => navigate('/registro')}
              >
                Hacer el test
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-16">
            <div className="bg-surface-container-low p-8 rounded-lg text-left flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h3 className="font-bold text-lg">Aprendizaje Práctico</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Ejemplos reales de ataques de phishing para que aprendas a identificarlos sin riesgos.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-lg text-left flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="font-bold text-lg">Impacto de la IA</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Descubre cómo los estafadores utilizan LLMs para crear mensajes impecables sin errores gramaticales.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-lg text-left flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-bold text-lg">100% Seguro</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Este test no recopila datos personales. Solo entrenamos tu ojo para protegerte en la red.
              </p>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
