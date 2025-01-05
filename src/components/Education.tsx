import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Riphah International University',
      location: 'Faisalabad',
      year: '2024',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />
    },
    {
      degree: 'FSC Pre Engineering',
      institution: 'Superior College',
      location: 'Shahkot',
      year: '2020',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />
    },
    {
      degree: 'Matric in Computer Science',
      institution: 'Al Raza High School',
      location: 'Shahkot',
      year: '2017',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            My academic journey and qualifications
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-lg text-gray-600">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500">{edu.location}</p>
                  <div className="mt-2 flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
