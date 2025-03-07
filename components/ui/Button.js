// Reusable Button component with glow effect
export const Button = ({ onClick, className, children, variant = 'primary', size = 'md', loading = false, disabled = false }) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 before:bg-blue-400',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 before:bg-purple-400',
    accent: 'bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 before:bg-pink-400',
    success: 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 before:bg-green-400',
    error: 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 before:bg-red-400',
    info: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 before:bg-blue-400'
  };
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn rounded-md font-medium relative
      transition-all duration-300 transform hover:scale-105
      shadow-md hover:shadow-xl no-animation
      before:absolute before:inset-0 before:rounded-md before:z-[-1]
      before:transition-opacity before:opacity-0 hover:before:opacity-100
      before:blur-xl ${variantClasses[variant]} ${sizeClasses[size]} ${className}
      ${loading ? 'loading' : ''} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      <span className="relative z-10">{!loading && children}</span>
    </button>
  );
}; 

// Reusable Card component
export const Card = ({ 
  title, 
  children, 
  icon, 
  className = '',
  footer,
  hoverEffect = true,
  compact = false
}) => {
  return (
    <div className={`card bg-base-100 bg-opacity-70 backdrop-blur-sm shadow-lg 
                    ${hoverEffect ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''}
                    ${compact ? 'card-compact' : 'card-normal'}
                    border border-base-200 ${className}`}>
      
      {(title || icon) && (
        <div className="card-title p-4 pb-0 gap-2">
          {icon && <div className="text-primary text-2xl">{icon}</div>}
          {title && <h2 className="text-xl font-bold">{title}</h2>}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footer && <div className="card-actions justify-end p-4 pt-0">{footer}</div>}
    </div>
  );
}; 

// Reusable Stat component
export const Stat = ({ title, value, desc, icon, className = '', variant = 'default' }) => {
  const variantClasses = {
    default: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    info: 'text-info'
  };
  
  return (
    <div className={`stat bg-base-100 rounded-lg shadow ${className}`}>
      {icon && <div className="stat-figure text-primary text-3xl">{icon}</div>}
      <div className="stat-title">{title}</div>
      <div className={`stat-value ${variantClasses[variant]}`}>{value}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
};

export const StatGroup = ({ children, className = '', vertical = false }) => {
  return (
    <div className={`stats shadow ${vertical ? 'stats-vertical' : ''} ${className}`}>
      {children}
    </div>
  );
}; 