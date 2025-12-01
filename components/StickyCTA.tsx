import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default StickyCTA;