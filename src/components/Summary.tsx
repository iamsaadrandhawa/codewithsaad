import React from 'react';
import { Code2, Globe, Server, Smartphone, Cpu, Zap, GitBranch, Database, Layout, Laptop } from 'lucide-react';

const Summary = () => {
 const skills = [
    {
      title: "Web Development",
      subtitle: "React.js, Next.js, Tailwind CSS",
      description: "Building modern, responsive, and high-performance websites.",
      icon: <Laptop className="w-8 h-8 text-white" />,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Mobile Development",
      subtitle: "React Native, Expo ",
      description: "Creating cross-platform mobile applications with seamless user experiences.",
      icon: <Smartphone  className="w-8 h-8 text-white" />,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Backend Development",
      subtitle: "Node.js, Express, APIs",
      description: "Building secure, scalable backend systems and REST APIs.",
      icon: <Server className="w-8 h-8 text-white" />,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Database Systems",
      subtitle: "MongoDB, MySQL, Firestore",
      description: "Efficient data modeling & optimized database queries.",
      icon: <Database className="w-8 h-8 text-white" />,
      gradient: "from-amber-400 to-orange-400"
    },
    {
      title: "Networking",
      subtitle: "IT infrastructure, Mikrotik, Routing",
      description: "Strong understanding of networking & secure infrastructures.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      title: "Clean Code",
      subtitle: "Best practices, patterns",
      description: "Writing maintainable, readable, and scalable code.",
      icon: <Code2 className="w-8 h-8 text-white" />,
      gradient: "from-pink-400 to-rose-400"
    },
    {
      title: "API Integration",
      subtitle: "3rd-party services & automation",
      description: "Connecting apps with external services & automating workflows.",
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: "from-cyan-400 to-sky-400"
    },
    {
      title: "Version Control",
      subtitle: "Git, GitHub, CI/CD",
      description: "Managing code efficiently with professional workflows.",
      icon: <GitBranch className="w-8 h-8 text-white" />,
      gradient: "from-slate-400 to-gray-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Summary</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
           Full Stack Developer specializing in React Native and Node.js, with a strong background in IT networking. Experienced in building scalable mobile applications and managing secure, efficient network infrastructures. Combines software development and networking expertise to deliver integrated, high-performance solutions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-brightgray-400 border border-gray-200 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${skill.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${skill.gradient} shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>

                {/* Skill Title */}
                <h3 className="text-xl font-semibold text-black">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600">
                  {skill.description}
                </p>

                {/* Skill Level Indicator */}
                <div className="mt-4 flex items-center text-sm text-cyan-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                  Expert Level
                </div>
              </div>

              {/* Hover Effect Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;