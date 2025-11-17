import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 backdrop-blur-sm px-4 py-3 transition-all duration-300"
          placeholder="Enter your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 backdrop-blur-sm px-4 py-3 transition-all duration-300"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 backdrop-blur-sm px-4 py-3 transition-all duration-300 resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-105 backdrop-blur-sm"
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;