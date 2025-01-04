import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start">
        <Mail className="flex-shrink-0 w-6 h-6 text-indigo-600" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">Email</h4>
          <a href="mailto:saadrandhawa03@gmail.com" className="mt-1 text-gray-500 hover:text-indigo-600">
            saadrandhawa03@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="flex-shrink-0 w-6 h-6 text-indigo-600" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">Phone</h4>
          <a href="tel:+923450450266" className="mt-1 text-gray-500 hover:text-indigo-600">
            +92 345 0450266
          </a>
        </div>
      </div>
      <div className="flex items-start">
        <MapPin className="flex-shrink-0 w-6 h-6 text-indigo-600" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">Location</h4>
          <p className="mt-1 text-gray-500">Tehsil Shahkot, Punjab, Pakistan</p>
        </div>
      </div>
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/iamsaadrandhawa" target="_blank" rel="noopener noreferrer" 
           className="text-gray-500 hover:text-indigo-600">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/iamsaadrandhawa" target="_blank" rel="noopener noreferrer"
           className="text-gray-500 hover:text-indigo-600">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;