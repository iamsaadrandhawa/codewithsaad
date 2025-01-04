import React from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Let's discuss your next project
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <ContactForm />
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;