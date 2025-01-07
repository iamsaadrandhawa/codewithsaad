import React from 'react';
import { Smartphone, Server, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
      skills: ['React Native', 'iOS', 'Android', 'Expo', 'Native Modules', 'App Store Connect']
    },
    {
      title: 'Frontend',
      icon: <Palette className="w-12 h-12 text-indigo-600" />,
      skills: ['React.js', 'TypeScript', 'Redux', 'React Navigation', 'Reanimated']
    },
    {
      title: 'Backend',
      icon: <Server className="w-12 h-12 text-indigo-600" />,
      skills: ['Node.js', 'Express','Mongoose', 'GraphQL', 'REST APIs', 'WebSockets']
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="w-12 h-12 text-indigo-600" />,
      skills: ['Git', 'CI/CD', 'Fastlane', 'Jest', 'Firebase', 'AWS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Specialized in mobile app development and full-stack technologies
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
              <div className="flex justify-center">{category.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
