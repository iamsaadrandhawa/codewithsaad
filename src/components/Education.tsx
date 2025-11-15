import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Riphah International University',
      location: 'Faisalabad',
      year: '2024',
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      status: 'Completed',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      degree: 'FSC Pre Engineering',
      institution: 'Superior College',
      location: 'Shahkot',
      year: '2020',
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      status: 'Completed',
      gradient: 'from-indigo-400 to-purple-400'
    },
    {
      degree: 'Matric in Computer Science',
      institution: 'Al Raza High School',
      location: 'Shahkot',
      year: '2017',
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      status: 'Completed',
      gradient: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
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
            <Award className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-indigo-200">Academic Journey</span>
          </div>
          
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications that shaped my technical expertise
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-cyan-400/30 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${edu.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${edu.gradient} shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="mt-2 text-lg text-gray-300 font-medium">
                  {edu.institution}
                </p>

                {/* Location and Year */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-3 text-indigo-400" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium text-green-400">{edu.status}</span>
                </div>
              </div>

              {/* Hover Effect Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Timeline Connector (Optional Visual Element) */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400"></div>
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-green-400"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Award className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-gray-300 text-sm">
              Continuously learning and upgrading skills through online courses and practical projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;