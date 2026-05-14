import { CheckCircle2, Clock, Edit2, Flower2, Gift, Hand, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/Profile.png';
import bar from '../assets/bar.png';
import hotel from '../assets/hotel.png';
import lemonJuice from '../assets/lemonJuice.png';
import zoya from '../assets/zoya.png';

const drinks = [
  ['Dry Martini', '₹999', 'MOST LIKELY TO GET ACCEPTED', true, bar],
  ['Cosmopolitan', '₹199', 'Easy Choose', false, lemonJuice],
  ['Mai Tai', '₹899', 'Most Popular', false, lemonJuice],
  ['Wine Glass', '₹2199', 'Make An Impression', false, lemonJuice],
  ['Dry Martini', '₹999', 'MOST LIKELY TO GET ACCEPTED', true, bar],
  ['Cosmopolitan', '₹199', 'Easy Choose', false, bar],
  ['Mai Tai', '₹899', 'Most Popular', false, bar],
  ['Wine Glass', '₹2199', 'Make An Impression', false, lemonJuice],
];

const Drinks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-8 xl:flex-row xl:flex-wrap xl:gap-12">
      <aside className="mx-auto w-full max-w-[360px]">
        <div className="mb-8 flex items-center gap-4">
          <img src={Profile} className="h-14 w-14 rounded-full object-cover" alt="Alen" />
          <div>
            <div className="text-lg font-bold text-text-dark">Alen Markram</div>
            <div className="mt-1.5 inline-block rounded-full bg-[image:var(--primary-gradient)] px-4 py-1.5 text-xs font-semibold text-white">Get Verified</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-border-soft bg-panel-bg shadow-card">
          <img src={hotel} alt="Venue" className="h-[240px] w-full object-cover" />
          <div className="relative -mt-12 px-6 pb-6 pt-8">
            <div className="mb-8 flex items-center gap-4">
              <img src={zoya} className="h-16 w-16 rounded-full border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]" alt="Zoe" />
              <div>
                <div className="flex items-center gap-1.5 text-xl font-bold text-text-dark">
                  Zoe Miller, 22 <CheckCircle2 size={20} className="text-verified-purple" />
                </div>
                <div className="text-sm font-medium text-text-muted">Nocturne Rooftop</div>
              </div>
            </div>
            <div className="mb-5 flex gap-4 text-text-muted">
              <MapPin size={22} />
              <div className="text-[15px] font-medium">Sector 38, Noida at ILLUSION</div>
            </div>
            <div className="flex gap-4 text-text-muted">
              <Clock size={22} />
              <div className="text-[15px] font-medium">Tonight, 10:30 PM -</div>
            </div>
          </div>
        </div>
      </aside>

      <section className="min-w-[320px] flex-1">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-text-dark">One Step Before Your First Move</h2>
          <p className="text-[15px] text-text-muted">Verify your profile to send invites and offer drinks.</p>
        </div>

        <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {drinks.map(([name, price, tag, recommended, image], index) => (
            <button
              key={`${name}-${index}`}
              onClick={() => navigate('/checkout')}
              className={[
                'relative flex min-h-[120px] items-stretch overflow-hidden rounded-[24px] border-2 border-transparent text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]',
                recommended
                  ? 'bg-[linear-gradient(#F3F4F6,#F3F4F6)_padding-box,linear-gradient(90deg,#c026d3,#e11d48)_border-box] shadow-[0_8px_24px_rgba(225,48,108,0.1)]'
                  : 'bg-gray-100',
              ].join(' ')}
            >
              <img src={image} alt={name} className="w-[110px] rounded-l-[22px] object-cover" />
              <div className="relative flex flex-1 flex-col justify-center px-5 py-4">
                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[22px] bg-gradient-to-r from-fuchsia-700 to-rose-600 px-4 py-1.5 text-[13px] font-bold text-white">
                  {price}
                </div>
                <div className="mb-1.5 pr-10 text-lg font-extrabold text-gray-800">{name}</div>
                <div className="mb-3.5 text-xs font-medium text-gray-500">Mint, Lime, Electric Glow</div>
                <div className={['self-start rounded-xl px-3 py-1.5 text-[9.5px] font-extrabold uppercase tracking-wide', recommended ? 'bg-green-100 text-green-600' : 'bg-pink-100 text-fuchsia-500'].join(' ')}>
                  {tag}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-5">
          {[
            [Hand, 'Wave', 'FREE'],
            [Flower2, 'Send a Rose', '₹10'],
            [Gift, 'Chocolate', '₹25'],
          ].map(([Icon, label, price]) => (
            <button key={label} className="rounded-[24px] border border-border-soft bg-panel-bg px-4 py-6 text-center transition-transform hover:-translate-y-0.5">
              <Icon size={28} color="#E1306C" className="mx-auto mb-3" />
              <div className="text-[15px] font-semibold text-text-dark">{label}</div>
              <div className="mt-1 text-[13px] text-text-muted">{price}</div>
            </button>
          ))}
        </div>

        <div>
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-text-muted">A Little About Me</div>
          <div className="flex items-center justify-between rounded-[24px] border border-border-soft bg-panel-bg p-5">
            <span className="text-[15px] font-medium text-text-dark">Hey, I'm Aman, into good music and chill nights</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Edit2 size={18} className="text-text-muted" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drinks;
