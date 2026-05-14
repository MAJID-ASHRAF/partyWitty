import { CheckCircle2, ChevronDown, MapPin, Mic, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/Profile.png';
import drinking from '../assets/drinking.png';
import friends from '../assets/friends.png';
import party from '../assets/party.png';
import zoya from '../assets/zoya.png';

const events = [party, drinking, friends].map((image, index) => ({
  id: index + 1,
  image,
  venue: 'PRISM NIGHTCLUB',
  name: 'F-Bar',
  rating: '4.1',
  day: 'Friday',
  time: '10:00 PM onwards',
  note: 'Zoya has been here twice',
  location: 'Nocturne Rooftop',
  address: 'Sector 38, Entertainment City - 13 km',
  discount: '36% OFF F&B',
}));

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="mb-8 text-sm font-medium text-text-muted">
        Home / Party Package / <span className="font-semibold text-text-dark">Selected item</span>
      </div>

      <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-auto items-center gap-4 rounded-full border border-border-soft bg-panel-bg px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <div className="text-[15px] font-semibold">Pick a plan you'd both enjoy</div>
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <img src={zoya} className="h-7 w-7 rounded-full" alt="Zoe" />
            <span className="text-sm font-semibold">Zoe Miller, 22</span>
            <CheckCircle2 size={16} className="text-verified-purple" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[15px] font-bold">Alen Markram</div>
            <div className="mt-1 inline-block rounded-full bg-[image:var(--primary-gradient)] px-3 py-1 text-xs font-semibold text-white">Get Verified</div>
          </div>
          <img src={Profile} className="h-14 w-14 rounded-full object-cover" alt="Alen" />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[28px] font-bold text-text-dark">Tonight near you</h2>
        <div className="flex w-full max-w-[320px] items-center gap-3 rounded-full border border-border-soft bg-white px-6 py-3">
          <Search size={20} className="shrink-0 text-text-muted" />
          <input type="text" placeholder="Search.." className="w-full border-0 bg-transparent text-[15px] outline-none placeholder:text-text-muted" />
          <Mic size={20} className="shrink-0 text-text-muted" />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-8">
        {events.map((event) => (
          <button key={event.id} onClick={() => navigate('/drinks')} className="overflow-hidden rounded-[32px] border border-border-soft bg-panel-bg text-left shadow-card transition-transform hover:-translate-y-1">
            <div className="relative h-[280px] w-full">
              <img src={event.image} alt={event.name} className="h-full w-full object-cover" />
              <div className="absolute left-5 top-5 rounded-full bg-green-500/20 px-4 py-1.5 text-[11px] font-bold tracking-wide text-green-400 backdrop-blur-md">HAPPENING NOW</div>
              <div className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">Vibe Matches</div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-6 pt-10 text-white">
                <div className="mb-2 text-xs font-semibold tracking-wide opacity-90">{event.venue}</div>
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[32px] font-bold">{event.name}</h3>
                    <span className="rounded-lg bg-amber-400 px-2 py-1 text-[13px] font-bold text-gray-900">★ {event.rating}</span>
                  </div>
                  <div className="text-right text-[13px] font-medium">
                    <div>{event.day}</div>
                    <div className="opacity-90">{event.time}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-12 right-12 z-10 inline-flex items-center gap-2 rounded-full bg-[image:var(--primary-gradient)] px-4 py-2 text-[13px] font-semibold text-pink-50 shadow-[0_4px_12px_rgba(225,48,108,0.15)]">
                <img src={zoya} className="h-5 w-5 rounded-full" alt="Zoya" />
                {event.note}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-start justify-between pt-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <MapPin size={20} className="text-text-muted" />
                  </div>
                  <div>
                    <div className="mb-1 text-base font-bold text-text-dark">{event.location}</div>
                    <div className="text-[13px] text-text-muted">{event.address}</div>
                  </div>
                </div>
                <ChevronDown size={24} className="text-text-muted" />
              </div>
              <div className="flex items-center justify-between border-t border-border-soft pt-5">
                <span className="text-[13px] font-medium text-text-muted">Your Circle</span>
                <div className="text-[15px] font-bold text-success-green">{event.discount}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Events;
