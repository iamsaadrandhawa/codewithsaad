import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppLink } from '../utils/whatsapp';

const WhatsAppButton = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    title="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-ink-950 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform duration-200"
  >
    <span className="relative flex h-6 w-6 items-center justify-center shrink-0">
      <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping" />
      <WhatsAppIcon className="relative w-5 h-5" />
    </span>
    <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
      Chat on WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
