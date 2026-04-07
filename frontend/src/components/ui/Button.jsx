import React from 'react';

export function Button({ 
  variant = 'filled', 
  size = 'md', 
  icon, 
  disabled, 
  onClick, 
  children,
  className = '',
  iconRight = true
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform active:scale-95 group gap-3';
  
  const variants = {
    filled: 'bg-primary-container hover:bg-primary text-white shadow-lg shadow-primary-container/20 rounded-full hover:scale-[1.02]',
    outlined: 'border-2 border-outline/20 text-on-surface hover:bg-white hover:shadow-lg rounded-full',
    text: 'text-primary hover:bg-primary/5 rounded-full',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-5 text-lg',
  };

  const Icon = () => (
    icon && (
      <span className={`material-symbols-outlined ${iconRight ? 'group-hover:translate-x-1' : ''} transition-transform`}>
        {icon}
      </span>
    )
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {!iconRight && <Icon />}
      {children}
      {iconRight && <Icon />}
    </button>
  );
}
