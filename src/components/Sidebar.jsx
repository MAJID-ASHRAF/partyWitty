import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Bookmark, Crown, ListFilter } from 'lucide-react';
import { Avatar } from './common';
import { PlanIcon, BidIcon, BookingIcon, SearchIcon, ChatIcon, BellIcon, RewardIcon } from '../assets/sidebar-icons';

import Profile from '../assets/Profile.png';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import subscription from '../assets/subscription.png';

const navItems = [
  { icon: PlanIcon, label: 'My Plan', path: '/' },
  { icon: BidIcon, label: 'My Bids', path: '/bids' },
  { icon: BookingIcon, label: 'My Booking', path: '/booking' },
  { icon: SearchIcon, label: 'Search', path: '/drinks' },
  { icon: ChatIcon, label: 'Chat Room', path: '/chat' },
  { icon: BellIcon, label: 'Notifications', path: '/notifications' },
  { icon: Bookmark, label: 'Save & Like', path: '/saved' },
  { icon: RewardIcon, label: 'Rewards', path: '/checkout' },
];

const SidebarToggleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M15 3v18" />
  </svg>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={[
        'sticky top-0 z-50 flex shrink-0 flex-col overflow-visible border-border-soft bg-[image:var(--sidebar-bg)] transition-all duration-300',
        'h-auto w-full border-b px-5 py-4 md:h-screen md:border-b-0 md:border-r md:px-6 md:py-8',
        isCollapsed ? 'md:w-[90px] md:px-4' : 'md:w-[280px]',
      ].join(' ')}
    >
      <div className="mb-6 flex w-full shrink-0 items-center justify-between md:mb-8">
        <div className={isCollapsed ? 'block min-w-0 flex-1 md:hidden' : 'block min-w-0 flex-1'}>
          <img src={logo} alt="partywitty" className="h-auto w-full max-w-[160px] object-contain object-left" />
        </div>

        <div className={isCollapsed ? 'hidden flex-1 justify-center md:flex' : 'hidden'}>
          <img src={logo2} alt="partywitty" className="h-9 w-9 object-contain" />
        </div>

        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={() => setIsCollapsed((value) => !value)}
          className="absolute -right-4 z-50 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#7746ff45] text-verified-purple"
        >
          <SidebarToggleIcon />
        </button>
      </div>

      <nav
        className={[
          'flex flex-1 flex-col gap-1 overflow-x-hidden overflow-y-auto pb-5 max-md:hidden',
          isCollapsed ? 'items-center' : 'items-stretch',
        ].join(' ')}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            title={isCollapsed ? item.label : undefined}
            className={({ isActive }) => [
              'flex items-center gap-4 overflow-hidden whitespace-nowrap rounded-xl text-[15px] font-semibold text-text-dark transition-colors hover:bg-black/5',
              isActive ? 'bg-black/5' : '',
              isCollapsed ? 'w-full justify-center px-0 py-3' : 'px-4 py-3.5',
            ].join(' ')}
          >
            <item.icon size={24} strokeWidth={1.5} className="shrink-0" />
            <span className={isCollapsed ? 'hidden' : 'block'}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div
        className={[
          'flex shrink-0 flex-col max-md:hidden',
          isCollapsed ? 'items-center gap-2 pt-0' : 'items-stretch border-t border-border-soft pt-4',
        ].join(' ')}
      >
        <button
          type="button"
          className={[
            'flex items-center gap-4 overflow-hidden whitespace-nowrap rounded-xl text-[15px] font-semibold text-text-dark transition-colors hover:bg-black/5',
            isCollapsed ? 'h-7 w-10 justify-center p-0' : 'justify-start px-4 py-2.5',
          ].join(' ')}
        >
          <ListFilter size={isCollapsed ? 18 : 24} strokeWidth={1.7} />
          <span className={isCollapsed ? 'hidden' : 'block'}>More</span>
        </button>

        <div className={isCollapsed ? 'hidden' : 'mt-3 overflow-hidden rounded-md'}>
          <img src={subscription} alt="" className="w-full" />
        </div>

        <div className={['flex items-center gap-3', isCollapsed ? 'mt-0 justify-center' : 'mt-4 justify-start'].join(' ')}>
          <Avatar src={Profile} alt="Zeeshan">
            <div className={['absolute flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-white ring-1 ring-white', isCollapsed ? '-left-1 top-0' : '-left-1.5 top-1.5'].join(' ')}>
              <Crown size={10} strokeWidth={2} />
            </div>
          </Avatar>

          <div className={isCollapsed ? 'hidden' : 'flex min-w-0 flex-1 items-center justify-between'}>
            <div className="min-w-0 overflow-hidden">
              <div className="truncate text-sm font-bold text-text-dark">Zeeshan Ahmad</div>
              <div className="truncate text-[11px] text-text-muted">Indus Global Pvt Ltd Admin</div>
            </div>
            <ArrowUpRight size={18} className="ml-2 shrink-0 text-text-dark" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
