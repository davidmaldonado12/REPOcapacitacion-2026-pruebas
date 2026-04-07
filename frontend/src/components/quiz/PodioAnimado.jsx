import React from 'react';

export function PodioAnimado({ top3, currentUser }) {
  // Reorder to [2nd, 1st, 3rd] for visual layout
  const orderedPodio = [];
  if (top3[1]) orderedPodio.push({ ...top3[1], rank: 2 });
  if (top3[0]) orderedPodio.push({ ...top3[0], rank: 1 });
  if (top3[2]) orderedPodio.push({ ...top3[2], rank: 3 });

  return (
    <div className="flex flex-col items-center gap-8 my-12 w-full">
      <h2 className="text-2xl font-bold font-headline text-on-surface animate-fade-in">
        Mejores puntajes
      </h2>
      
      <div className="flex items-end justify-center gap-4 md:gap-8 h-64 w-full max-w-2xl px-4">
        {orderedPodio.map((user) => {
          const isMe = user.name === currentUser;
          
          return (
            <div key={user.rank} className="flex flex-col items-center flex-1">
              {/* Name and Score labels */}
              <div className="text-center mb-4 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                {isMe && <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Tú</span>}
                <p className="font-bold text-sm truncate max-w-[100px]">{user.name}</p>
                <p className="text-xs text-on-surface-variant">{user.best_score} pts</p>
              </div>

              {/* Column */}
              <div 
                className={`w-full rounded-t-xl flex flex-col items-center justify-start pt-4 shadow-lg transition-all duration-500 podio-col ${isMe ? 'border-2 border-primary' : ''}`}
                data-rank={user.rank}
                style={{ 
                  height: user.rank === 1 ? '140px' : user.rank === 2 ? '100px' : '75px',
                  background: user.rank === 1 ? 'var(--color-primary, #1a73e8)' : user.rank === 2 ? '#5f6368' : '#9e9e9e',
                  animationDelay: user.rank === 1 ? '0.6s' : user.rank === 2 ? '0.9s' : '0.3s'
                }}
              >
                <span className="text-white font-bold text-2xl">
                  {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subirColumna {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .podio-col {
          transform-origin: bottom;
          animation: subirColumna 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
      `}} />
    </div>
  );
}
