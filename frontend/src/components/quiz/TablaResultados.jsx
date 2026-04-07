import React from 'react';

export function TablaResultados({ rows, currentUser }) {
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 overflow-hidden rounded-xl border border-outline-variant/20 shadow-sm">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">#</th>
            <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Nombre</th>
            <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Puntaje</th>
            <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Fecha</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, i) => {
            const isMe = row.name === currentUser;
            
            return (
              <tr 
                key={i} 
                className={`transition-colors border-t border-outline-variant/10 ${isMe ? 'bg-primary/5 font-medium' : 'hover:bg-slate-50'}`}
              >
                <td className="px-6 py-4 text-sm text-on-surface-variant">{i + 1}</td>
                <td className="px-6 py-4 text-sm text-on-surface flex items-center gap-2">
                  {row.name}
                  {isMe && (
                    <span className="bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      Tú
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-on-surface font-bold">
                  {row.best_score} <span className="text-on-surface-variant font-normal">/ {row.total}</span>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  {formatDate(row.last_attempt)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
