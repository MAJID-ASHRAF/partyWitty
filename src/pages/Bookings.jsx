import { CheckCircle2, ChevronDown, MapPin, Mic, Search, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, GradientButton } from '../components/common';
import Profile from '../assets/Profile.png';
import drinking from '../assets/drinking.png';
import friends from '../assets/friends.png';
import party from '../assets/party.png';
import zoya from '../assets/zoya.png';

const events = [drinking, party, friends].map((image, index) => ({
  id: index + 1,
  image,
  venue: 'PRISM NIGHTCLUB',
  name: 'F-Bar',
  rating: '4.1',
  day: 'Friday',
  time: '10:00 PM onwards',
  note: 'Zoya has been here twice',
  location: 'Nocturne Rooftop',
  address: 'Sector 38, Entertainment City  -  13 km',
  discount: '36% OFF  F&B',
}));

const circleImages = [zoya, Profile, zoya, Profile];

const BookingCard = ({ event, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="overflow-hidden rounded-[22px] bg-white text-left shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
  >
    <div className="relative h-[350px] w-full">
      <img src={event.image} alt={event.name} className="h-full w-full rounded-t-[22px] object-cover" />

      <div className="absolute left-5 top-4 rounded-full bg-green-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-green-500 backdrop-blur-md">
        Happening Now
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-black/35 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
        Vibe Matches
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent px-5 pb-8 pt-24 text-white">
        <div className="mb-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90">{event.venue}</div>
        <div className="flex items-end justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="text-[27px] font-extrabold leading-none">{event.name}</h3>
            <span className="inline-flex h-7 items-center gap-1 rounded-full bg-[#323338] px-2.5 text-[12px] font-bold text-white">
              <Star size={13} className="fill-[#FBBF24] text-[#FBBF24]" />
              {event.rating}
            </span>
          </div>
          <div className="shrink-0 text-right text-[13px] font-medium leading-tight">
            <div>{event.day}</div>
            <div>{event.time}</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 z-10 inline-flex h-8 max-w-[calc(100%-48px)] -translate-x-1/2 items-center gap-2 rounded-full bg-[image:var(--primary-gradient)] px-3 pr-4 text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(225,48,108,0.25)]">
        <img src={zoya} className="h-5 w-5 shrink-0 rounded-full object-cover" alt="" />
        <span className="min-w-0 truncate">{event.note}</span>
      </div>
    </div>

    <div className="bg-transparent px-5 pb-5 pt-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <MapPin size={21} className="mt-0.5 shrink-0 text-text-muted" />
          <div className="min-w-0">
            <div className="mb-1 text-[14px] font-extrabold leading-tight text-text-dark">{event.location}</div>
            <div className="truncate text-[12px] font-medium leading-tight text-text-muted">{event.address}</div>
          </div>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100/80">
          <ChevronDown size={17} className="text-text-muted" />
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="flex -space-x-2.5">
            {circleImages.map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <span className="-ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-white text-[13px] font-bold text-text-dark shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            22+
          </span>
          <span className="ml-2 whitespace-nowrap text-[12px] font-medium text-text-muted">Your Circle</span>
        </div>
        <div className="shrink-0 whitespace-nowrap text-[16px] font-extrabold tracking-[0.04em] text-green-600">{event.discount}</div>
      </div>
    </div>
  </button>
);

const Bookings = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-[1180px]">
      <div className="mb-5 text-[12px] font-medium text-text-muted">
        Home / Party Package / <span className="font-bold text-text-dark">Selected item</span>
      </div>

      <div className="mb-8 flex items-center justify-between gap-7">
        <div className="flex min-h-[92px] flex-1 flex-col justify-center rounded-[22px] bg-white/45 px-6">
          <div className="mb-3 text-[16px] font-extrabold text-text-dark">Pick a plan you'd both enjoy</div>
          <div className="flex items-center gap-3">
            <Avatar src={zoya} alt="Zoe" size="md" />
            <div className="flex items-center gap-2 text-[15px] font-extrabold text-text-dark">
              Zoe Miller, 22
              <CheckCircle2 size={17} className="text-verified-purple" />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <Avatar src={Profile} alt="Alen" size="xl" className=" shadow-[0_4px_14px_rgba(61,28,255,0.22)]" />
          <div>
            <div className="mb-2 text-[18px] font-medium text-text-dark">Alen Markram</div>
            <GradientButton className="h-8 px-4 text-[13px]">Get Verified</GradientButton>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-[25px] font-medium text-text-dark">Tonight near you</h2>
        <div className="flex h-11 w-full max-w-[280px] items-center gap-3 rounded-full bg-white/45 px-5">
          <Search size={18} className="shrink-0 text-black" />
          <input type="text" placeholder="Search..." className="min-w-0 flex-1 bg-transparent text-[13px] font-semibold outline-none placeholder:text-black" />
          <Mic size={18} className="shrink-0 text-black" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {events.map((event) => (
          <BookingCard key={event.id} event={event} onClick={() => navigate('/drinks')} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
