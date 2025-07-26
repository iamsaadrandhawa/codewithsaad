import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/10ThHNQasUW7ypN4zT7HeGaCRLc-u62nB/view?usp=sharing"
    },
    {
      name: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1LZYyEjCKjL3y6RZGlCze312jSz5cT55Y/view?usp=sharing"
    },
    {
      name: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1iq-7ZpjTOmICYzHE4VD2av4maFWN12j-/view?usp=sharing"
    },
     {
      name: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "2025",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1sqKdNoIERcGxtlo8Sc4nX8byWOO_D76G/view?usp=sharing"
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "2025",
      recipient: "Saad Ali Muhammad Arshad",
      link: "https://drive.google.com/file/d/1TI-ASqVsnjnQRgsWOzz4M180wd54uoYF/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Certifications</h2>
          <p className="mt-4 text-lg text-gray-500">Industry-recognized certifications demonstrating expertise in networking and security</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&q=80&w=120" 
                  alt="Cisco Logo" 
                  className="h-12 object-contain"
                />
              </div>
              <Award className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 text-center">{cert.name}</h3>
              <p className="text-gray-600 mt-2 text-center">{cert.issuer}</p>
              <p className="text-gray-500 mt-1 text-center">{cert.date}</p>
              <div className="mt-4 text-center">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
