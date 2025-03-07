// Reusable Avatar component using DaisyUI
export const Avatar = ({ src, alt, size = 'md', online = false, offline = false, className = '' }) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  
  const statusClasses = online ? 'online' : offline ? 'offline' : '';
  
  return (
    <div className={`avatar ${statusClasses} ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
        {src ? (
          <img src={src} alt={alt || 'Avatar'} />
        ) : (
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 text-white flex items-center justify-center text-xl font-bold">
            {alt?.slice(0, 2) || '?'}
          </div>
        )}
      </div>
    </div>
  );
};

export const AvatarGroup = ({ children, max = 3, size = 'md', className = '' }) => {
  const displayAvatars = React.Children.toArray(children).slice(0, max);
  const remaining = React.Children.count(children) - max;
  
  return (
    <div className={`avatar-group -space-x-6 ${className}`}>
      {displayAvatars}
      
      {remaining > 0 && (
        <div className="avatar placeholder">
          <div className={`bg-neutral-focus text-neutral-content rounded-full ${
            size === 'sm' ? 'w-10 h-10' : 
            size === 'xs' ? 'w-6 h-6' : 
            size === 'lg' ? 'w-24 h-24' : 
            size === 'xl' ? 'w-32 h-32' : 'w-16 h-16'
          }`}>
            <span>+{remaining}</span>
          </div>
        </div>
      )}
    </div>
  );
}; 