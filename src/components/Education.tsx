import { GraduationCap, Calendar, MapPin, Award, Sparkles, Radio } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SwitchNode } from './Topology';

const education = [
  {
    degree: 'MS Information Technology',
    institution: 'Riphah International University',
    location: 'Faisalabad',
    year: '2026',
    status: 'On Going',
    ongoing: true,
  },
  {
    degree: 'BS Computer Science',
    institution: 'Riphah International University',
    location: 'Faisalabad',
    year: '2024',
    status: 'Completed',
    ongoing: false,
  },
  {
    degree: 'FSC Pre Engineering',
    institution: 'Superior College',
    location: 'Shahkot',
    year: '2020',
    status: 'Completed',
    ongoing: false,
  },
  {
    degree: 'Matric in Computer Science',
    institution: 'Al Raza High School',
    location: 'Shahkot',
    year: '2017',
    status: 'Completed',
    ongoing: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Journey"
          title="Education"
          description="An ascending path from computer science foundations to advanced IT specialization."
          icon={<Award className="w-3.5 h-3.5" />}
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

          {/* Ascending label at the top of the trunk */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -top-14 z-30 flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/40 bg-red-500/[0.08] shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span className="text-[11px] font-medium text-red-300 tracking-wide uppercase">
                Latest Milestone
              </span>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={edu.degree} className="relative">
                  {/* ===== NODE ON THE TRUNK ===== */}
                  <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-30">
                    {edu.ongoing ? (
                      <div className="relative">
                        {/* Pulsing halo for ongoing */}
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
                        icon={<GraduationCap className="w-3.5 h-3.5" />}
                        portColorOffset={index}
                      />
                    )}
                  </div>

                  <div
                    className={`flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                  >
                    {/* Horizontal drop wire */}
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
                        isLeft ? 'right-1/2 mr-2 w-12 lg:w-20' : 'left-1/2 ml-2 w-12 lg:w-20'
                      }`}
                    />

                    <Reveal
                      className={`w-full pl-16 sm:pl-0 sm:w-[calc(50%-3rem)] ${
                        isLeft ? 'sm:pr-12 lg:pr-16' : 'sm:pl-12 lg:pl-16'
                      }`}
                      delay={(index % 3) * 80}
                    >
                      <div
                        className={`card-surface card-surface-hover p-6 group relative overflow-hidden transition-all duration-300 ${
                          edu.ongoing
                            ? 'border-red-500/40 shadow-[0_0_35px_-10px_rgba(239,68,68,0.55)]'
                            : ''
                        }`}
                      >
                        {/* Ongoing: animated scan line */}
                        {edu.ongoing && (
                          <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/80 to-transparent animate-scan"
                          />
                        )}

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                edu.ongoing
                                  ? 'border-red-500/40 bg-red-500/[0.08] text-red-400'
                                  : 'border-white/10 bg-white/[0.03] text-accent group-hover:border-accent/30'
                              }`}
                            >
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-semibold text-white leading-tight">
                              {edu.degree}
                            </h3>
                          </div>

                          {/* Year badge */}
                          <div
                            className={`shrink-0 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${
                              edu.ongoing
                                ? 'border-red-500/40 bg-red-500/[0.1] text-red-300'
                                : 'border-white/10 bg-white/[0.03] text-slate-400'
                            }`}
                          >
                            {edu.year}
                          </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-300 font-medium">
                          {edu.institution}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                          <div className="flex items-center text-slate-500 text-xs">
                            <MapPin className="w-3.5 h-3.5 mr-2 text-accent/70" />
                            {edu.location}
                          </div>
                          <div className="flex items-center text-slate-500 text-xs">
                            <Calendar className="w-3.5 h-3.5 mr-2 text-accent/70" />
                            {edu.year}
                          </div>
                        </div>

                        {/* Status pill */}
                        <div
                          className={`mt-5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${
                            edu.ongoing
                              ? 'bg-red-500/[0.08] border-red-500/30'
                              : 'bg-accent/[0.08] border-accent/20'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              edu.ongoing
                                ? 'bg-red-400 animate-pulse-signal'
                                : 'bg-accent'
                            }`}
                          />
                          <span
                            className={`text-xs font-medium ${
                              edu.ongoing ? 'text-red-300' : 'text-accent-200'
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom terminator */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
