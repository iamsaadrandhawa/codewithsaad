import React from 'react';
import { Award, ExternalLink, FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/10ThHNQasUW7ypN4zT7HeGaCRLc-u62nB/view?usp=sharing",
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      name: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1LZYyEjCKjL3y6RZGlCze312jSz5cT55Y/view?usp=sharing",
      gradient: 'from-indigo-400 to-purple-400'
    },
    {
      name: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1iq-7ZpjTOmICYzHE4VD2av4maFWN12j-/view?usp=sharing",
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      name: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "2025",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1sqKdNoIERcGxtlo8Sc4nX8byWOO_D76G/view?usp=sharing",
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "2025",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1TI-ASqVsnjnQRgsWOzz4M180wd54uoYF/view?usp=sharing",
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2025",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/18eYUu8t-oRmcSzm1vOwpBjpPvuIRigcu/view?usp=sharing",
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  return (
   <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
    <div className="grid-pattern opacity-10"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
        <FileText className="w-4 h-4 text-yellow-400 mr-2" />
        <span className="text-sm font-medium text-indigo-200">Professional Credentials</span>
      </div>
      
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Professional Certifications
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Industry-recognized certifications demonstrating expertise in networking and security
      </p>
    </div>

    {/* Certifications Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-cyan-400/30 overflow-hidden"
        >
          {/* Gradient Top Bar */}
          <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
          
          <div className="p-6">
            {/* Icon with Gradient Background */}
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${cert.gradient} shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
              <Award className="w-5 h-5 text-white" />
            </div>

            {/* Certification Name */}
            <h3 className="text-lg font-semibold text-white">
              {cert.name}
            </h3>

            {/* Issuer */}
            <p className="mt-2 text-sm text-gray-300 font-medium">
              {cert.issuer}
            </p>

            {/* Date and Recipient */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-400">
                <span className="text-xs">Issued: {cert.date}</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <span className="text-xs">To: {cert.recipient}</span>
              </div>
            </div>

            {/* View Certificate Button */}
            <div className="mt-6">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm w-full justify-center text-xs"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                View Certificate
              </a>
            </div>
          </div>

          {/* Hover Effect Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
        </div>
      ))}
    </div>

    {/* Additional Info */}
    <div className="mt-12 text-center">
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10">
        <Award className="w-4 h-4 text-yellow-400 mr-3" />
        <span className="text-gray-300 text-xs">
          Continuously enhancing skills through industry-recognized certifications and training programs
        </span>
      </div>
    </div>
  </div>
</section>
  );
};

export default Certifications;