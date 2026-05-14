import { Mic, Search } from 'lucide-react';

const SearchInput = ({ placeholder = 'Search..', className = '' }) => (
  <div className={['flex w-full items-center gap-3 rounded-full border border-border-soft bg-white px-6 py-3', className].join(' ')}>
    <Search size={20} className="shrink-0 text-text-muted" />
    <input type="text" placeholder={placeholder} className="w-full border-0 bg-transparent text-[15px] outline-none placeholder:text-text-muted" />
    <Mic size={20} className="shrink-0 text-text-muted" />
  </div>
);

export default SearchInput;
