import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
 const experiences = [
  {
    position: 'Application Developer',
    company: 'Shahkot, Pakistan',
    location: 'Shahkot, Pakistan',
    period: '01/07/2022 – Present',
    description: `
      • Performance Optimization  
      • Smooth UI/UX Design  
      • State Management  
      • Native Modules & Third-Party Integrations  
      • Clean Code Practices  
      • Networking & Real-Time Data Management  
      • Authentication & Security Implementation  
      • Fast & Scalable Development  
      • Testing & Debugging  
      • Code Reusability & Modularization  
      • App Deployment  
      • Multi-Language Support
    `,
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />
  },
  {
    position: 'Computer Science Lecturer',
    company: 'Government Graduate College Shahkot',
    location: 'Shahkot, Pakistan',
    period: '25/09/2024 – 25/12/2024',
    description: `
      • Assessment  
      • Curriculum Development  
      • Student Mentorship  
      • Lab Supervision  
      • Research  
      • Collaboration with Faculty  
      • Community Engagement  
      • Professional Development  
      • Ethical Teaching Practices  
    `,
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />
  },
  {
    position: 'Network Administrator',
    company: 'Mascot Fiber (Pvt) Ltd',
    location: 'Shahkot, Pakistan',
    period: '10/10/2022 – Present',
    description: `
      • Network Infrastructure Management  
      • Fiber Optic Network Installation & Troubleshooting  
      • Network Performance Monitoring  
      • Security Protocols & Data Protection  
      • IT Support & Troubleshooting  
      • Network Expansion & System Upgrades  
      • Maintenance, Updates & Backups  
      • Staff Training on IT Resources  
      • Managing Computers & Devices  
      • Keeping Software & Security Updated  
    `,
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
