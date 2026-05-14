import { CheckCircle2, Copy, Plus, RefreshCcw, ShieldCheck, Sparkles, Sun, Trash2, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FaceScan from '../assets/FaceScan.png';

const VerificationModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState('intro');

  useEffect(() => {
    if (step !== 'scan') return undefined;
    const timer = setTimeout(() => setStep('verified'), 3000);
    return () => clearTimeout(timer);
  }, [step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur">
      <div className={['relative max-h-[90vh] w-full overflow-y-auto rounded-[32px] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.1)]', step === 'photos' ? 'max-w-[650px]' : 'max-w-[520px]', step === 'scan' ? 'p-6' : 'p-12'].join(' ')}>
        <button onClick={onClose} className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-text-muted transition-colors hover:bg-gray-200">
          <X size={24} />
        </button>

        {step !== 'intro' && <div className="absolute left-8 top-8 z-10 text-[15px] font-semibold text-text-muted">Verification Success</div>}

        {step === 'intro' && (
          <>
            <div className="relative mx-auto mb-8 flex h-40 w-[120px] items-center justify-center rounded-[60px] border-2 border-dashed border-slate-300">
              <div className="flex h-[100px] w-20 items-center justify-center rounded-[40px] border-4 border-slate-600">
                <div className="relative h-8 w-8 rounded-full border-4 border-slate-600" />
              </div>
              <div className="absolute -right-2 top-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-400">
                <CheckCircle2 size={18} color="white" />
              </div>
            </div>

            <h2 className="mb-4 text-center text-[28px] font-bold text-text-dark">You're one step away</h2>
            <p className="mb-10 text-center text-base leading-relaxed text-text-muted">Verify your profile to send this invite and connect with people around you.</p>

            <div className="mb-10 flex flex-wrap justify-center gap-5">
              {['Builds trust instantly', 'Better chances she accepts', 'Unlocks special invites'].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-sm font-semibold text-text-dark">
                  <CheckCircle2 size={18} className="text-success-green" />
                  {text}
                </div>
              ))}
            </div>

            <button onClick={() => setStep('scan')} className="mb-5 w-full rounded-full bg-[image:var(--primary-gradient)] p-[18px] text-base font-semibold text-white shadow-[0_4px_12px_rgba(225,48,108,0.2)]">
              Verify & Send Invite
            </button>
            <div className="text-center text-xs font-bold tracking-wide text-text-muted">TAKES LESS THAN 30 SECONDS</div>
          </>
        )}

        {step === 'scan' && (
          <div className="relative h-[540px] w-full overflow-hidden rounded-[24px] bg-black">
            <img src={FaceScan} alt="Face Scan" className="h-full w-full object-cover opacity-80" />
          </div>
        )}

        {step === 'verified' && (
          <div className="py-8 text-center">
            <div className="relative mx-auto mb-10 h-[180px] w-[180px]">
              <div className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-border-soft">
                <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full bg-gradient-to-b from-teal-600 to-teal-950">
                  <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-success-green px-3 py-1 text-[11px] font-bold text-white">
                    <CheckCircle2 size={14} />
                    VERIFIED
                  </div>
                </div>
              </div>
              <div className="absolute right-1 top-0 rounded-full bg-verified-purple p-2.5 text-white shadow-[0_4px_12px_rgba(124,77,255,0.4)]"><Sparkles size={18} /></div>
            </div>
            <h2 className="mb-3 text-4xl font-bold text-text-dark">You're verified</h2>
            <p className="mb-10 text-base font-medium text-text-muted">No fake vibes here. You're almost in</p>
            <div className="mb-10">
              <div className="mb-3 h-2 w-full overflow-hidden rounded-md bg-gray-100"><div className="h-full w-[98.4%] rounded-md bg-gradient-to-r from-verified-purple to-blue-500" /></div>
              <div className="text-[13px] font-bold tracking-wide text-verified-purple">IDENTITY MATCH 98.4%</div>
            </div>
            <button onClick={() => setStep('photos')} className="mb-5 w-full rounded-full bg-verified-purple p-[18px] text-lg font-bold text-white shadow-[0_8px_24px_rgba(124,77,255,0.3)]">Go to Dashboard</button>
          </div>
        )}

        {step === 'photos' && (
          <div>
            <h2 className="mb-3 text-[32px] font-bold text-text-dark">Show your vibe</h2>
            <p className="mb-8 text-base font-medium text-text-muted">Add up to 6 photos people will actually vibe with</p>
            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-border-soft bg-gray-100 text-text-muted">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)]"><Plus size={24} /></div>
                <span className="text-sm font-semibold">+ Add Photo</span>
              </div>
              {['1534528741775-53994a69daeb', '1517841905240-472988babdf9', '1524504388940-b1c1722653e1'].map((id) => (
                <div key={id} className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
                  <img src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=400`} alt="" className="h-full w-full object-cover" />
                  <button className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-white"><Trash2 size={16} /></button>
                </div>
              ))}
              <Hint icon={Users} label="With friends" />
              <Hint icon={Copy} label="Candid posed" />
            </div>
            <button onClick={() => { onClose(); navigate('/'); }} className="w-full rounded-full bg-[#18181B] p-[18px] text-base font-semibold text-white">Finish Setup</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Hint = ({ icon: Icon, label }) => (
  <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-[20px] bg-gray-100 text-text-muted">
    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-text-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)]"><Icon size={24} /></div>
    <span className="mb-1 text-[11px] font-bold tracking-wide">HINT</span>
    <span className="text-[13px] font-medium">{label}</span>
  </div>
);

export default VerificationModal;
