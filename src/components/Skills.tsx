import React from 'react';
import { Smartphone, Server, Palette, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-5 h-5 text-white" />,
      skills: ['React Native', 'iOS', 'Android', 'Expo', 'Native Modules', 'App Store Connect'],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Frontend',
      icon: <Palette className="w-5 h-5 text-white" />,
      skills: ['React.js', 'TypeScript', 'Redux', 'React Navigation', 'Reanimated'],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-white" />,
      skills: ['Node.js', 'Express', 'Mongoose', 'GraphQL', 'REST APIs', 'WebSockets'],
      gradient: 'from-indigo-400 to-purple-400'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="w-5 h-5 text-white" />,
      skills: ['Git', 'CI/CD', 'Fastlane', 'Jest', 'Firebase', 'AWS'],
      gradient: 'from-amber-400 to-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Technical Skills
        </h2>
        <p className="text-center mt-4 text-lg text-gray-500">
          Specialized in mobile app development and full-stack technologies
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Skill Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500 h-full">
                {/* Colored Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>

                <div className="p-6">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg mb-4`}>
                    {category.icon}
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>

                  <div className="my-3 w-full h-px bg-gray-200"></div>

                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${category.gradient} text-white shadow-md text-center truncate`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <Cpu className="w-4 h-4 text-indigo-600 mr-3" />
            <span className="text-gray-600 text-xs">
              Continuously learning and adapting to new technologies and development practices
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;