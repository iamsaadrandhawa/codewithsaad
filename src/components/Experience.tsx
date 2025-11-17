import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "IT Intern",
      company: "Jadeed Group of Companies",
      location: "Shahkot, Pakistan",
      period: "03/04/2025 – current",
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
    <section id="experience" className="py-12 md:py-20 bg-white relative">
      {/* Center Line - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block absolute left-1/2 top-60 transform -translate-x-1/2 w-1 h-[80%] bg-gradient-to-b from-cyan-400 to-indigo-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Professional Experience
        </h2>
        <p className="text-center mt-4 text-base sm:text-lg text-gray-500">
          A growing tree representing my career growth
        </p>

        <div className="mt-12 md:mt-20 space-y-12 md:space-y-20 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative w-full">
              
              {/* Timeline Dot for Mobile */}
              <div className="md:hidden absolute left-4 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 border-2 border-white shadow-lg z-20"></div>
              
              {/* Timeline Dot for Desktop */}
              <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-white shadow-lg z-20`}></div>

              {/* Experience Card */}
              <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 ml-0 md:ml-auto relative md:relative md:left-1/2 md:transform md:-translate-x-1/2">
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg md:shadow-xl hover:scale-[1.02] transition-all duration-500 ml-8 md:ml-0">
                  {/* Colored Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>

                  <div className="p-4 sm:p-6 flex flex-col md:flex-row">
                    {/* Content - Top on mobile, Left on desktop */}
                    <div className="flex-1 order-2 md:order-1">
                      {/* Position */}
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h3>

                      {/* Company */}
                      <p className="text-indigo-600 font-medium text-sm sm:text-base">{exp.company}</p>

                      {/* Period */}
                      <div className="mt-2 flex items-center text-gray-500 text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {exp.period}
                      </div>

                      {/* Location */}
                      <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> 
                        {exp.location}
                      </div>

                      <div className="my-3 sm:my-4 w-full h-px bg-gray-200"></div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{exp.description}</p>

                      {/* Skills */}
                      <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
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

                    {/* Logo - Top on mobile, Right on desktop */}
                    <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto md:mx-0 md:ml-6 mb-4 md:mb-0 self-center relative flex-shrink-0 order-1 md:order-2">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Connector Line to Timeline - Desktop only */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? `${exp.gradient} right-8 translate-x-full` 
                    : `${exp.gradient} left-8 -translate-x-full`
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
