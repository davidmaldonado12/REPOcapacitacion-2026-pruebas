import React from 'react';

export function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full h-1 bg-primary-surface relative overflow-hidden">
      <div 
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
