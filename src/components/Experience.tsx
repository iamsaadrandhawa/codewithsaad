import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Assistant IT Officer",
      company: "Jadeed Group of Companies",
      location: "Shahkot, Pakistan",
      period: "1/07/2025 – current",
      description:
        "Installed CCTV, configured operating systems, resolved hardware/software issues, supported IT operations.",
      skills: [
        "CCTV",
        "Networking",
        "Troubleshooting",
        "OS Setup",
        "Hardware Support",
        "Software Installation",
        "IT Support",
        "Maintenance",
        "Configuration",
        "Customer Service",
        "Problem Solving",
        "Remote Support",
      ],
      gradient: "from-blue-400 to-cyan-400",
      logo: "https://jadeedgroup.com/wp-content/uploads/2024/07/jadeed-logo.png"
    },
    {
      position: "Mern Stack Developer",
      company: "Freelance",
      location: "Pakistan",
      period: "01/07/2022 – Present",
      description:
        "Developed mobile/Web apps using React Native/JS with modern UI/UX and scalable architecture.",
      skills: [
        "React Native",
        "React JS",
        "Node.js",
        "MongoDB",
        "UI/UX",
        "APIs",
        "Authentication",
        "State Management",
        "Responsive Design",
        "Version Control",
        "mySQL",
        "Deployment",
      ],
      gradient: "from-purple-400 to-pink-400",
      logo: "https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
    },
    {
      position: "Computer Science Lecturer",
      company: "Govt. Graduate College Shahkot",
      location: "Shahkot",
      period: "25/09/2024 – 25/12/2024",
      description:
        "Taught CS courses, supervised labs, designed assignments and guided student projects.",
      skills: [
        "Teaching",
        "Labs",
        "Curriculum",
        "Mentorship",
        "Assessment",
        "Student Engagement",
        "Course Design",
        "Communication",
        "Time Management",
        "Problem Solving",
        "Collaboration",
        "Adaptability",
      ],
      gradient: "from-indigo-400 to-purple-400",
      logo: "https://punjab.gov.pk/sites/punjab.gov.pk/themes/bootstrap_subtheme/logo.png"
    },
    {
      position: "Network Administrator",
      company: "Mascot Fiber (Pvt) Ltd",
      location: "Shahkot",
      period: "10/10/2022 – 25/09/2024",
      description:
        "Managed fiber network infrastructure, ensured stable connectivity and security protocols.",
      skills: [
        "Fiber Optical",
        "Routing",
        "Security",
        "Monitoring",
        "Troubleshooting",
        "Maintenance",
        "Configuration",
        "Mikrotick",
        "Switches",
        "Firewalls",
        "Network Design",
      ],
      gradient: "from-amber-400 to-orange-400",
      logo: "https://root.mascotfibernet.com/admin/assets/images/logo-dark.png"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white relative">
      {/* Center Line */}
      <div className="absolute left-1/2 top-60 transform -translate-x-1/2 w-1 h-[80%] bg-gradient-to-b from-cyan-400 to-indigo-400"></div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Professional Experience
        </h2>
        <p className="text-center mt-4 text-lg text-gray-500">
          A growing tree representing my career growth
        </p>

        <div className="mt-12 space-y-16 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              
              {/* Timeline Dot */}
              {/* <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-white shadow-lg z-20`}></div> */}

              {/* Experience Card */}
              <div className={`w-5/6 md:w-2/3 lg:w-1/2 relative ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500">
                  {/* Colored Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>

                  <div className="p-6 flex">
                    {/* Content - Left Side */}
                    <div className="flex-1">
                      {/* Position */}
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.position}
                      </h3>

                      {/* Company */}
                      <p className="text-indigo-600 font-medium text-sm">{exp.company}</p>

                      {/* Period */}
                      <div className="mt-2 flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-2" />
                        {exp.period}
                      </div>

                      {/* Location */}
                      <div className="flex items-center text-gray-500 text-xs">
                        <MapPin className="w-3 h-3 mr-2" /> {exp.location}
                      </div>

                      <div className="my-3 w-full h-px bg-gray-200"></div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-xs">{exp.description}</p>

                      {/* Skills */}
                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${exp.gradient} text-white shadow-md text-center truncate`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logo - Right Side */}
                    <div className="w-32 h-32 ml-6 self-center relative flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Connector Line to Timeline */}
                <div className={`absolute top-1/2 transform -translate-y-1/1 w-8 h-1 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? `${exp.gradient} right-8 translate-x-full` 
                    : `${exp.gradient} left-70 -translate-x-full`
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
