import React from 'react';

export function Card({ elevation = 1, padding = 'p-6', children, className = '' }) {
  const elevations = {
    0: 'border border-outline',
    1: 'shadow-1 border border-outline',
    2: 'shadow-2',
    3: 'shadow-3',
  };

  return (
    <div className={`bg-surface rounded-lg ${elevations[elevation]} ${padding} ${className}`}>
      {children}
    </div>
  );
}
