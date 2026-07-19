import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold uppercase tracking-wider py-4 px-8 transition-all duration-300 clip-path-slant disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base border";
  
  // Note: Colors are referenced from tailwind config. 
  // cyzborg-blue is now #00AEEF
  const variants = {
    primary: "bg-cyzborg-blue border-cyzborg-blue text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black shadow-[0_0_15px_rgba(0,174,239,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    outline: "bg-transparent border-black dark:border-white text-black dark:text-white hover:border-cyzborg-blue hover:text-black dark:hover:text-cyzborg-blue",
    ghost: "bg-transparent border-transparent text-cyzborg-gray hover:text-black dark:text-white"
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;