import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'IT Intern',
      company: 'Jadeed Group of Companies',
      location: 'Shahkot, Pakistan',
      period: '03/04/2025 – current',
      description: `As an IT Intern at Jadeed Feed, I assist with the maintenance and troubleshooting of computer networks and hardware systems. My
responsibilities include installing and configuring surveillance cameras (CCTV), setting up workstations, diagnosing and resolving
hardware/software issues, and supporting routine IT operations. I also help with system upgrades, printer and peripheral setup,
basic network cabling, operating system installation, and ensuring the smooth functioning of daily IT infrastructure. This hands-on
role is strengthening my skills in IT support, system installation, and network management within a corporate environment`,
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />
    },
    {
      position: 'Application Developer (Part-time)',
      company: 'Freelance, Pakistan',
      location: 'Shahkot, Pakistan',
      period: '01/07/2022 – Current',
      description: `As a freelance React Native developer, I focus on building scalable and high-performance mobile applications with smooth UI/UX. My work includes state management, integration of native modules and third-party libraries, authentication, real-time data handling, and multilingual support. I follow clean code practices, emphasize reusability, and manage full app deployment cycles.`,
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />
    },
    {
      position: 'Computer Science Lecturer',
      company: 'Government Graduate College Shahkot',
      location: 'Shahkot, Pakistan',
      period: '25/09/2024 – 25/12/2024',
      description: `Taught undergraduate computer science courses with a focus on assessment, curriculum design, and mentorship. Responsibilities included supervising lab sessions, guiding student projects, participating in faculty collaboration, engaging with the community, and promoting ethical teaching standards.`,
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />
    },
    {
      position: 'Network Administrator',
      company: 'Mascot Fiber (Pvt) Ltd',
      location: 'Shahkot, Pakistan',
      period: '10/10/2022 – 25/09/2024',
      description: `Managed network infrastructure, including fiber optic installation, performance monitoring, and IT support. Implemented security protocols, maintained systems and backups, provided staff training, and ensured seamless connectivity and protection of digital assets within the company.`,
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
