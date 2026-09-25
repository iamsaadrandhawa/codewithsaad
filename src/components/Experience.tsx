import { Calendar, MapPin, Router, Radio, Sparkles } from 'lucide-react';
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
    current: true,
    explain:
      'Assistant I T Officer at Jadeed Group of Companies, Shahkot, Pakistan. Saad started this role in July 2025 and it is his current job. He installs and maintains C C T V systems, configures operating systems, resolves hardware and software issues, and supports daily I T operations for the entire group.',
    explainUr:
      'Assistant I T Officer, Jadeed Group of Companies, Shahkot, Pakistan. Saad ne yeh kaam July 2025 mein shuru kiya aur yeh unki mojooda job hai. Woh C C T V systems lagate aur maintain karte hain, operating systems configure karte hain, hardware aur software ke masail hal karte hain aur poori group ke rozana ke I T operations ko support karte hain.',
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
    current: true,
    explain:
      'M E R N Stack Developer as a freelancer, working from Pakistan since July 2022 and still active. Saad has built mobile and web applications using React Native, React J S, Node dot J S, and MongoDB, with modern U I and U X design and scalable architecture. He handles the full stack from frontend to backend, deployment, and authentication.',
    explainUr:
      'M E R N Stack Developer, freelance, Pakistan se July 2022 se kaam kar rahe hain aur abhi bhi active hain. Saad ne React Native, React J S, Node dot J S aur MongoDB ka use kar ke mobile aur web applications banayi hain, modern U I, U X design aur scalable architecture ke saath. Woh frontend se backend tak, deployment aur authentication sab kuch handle karte hain.',
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
    current: false,
    explain:
      'Computer Science Lecturer at Government Graduate College, Shahkot, from September 2024 to December 2024. Saad taught computer science courses, supervised practical labs, designed assignments, and guided student projects. This role built his teaching and mentoring experience.',
    explainUr:
      'Computer Science Lecturer, Government Graduate College, Shahkot, September 2024 se December 2024 tak. Saad ne computer science courses parhayiye, practical labs supervise kiye, assignments design kiye aur students ke projects mein rehnumai ki. Is role ne unka teaching aur mentoring tajurba banaya.',
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
    current: false,
    explain:
      'Network Administrator at Mascot Fiber Private Limited, Shahkot, from October 2022 to September 2024. Saad managed fiber optic network infrastructure, ensured stable internet connectivity, configured Mikrotik routers, switches, and firewalls, and monitored network security for I S P customers.',
    explainUr:
      'Network Administrator, Mascot Fiber Private Limited, Shahkot, October 2022 se September 2024 tak. Saad ne fiber optic network infrastructure manage ki, stable internet connectivity yaqeeni banayi, Mikrotik routers, switches aur firewalls configure kiye, aur I S P customers ke liye network security monitor ki.',
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
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] rounded-full bg-red-500/30 blur-[6px]"
          />
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
          />
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] rounded-full bg-white/80"
          />

          {/* Mobile trunk */}
          <div
            aria-hidden
            className="sm:hidden absolute left-5 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.9)]"
          />

          {/* ===== TOP LABEL: ACTIVE ROLE ===== */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -top-14 z-30 flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/40 bg-red-500/[0.08] shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span className="text-[11px] font-medium text-red-300 tracking-wide uppercase">
                Active Role
              </span>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.position} className="relative">
                  {/* ===== NODE ON THE TRUNK ===== */}
                  <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-30">
                    {exp.current ? (
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-red-500/40 animate-ping" />
                        <span className="absolute inset-0 rounded-full bg-red-500/20 blur-md" />
                        <SwitchNode
                          ports={5}
                          icon={<Radio className="w-3.5 h-3.5" />}
                          portColorOffset={index}
                        />
                      </div>
                    ) : (
                      <SwitchNode
                        ports={5}
                        icon={<Router className="w-3.5 h-3.5" />}
                        portColorOffset={index}
                      />
                    )}
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
                      <div
                        data-explain={exp.explain}
                        data-explain-ur={exp.explainUr}
                        className={`card-surface card-surface-hover p-6 group relative overflow-hidden transition-all duration-300 cursor-pointer ${
                          exp.current
                            ? 'border-red-500/40 shadow-[0_0_35px_-10px_rgba(239,68,68,0.55)]'
                            : ''
                        }`}
                      >
                        {exp.current && (
                          <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/80 to-transparent animate-scan"
                          />
                        )}

                        <div
                          className={`absolute top-4 right-4 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${
                            exp.current
                              ? 'border-red-500/40 bg-red-500/[0.1] text-red-300'
                              : 'border-white/10 bg-white/[0.03] text-slate-400'
                          }`}
                        >
                          {exp.period.split('–')[1]?.trim() || exp.period}
                        </div>

                        <div className="flex items-start gap-4">
                          <div
                            className={`shrink-0 w-14 h-14 rounded-lg border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                              exp.current
                                ? 'border-red-500/40 bg-red-500/[0.05]'
                                : 'border-white/10 bg-white/[0.03]'
                            }`}
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 pr-16">
                            <h3 className="text-base font-semibold text-white">
                              {exp.position}
                            </h3>
                            <p
                              className={`text-sm mt-0.5 ${
                                exp.current ? 'text-red-300' : 'text-accent-200'
                              }`}
                            >
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

                        <div
                          className={`mt-5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${
                            exp.current
                              ? 'bg-red-500/[0.08] border-red-500/30'
                              : 'bg-accent/[0.08] border-accent/20'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              exp.current
                                ? 'bg-red-400 animate-pulse-signal'
                                : 'bg-accent'
                            }`}
                          />
                          <span
                            className={`text-xs font-medium ${
                              exp.current ? 'text-red-300' : 'text-accent-200'
                            }`}
                          >
                            {exp.current ? 'Currently Working' : 'Completed'}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;