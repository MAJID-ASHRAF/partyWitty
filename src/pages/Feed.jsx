import { CheckCircle2, Eye, Flame, Heart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Miller from '../assets/feed.png';
import Profile from '../assets/Profile.png';
import lemonJuice from '../assets/lemonJuice.png';

const steps = [
  ['Spot Your Person', "Pick someone you'd genuinely enjoy going out with."],
  ['Send a Drink', "Offer their first drink your way of saying let's go out."],
  ["They Accept - You're Set", "Once accepted, it's a confirmed plan. No endless chatting."],
];

const benefits = [
  'Get noticed faster',
  'Higher chances your invite gets accepted',
  'Unlock drink invites & premium interactions',
  'Build trust with every profile visit',
];

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-8 xl:flex-row xl:gap-12">
      <section className="mx-auto flex w-full max-w-[600px] flex-1 flex-col items-center">
        <button className="mb-6 rounded-full bg-indigo-action px-8 py-3 text-[15px] font-semibold tracking-wide text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)] transition-transform hover:-translate-y-0.5">
          EXPLORE FEED
        </button>

        <div className="relative aspect-[0.7] w-full max-w-[420px] overflow-hidden rounded-[32px] shadow-float">
          <img src={Miller} alt="Zoe Miller" className="h-full w-full object-cover" />

          <div className="absolute left-4 right-4 top-4 flex gap-2">
            <div className="h-1 flex-1 rounded-sm bg-white" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
          </div>

          <div className="absolute left-4 top-8 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
            <Flame size={14} />
            Matches Your Vibe
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f0a14f2] via-[#0f0a14cc] to-transparent px-5 pb-5 pt-20 text-white">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2 text-[28px] font-bold tracking-[-0.5px]">
                  Zoe Miller, 22
                  <CheckCircle2 size={20} />
                </div>
                <div className="text-sm font-medium text-white/70">4 Mutual Mates</div>
              </div>
              <button className="rounded-full bg-[image:var(--primary-gradient)] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(225,48,108,0.4)]">
                + Mate
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Bollywood Nights', 'Chill Crowd', 'Party Regular'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full max-w-[420px] items-center justify-center gap-6 bg-[radial-gradient(ellipse_at_top,rgba(225,48,108,0.15)_0%,transparent_70%)] pt-5">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-gray-600 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <X size={24} />
          </button>
          <button
            onClick={() => navigate('/booking')}
            className="flex h-14 items-center gap-2.5 rounded-full bg-[image:var(--primary-gradient)] px-8 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(225,48,108,0.3)]"
          >
            <Flame size={22} />
            Go Tonight
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-pink-100 text-pink-600 shadow-[0_4px_12px_rgba(219,39,119,0.1)]">
            <Heart size={24} />
          </button>
        </div>
      </section>

      <aside className="w-full rounded-[24px] border border-border-soft bg-panel-bg p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] xl:sticky xl:top-10 xl:h-fit xl:w-[360px]">
        <div className="mb-10 text-center">
          <img src={Profile} alt="User" className="mx-auto mb-4 h-[88px] w-[88px] rounded-full border-4 border-white object-cover shadow-[0_4px_16px_rgba(0,0,0,0.08)]" />
          <h3 className="mb-2 text-xl font-bold text-text-dark">Make Your First Move</h3>
          <p className="text-sm leading-relaxed text-text-muted">Verify your profile to start sending invites and offering drinks.</p>
        </div>

        <div className="mb-8">
          <h3 className="mb-6 text-base font-bold">How It Works</h3>
          <div className="flex flex-col gap-6">
            {steps.map(([title, copy], index) => (
              <div key={title} className="flex gap-4">
                <img src={lemonJuice} alt="" className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E1306C] text-xs font-bold text-white">{index + 1}</span>
                    <Eye size={16} className="text-text-muted" />
                  </div>
                  <h4 className="mb-1 text-[15px] font-semibold">{title}</h4>
                  <p className="text-[13px] leading-relaxed text-text-muted">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="mb-8 space-y-4">
          {benefits.map((text) => (
            <li key={text} className="flex items-center gap-3 text-sm font-medium text-text-dark">
              <CheckCircle2 size={18} className="text-success-green" />
              {text}
            </li>
          ))}
        </ul>

        <button className="mb-4 w-full rounded-full bg-[image:var(--primary-gradient)] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_12px_rgba(225,48,108,0.2)]">
          Get Verified
        </button>
        <div className="text-center text-[13px] font-medium text-text-muted">
          Takes less than 60 seconds
          <div className="mt-2">
            <span className="cursor-pointer font-semibold text-text-dark underline">Maybe later</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Feed;
