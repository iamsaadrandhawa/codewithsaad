import { useContactForm } from '../hooks/useContactForm';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="input-field resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full !py-3.5 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-ink-950 border-t-transparent rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
