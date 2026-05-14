import { CheckCircle2 } from 'lucide-react';

const VerifiedName = ({ name, age, className = '', iconSize = 20 }) => (
  <div className={['flex items-center gap-1.5 font-bold text-text-dark', className].join(' ')}>
    {name}{age ? `, ${age}` : ''}
    <CheckCircle2 size={iconSize} className="text-verified-purple" />
  </div>
);

export default VerifiedName;
