import React from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="grid-pattern opacity-10"></div>
      </div>

      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-indigo-200">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/30 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            <div className="p-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:bg-white/10 hover:border-purple-400/30 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="p-8">
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <MessageCircle className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-gray-300 text-sm">
              I typically respond within 24 hours. Let's create something amazing together!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;