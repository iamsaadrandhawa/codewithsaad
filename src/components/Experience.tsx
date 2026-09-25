import { Calendar, MapPin, Router } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SwitchNode } from './Topology';

const experiences = [
  {
    position: 'Assistant IT Officer',
    company: 'Jadeed Group of Companies',
    location: 'Shahkot, Pakistan',
    period: '1/07/2025 – current',
    description:
      'Installed CCTV, configured operating systems, resolved hardware/software issues, supported IT operations.',
    skills: [
      'CCTV', 'Networking', 'Troubleshooting', 'OS Setup', 'Hardware Support',
      'Software Installation', 'IT Support', 'Maintenance', 'Configuration',
      'Customer Service', 'Problem Solving', 'Remote Support',
    ],
    logo: 'https://jadeedgroup.com/images/logo%20jadeed.png',
  },
  {
    position: 'MERN-Stack Developer',
    company: 'Freelance',
    location: 'Pakistan',
    period: '01/07/2022 – Present',
    description:
      'Developed mobile/Web apps using React Native/JS with modern UI/UX and scalable architecture.',
    skills: [
      'React Native', 'React JS', 'Node.js', 'MongoDB', 'UI/UX', 'APIs',
      'Authentication', 'State Management', 'Responsive Design', 'Version Control',
      'MySQL', 'Deployment',
    ],
    logo: 'https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg',
  },
  {
    position: 'Computer Science Lecturer',
    company: 'Govt. Graduate College Shahkot',
    location: 'Shahkot',
    period: '25/09/2024 – 25/12/2024',
    description:
      'Taught CS courses, supervised labs, designed assignments and guided student projects.',
    skills: [
      'Teaching', 'Labs', 'Curriculum', 'Mentorship', 'Assessment', 'Student Engagement',
      'Course Design', 'Communication', 'Time Management', 'Problem Solving',
      'Collaboration', 'Adaptability',
    ],
    logo: 'https://punjab.gov.pk/sites/punjab.gov.pk/themes/bootstrap_subtheme/logo.png',
  },
  {
    position: 'Network Administrator',
    company: 'Mascot Fiber (Pvt) Ltd',
    location: 'Shahkot',
    period: '10/10/2022 – 25/09/2024',
    description:
      'Managed fiber network infrastructure, ensured stable connectivity and security protocols.',
    skills: [
      'Fiber Optical', 'Routing', 'Security', 'Monitoring', 'Troubleshooting',
      'Maintenance', 'Configuration', 'Mikrotik', 'Switches', 'Firewalls', 'Network Design',
    ],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgA-ND1cYOrkF9nz_avmdrsAHLTp7j5ZVqa-3K00Wvfw&s=10',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title="Professional Experience"
          description="A timeline of roles across development, networking, and education."
        />

        <div className="relative mt-16">
          {/* ===== CENTRAL VERTICAL FIBER TRUNK (RED GLOW) ===== */}
          {/* Outer glow */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] rounded-full bg-red-500/30 blur-[6px]"
          />
          {/* Core wire */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
          />
          {/* White inner pulse */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] rounded-full bg-white/80"
          />

          {/* Mobile trunk (left side) */}
          <div
            aria-hidden
            className="sm:hidden absolute left-5 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.9)]"
          />

          <div className="space-y-16 sm:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.position} className="relative">
                  {/* ===== NODE ON THE TRUNK ===== */}
                  <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-30">
                    <SwitchNode
                      ports={5}
                      icon={<Router className="w-3.5 h-3.5" />}
                      portColorOffset={index}
                    />
                  </div>

                  <div
                    className={`flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                  >
                    {/* ===== HORIZONTAL DROP WIRE (RED) ===== */}
                    <div
                      aria-hidden
                      className={`hidden sm:block absolute top-[30px] z-10 h-[2px] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                        isLeft
                          ? 'right-1/2 mr-2 w-12 lg:w-20 bg-gradient-to-r from-red-500 to-red-400/40'
                          : 'left-1/2 ml-2 w-12 lg:w-20 bg-gradient-to-l from-red-500 to-red-400/40'
                      }`}
                    />
                    {/* White pulse line over the red drop */}
                    <div
                      aria-hidden
                      className={`hidden sm:block absolute top-[30px] z-10 h-[1px] bg-white/70 ${
                        isLeft
                          ? 'right-1/2 mr-2 w-12 lg:w-20'
                          : 'left-1/2 ml-2 w-12 lg:w-20'
                      }`}
                    />

                    <Reveal
                      className={`w-full pl-16 sm:pl-0 sm:w-[calc(50%-3rem)] ${
                        isLeft ? 'sm:pr-12 lg:pr-16' : 'sm:pl-12 lg:pl-16'
                      }`}
                      delay={(index % 3) * 80}
                    >
                      <div className="card-surface card-surface-hover p-6 group">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-14 h-14 rounded-lg border border-white/10 bg-white/[0.03] p-2 flex items-center justify-center overflow-hidden">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-white">
                              {exp.position}
                            </h3>
                            <p className="text-sm text-accent-200 mt-0.5">
                              {exp.company}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                              <span className="inline-flex items-center">
                                <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent/70" />
                                {exp.period}
                              </span>
                              <span className="inline-flex items-center">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 text-accent/70" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills as ethernet endpoint chips */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-[11px] rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:border-accent/30 hover:text-white transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
