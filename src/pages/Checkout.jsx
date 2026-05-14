import { ArrowLeft, CheckCircle2, MapPin, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationModal from '../components/VerificationModal.jsx';
import logo from '../assets/logo.png';
import zoya from '../assets/zoya.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[800px]">
      <div className="mb-10 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 bg-transparent text-base font-semibold text-text-dark">
          <ArrowLeft size={24} />
          Back
        </button>
        <img src={logo} alt="partywitty" className="h-auto max-w-[160px]" />
      </div>

      <div className="rounded-[32px] border border-border-soft bg-panel-bg p-10 shadow-card">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="mb-5 flex items-center gap-3 text-2xl font-bold text-text-dark">
              Illusion <span className="text-lg text-[#FBBF24]">★ 4.1</span>
              <span className="text-[15px] font-medium text-text-muted underline">Review (03)</span>
            </div>
            <div className="flex items-center gap-5">
              <img src={zoya} className="h-10 w-10 rounded-full object-cover" alt="Zoe" />
              <div>
                <div className="mb-1.5 flex items-center gap-1.5 text-xl font-bold text-text-dark">
                  Zoe Miller, 22 <CheckCircle2 size={20} className="text-verified-purple" />
                </div>
                <div className="mb-1.5 text-[15px] font-medium text-text-muted">Nocturne Rooftop</div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-text-muted">
                  <MapPin size={14} />
                  Sector 38, Entertainment City - 13 km
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 px-5 py-4 text-center">
            <div className="text-[13px] font-bold tracking-wide text-text-muted">OCT</div>
            <div className="text-2xl font-bold text-text-dark">24</div>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between text-base font-bold text-text-dark">
          <div>Tickets Price</div>
          <div>₹59.00</div>
        </div>

        <div className="mb-10 flex items-center gap-6 rounded-[24px] border border-border-soft bg-gray-50 p-6">
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=150" className="h-20 w-20 rounded-full object-cover" alt="Drink" />
          <div className="flex-1">
            <div className="mb-1.5 text-xl font-bold text-text-dark">Wine Glass</div>
            <div className="mb-3 text-[15px] font-medium text-text-muted">Mint, Lime, Electric Glow</div>
            <div className="inline-block rounded-lg bg-green-100 px-4 py-2 text-[13px] font-semibold text-green-800">You only pay for the drink if they accept your invite</div>
          </div>
          <div className="text-2xl font-bold text-text-dark">₹2199</div>
        </div>

        <div className="mb-10 border-t border-border-soft pt-8">
          <h3 className="mb-5 text-lg font-bold text-text-dark">Bill Details</h3>
          <div className="mb-4 flex justify-between text-[15px] font-medium text-text-muted">
            <div>Tickets Amount</div>
            <div>₹59.00</div>
          </div>
          <div className="mb-5 flex justify-between text-[15px] font-medium text-verified-purple underline">
            <div>Platform & Other Charges</div>
            <div>₹5.90</div>
          </div>
          <div className="flex justify-between text-xl font-bold text-text-dark">
            <div>Grand Total</div>
            <div>₹64.90</div>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-4">
          <input type="checkbox" id="terms" className="h-6 w-6 accent-verified-purple" />
          <label htmlFor="terms" className="cursor-pointer text-[15px] font-medium text-text-muted">
            I agree to the <span className="font-semibold text-verified-purple">Terms of Service</span> and <span className="font-semibold text-verified-purple">Privacy Policy</span>.
          </label>
        </div>

        <div className="flex justify-center gap-5">
          <button className="flex h-16 w-16 items-center justify-center rounded-full border border-border-soft bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <ShieldCheck size={28} className="text-verified-purple" />
          </button>
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-verified-purple text-white shadow-[0_4px_12px_rgba(124,77,255,0.3)]">
            <MoreHorizontal size={28} />
          </button>
          <button onClick={() => setShowModal(true)} className="max-w-[400px] flex-1 rounded-full bg-[image:var(--secondary-gradient)] px-8 text-lg font-bold text-white shadow-[0_8px_24px_rgba(124,77,255,0.3)]">
            Make The Move Now
          </button>
        </div>
      </div>

      <VerificationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Checkout;
