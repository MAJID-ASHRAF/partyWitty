const gradientClasses = {
  primary: 'bg-[image:var(--primary-gradient)] shadow-[0_4px_12px_rgba(225,48,108,0.2)]',
  secondary: 'bg-[image:var(--secondary-gradient)] shadow-[0_8px_24px_rgba(124,77,255,0.3)]',
  explore: 'bg-gradient-to-r from-[rgba(116,100,228,1)] to-[rgba(26,0,210,1)] shadow-[0_4px_12px_rgba(79,70,229,0.3)]',
};

const GradientButton = ({ children, variant = 'primary', className = '', ...props }) => (
  <button
    className={[
      'inline-flex items-center justify-center rounded-full font-semibold text-white transition-transform hover:-translate-y-0.5',
      gradientClasses[variant],
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </button>
);

export default GradientButton;
