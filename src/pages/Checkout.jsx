import { ArrowLeft, MapPin, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationModal from '../components/VerificationModal.jsx';
import { Avatar, VerifiedName } from '../components/common';
import logo from '../assets/logo.png';
import zoya from '../assets/zoya.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed inset-0 overflow-y-auto bg-gradient-to-br from-[#E2DDF5] via-[#EAEAE8] to-[#E2ECD5]">
      <div className="relative mx-auto w-full max-w-[800px] px-6 py-10 pb-40">
        
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-3 bg-transparent text-[18px] font-bold text-[#1A1A1A]">
            <ArrowLeft size={24} strokeWidth={2.5} />
            Back
          </button>
          <img src={logo} alt="partywitty" className="h-7 w-auto object-contain" />
        </div>

        {/* Main Card */}
        <div className="rounded-[32px] bg-[#F4F4F4] p-8 shadow-sm">
          
          {/* Illusion Section */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-6 flex items-center gap-2.5 text-[22px] font-bold text-[#1A1A1A]">
                Illusion 
                <span className="text-[17px] text-[#FBBF24]">★</span>
                <span className="text-[17px] font-bold">4.1</span>
                <span className="text-[15px] font-bold text-[#1A1A1A] underline decoration-2 underline-offset-4 ml-1">Review</span>
                <span className="text-[15px] font-bold text-[#1A1A1A]">(03)</span>
              </div>
              <div className="flex items-start gap-4">
                <Avatar src={zoya} alt="Zoe" size="xl" />
                <div className="pt-1">
                  <VerifiedName name="Zoe Miller" age="22" className="mb-1 text-[20px]" iconSize={18} />
                  <div className="mb-2 text-[15px] font-bold text-[#4A4A4A]">Nocturne Rooftop</div>
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#71717A]">
                    <MapPin size={15} strokeWidth={2} />
                    Sector 38, Entertainment City • 13 km
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[16px] bg-[#E8E8E8] px-4 py-3">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#71717A]">OCT</div>
              <div className="mt-0.5 text-[22px] font-black text-[#1A1A1A]">24</div>
            </div>
          </div>

          {/* Tickets Price */}
          <div className="mb-6 flex items-center justify-between text-[16px] font-bold text-[#1A1A1A]">
            <div>Tickets Price</div>
            <div>₹59.00</div>
          </div>

          {/* Drink Card */}
          <div className="mb-8 flex items-center gap-6 rounded-[24px] bg-white p-5 shadow-sm">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=150" className="h-[90px] w-[90px] rounded-full object-cover" alt="Drink" />
            <div className="flex-1">
              <div className="mb-1 text-[20px] font-bold text-[#1A1A1A]">Wine Glass</div>
              <div className="mb-3 text-[14px] font-medium text-[#71717A]">Mint, Lime, Electric Glow</div>
              <div className="inline-block rounded-[8px] bg-[#D1F4E0] px-3 py-1.5 text-[12px] font-bold text-[#4ADE80]">
                You only pay for the drink if they accept your invite
              </div>
            </div>
            <div className="text-[18px] font-bold text-[#1A1A1A] pr-2">₹2199</div>
          </div>

          {/* Bill Details */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold text-[#1A1A1A]">Bill Details</h3>
            <div className="mb-4 flex justify-between text-[14px] font-bold text-[#4A4A4A]">
              <div>Tickets Amount</div>
              <div className="text-[#1A1A1A]">₹59</div>
            </div>
            <div className="mb-5 flex justify-between text-[14px] font-bold text-[#7C4DFF]">
              <div className="underline decoration-1 underline-offset-4">Platform & Other Charges</div>
              <div>₹5.90</div>
            </div>
            <div className="flex justify-between text-[17px] font-bold text-[#1A1A1A]">
              <div>Grand Total</div>
              <div>₹64.90</div>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center gap-3 px-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-[4px] border-[1.5px] border-[#7C4DFF] bg-transparent"></div>
          <label className="text-[14px] font-bold text-[#1A1A1A]">
            I agree to the <span className="text-[#7C4DFF] hover:underline cursor-pointer">Terms of Service</span> and <span className="text-[#7C4DFF] hover:underline cursor-pointer">Privacy Policy.</span>
          </label>
        </div>

        {/* Floating Bottom Bar */}
        <div className="fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white p-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <button className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-2 border-[#7C4DFF] bg-white text-[#7C4DFF] transition-transform hover:scale-105">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </button>
          <button className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white transition-transform hover:scale-105">
            <MoreHorizontal size={24} strokeWidth={2.5} />
          </button>
          <button onClick={() => setShowModal(true)} className="flex h-[46px] min-w-[200px] items-center justify-center rounded-full bg-[#7C4DFF] px-8 text-[15px] font-bold text-white transition-transform hover:scale-105">
            Make The Move Now
          </button>
        </div>
      </div>

      <VerificationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Checkout;
