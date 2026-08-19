import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { MessageCircle, Clock } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-30" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(34,211,238,0.08), transparent 70%)',
        }}
        aria-hidden
      />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0F1620',
            color: '#E2E8F0',
            border: '1px solid rgba(34,211,238,0.3)',
            borderRadius: '10px',
          },
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get in Touch"
          description="Let's discuss your next project and bring your ideas to life."
          icon={<MessageCircle className="w-3.5 h-3.5" />}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="card-surface p-7 sm:p-8 h-full relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Send a message</h3>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.08] border border-accent/25">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium text-accent-200">
                    Usually replies within 24h
                  </span>
                </span>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120}>
            <div className="card-surface p-7 sm:p-8 h-full">
              <ContactInfo />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
