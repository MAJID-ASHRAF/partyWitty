const Avatar = ({ src, alt, size = 'md', className = '', children }) => {
  const sizeClasses = {
    sm: 'h-7 w-7',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-16 w-16',
    profile: 'h-[88px] w-[88px]',
  };

  return (
    <div className={['relative inline-flex shrink-0 rounded-full', className].join(' ')}>
      <img src={src} alt={alt} className={[sizeClasses[size], 'rounded-full object-cover'].join(' ')} />
      {children}
    </div>
  );
};

export default Avatar;
