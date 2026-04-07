import React from 'react';
import { ProgressBar } from '../ui/ProgressBar';

export function AppHeader({ 
  showProgress, 
  current, 
  total, 
  title = "Moore Landa Test de phishing",
  variant = 'landing'
}) {
  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm flex flex-col justify-center items-center w-full max-w-full transition-all duration-150 ease-in-out">
      <div className="flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-700 font-bold text-lg md:text-2xl tracking-wide md:tracking-tight font-headline">
            {title}
          </span>
        </div>
        
        {variant === 'landing' && (
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer text-slate-600">
              <span className="material-symbols-outlined text-[20px]">language</span>
              <span className="text-sm font-medium">Español</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
            <div className="md:hidden">
              <span className="material-symbols-outlined text-slate-600">menu</span>
            </div>
          </div>
        )}

        {variant === 'quiz' && (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <span className="text-blue-700 font-semibold">Inicio</span>
              <span className="text-slate-600">Historial</span>
              <span className="text-slate-600">Ayuda</span>
            </div>
            <div className="bg-primary-container/10 px-4 py-1.5 rounded-full">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Pregunta {current}/{total}
              </span>
            </div>
          </div>
        )}

        {variant === 'registration' && (
          <div className="flex flex-col items-center">
            <span className="text-on-surface-variant font-label text-[0.7rem] tracking-[0.2em] uppercase mb-1">
              {title}
            </span>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
        )}
      </div>
      {showProgress && variant !== 'quiz' && <ProgressBar current={current} total={total} />}
    </header>
  );
}
