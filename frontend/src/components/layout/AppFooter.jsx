import React from 'react';

export function AppFooter() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 w-full py-12 bg-transparent">
      <div className="flex gap-8">
        <a className="text-slate-400 hover:text-blue-500 transition-colors font-body text-[0.75rem] tracking-[0.1em] uppercase font-medium" href="#">
          Privacidad
        </a>
        <a className="text-slate-400 hover:text-blue-500 transition-colors font-body text-[0.75rem] tracking-[0.1em] uppercase font-medium" href="#">
          Condiciones
        </a>
      </div>
    </footer>
  );
}
