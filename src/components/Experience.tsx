import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Frontend Developer',
      company: 'Techsol Solutions',
      location: 'Faisalabad',
      period: 'Jan 2023 - Present',
      description: 'Developed responsive web applications using React and TypeScript. Implemented modern UI/UX designs and improved application performance.',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />
    },
    {
      position: 'Web Developer Intern',
      company: 'Digital Minds',
      location: 'Remote',
      period: 'Jun 2022 - Dec 2022',
      description: 'Assisted in building and maintaining client websites. Gained hands-on experience with React, Node.js, and database management.',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            My journey in the tech industry
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{exp.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="mt-1 text-lg text-indigo-600">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;