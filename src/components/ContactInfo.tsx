import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="group flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shadow-lg">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-white">Email</h4>
          <a 
            href="mailto:saadrandhawa03@gmail.com" 
            className="mt-1 text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group/link"
          >
            saadrandhawa03@gmail.com
            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <div className="group flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-white">Phone</h4>
          <a 
            href="tel:+923450450266" 
            className="mt-1 text-xs text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group/link"
          >
            +92 345 0450266
            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <div className="group flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all duration-300">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center shadow-lg">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-white">Location</h4>
          <p className="mt-1 text-xs text-gray-300 flex items-center">
            Tehsil Shahkot, Punjab, Pakistan
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <h4 className="text-sm font-medium text-white mb-4">Connect with me</h4>
        <div className="flex space-x-3">
          <a 
            href="https://github.com/iamsaadrandhawa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              GitHub
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/iamsaadali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5" />
            <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              LinkedIn
            </div>
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-gray-300 text-center">
          Available for freelance projects and full-time opportunities
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
