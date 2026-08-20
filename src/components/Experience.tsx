import { Calendar, MapPin, Router } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FiberLine, SwitchNode, DropConnector } from './Topology';

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
    logo: 'https://jadeedgroup.com/wp-content/uploads/2024/07/jadeed-logo.png',
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
    logo: 'https://root.mascotfibernet.com/admin/assets/images/logo-dark.png',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title="Professional Experience"
          description="A timeline of roles across development, networking, and education."
        />

        <div className="relative">
          {/* Vertical fiber trunk */}
          <FiberLine
            orientation="vertical"
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 h-full sm:-translate-x-1/2"
            cableIndex={0}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.position}
                  className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* Switch node on the trunk */}
                  <div className="absolute left-5 sm:left-1/2 top-4 -translate-x-1/2 z-10">
                    <SwitchNode ports={5} icon={<Router className="w-3.5 h-3.5" />} portColorOffset={index} />
                  </div>

                  <Reveal
                    className={`pl-16 sm:pl-0 w-full sm:w-[calc(50%-2.5rem)] ${
                      isLeft ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    {/* Horizontal ethernet drop from trunk to card (desktop) */}
                    <div
                      className={`hidden sm:flex items-center ${
                        isLeft ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <DropConnector orientation="horizontal" length="w-8" />
                    </div>

                    <div className="card-surface card-surface-hover p-6 group mt-1">
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
                          <h3 className="text-base font-semibold text-white">{exp.position}</h3>
                          <p className="text-sm text-accent-200 mt-0.5">{exp.company}</p>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
