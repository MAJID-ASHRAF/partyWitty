import { CheckCircle2, Eye, Flame, Heart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, GradientButton } from '../components/common';
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
        <GradientButton variant="explore" className="mb-3 h-10 px-5 text-[11px] tracking-wide">
          EXPLORE FEED
        </GradientButton>

        <div className="relative aspect-[0.685] w-full max-w-[400px] overflow-hidden rounded-[30px] shadow-float">
          <img src={Miller} alt="Zoe Miller" className="h-full w-full object-cover object-center" />

            <div className="absolute left-4 right-4 top-4 flex gap-2">
            <div className="h-1 flex-1 rounded-sm bg-white" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
            <div className="h-1 flex-1 rounded-sm bg-white/30" />
          </div>

          <div className="absolute left-4 top-[30px] flex items-center gap-1 rounded-full bg-white/25 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
            <Flame size={12} />
            Matches Your Vibe
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07040b] via-[#13091acc] to-transparent px-6 pb-7 pt-32 text-white">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <div className="mb-1 flex items-center gap-2 text-[26px] font-bold leading-none text-white">
                  Zoe Miller, 22
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <div className="text-[15px] font-medium text-white/75">4 Mutual Mates</div>
              </div>
              <GradientButton className="h-9 shrink-0 px-5 text-sm shadow-[0_4px_12px_rgba(225,48,108,0.4)]">
                + Mate
              </GradientButton>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Bollywood Nights', 'Chill Crowd', 'Party Regular'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-black/10 px-3.5 py-1.5 text-xs font-medium text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex w-full max-w-[455px] items-center justify-center gap-5">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-[#EDEBE5] text-gray-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <X size={23} strokeWidth={2} />
          </button>
          <GradientButton
            onClick={() => navigate('/booking')}
            className="h-12 gap-2 px-8 text-lg shadow-[0_8px_24px_rgba(225,48,108,0.3)]"
          >
            <Flame size={18} />
            Go Tonight
          </GradientButton>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FF3D8D] bg-transparent text-[#FF3D8D] shadow-[0_4px_12px_rgba(219,39,119,0.1)]">
            <Heart size={23} strokeWidth={2} />
          </button>
        </div>
      </section>

      <aside className="w-full rounded-md border border-[#E1D6DF] bg-white px-4 py-5 shadow-none xl:sticky xl:top-10 xl:h-fit xl:w-[360px]">
        <div className="mb-6 text-center">
          <Avatar size='10' src={Profile} alt="User" className="mx-auto border-0 mb-2 shadow-none">
            <span className="sr-only">Verified profile</span>
          </Avatar>
          <h3 className="mb-1 text-[17px] font-extrabold text-text-dark">Make Your First Move</h3>
          <p className="mx-auto max-w-[250px] text-[13px] leading-snug text-text-muted">Verify your profile to start sending invites and offering drinks.</p>
        </div>

        <div className="mb-5 border-t border-[#D7CAD4] pt-4">
          <h3 className="mb-3 text-base font-extrabold">How It Works</h3>
          <div className="flex flex-col gap-3">
            {steps.map(([title, copy], index) => (
              <div key={title} className="flex gap-3">
                <img src={lemonJuice} alt="" className="h-[74px] w-[74px] rounded-xl object-cover" />
                <div className="min-w-0 pt-1">
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EB3D83] text-[11px] font-bold text-white">{index + 1}</span>
                    <Eye size={14} className="text-text-muted" />
                  </div>
                  <h4 className="mb-0.5 text-[14px] font-bold leading-tight">{title}</h4>
                  <p className="text-[11px] leading-snug text-text-muted">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="mb-5 space-y-3 border-t border-[#D7CAD4] pt-4">
          {benefits.map((text) => (
            <li key={text} className="flex items-center gap-3 text-[13px] font-medium leading-snug text-text-dark">
              <CheckCircle2 size={16} className="shrink-0 text-success-green" />
              {text}
            </li>
          ))}
        </ul>

        <GradientButton className="mb-3 h-11 w-full px-8 text-[15px]">
          Get Verified
        </GradientButton>
        <div className="text-center text-[12px] font-medium text-text-muted">
          Takes less than 60 seconds
          <div className="mt-2">
            <span className="cursor-pointer text-[12px] font-semibold text-text-dark underline">Maybe later</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Feed;
