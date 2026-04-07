import React from 'react';

export function InputField({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error, 
  className = '',
  variant = 'standard', // 'standard' (bottom border) or 'outlined'
  id,
  name
}) {
  const baseInputStyles = "w-full transition-all duration-300 placeholder:text-outline-variant/50 font-medium";
  
  const variants = {
    standard: "bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-1 py-4 text-xl",
    outlined: "px-3 py-2 border rounded-md outline-none border-outline focus:border-primary bg-surface text-on-surface"
  };

  return (
    <div className={`relative group flex flex-col ${className}`}>
      {label && (
        <label className="block font-label text-xs font-semibold text-primary mb-2 ml-1" htmlFor={id || name}>
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseInputStyles} ${variants[variant]} ${error ? 'border-error' : ''}`}
      />
      {error && (
        <span className="text-xs text-error mt-1 ml-1">{error}</span>
      )}
    </div>
  );
}
