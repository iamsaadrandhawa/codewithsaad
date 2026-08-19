import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Riphah International University',
    location: 'Faisalabad',
    year: '2024',
    status: 'Completed',
  },
  {
    degree: 'FSC Pre Engineering',
    institution: 'Superior College',
    location: 'Shahkot',
    year: '2020',
    status: 'Completed',
  },
  {
    degree: 'Matric in Computer Science',
    institution: 'Al Raza High School',
    location: 'Shahkot',
    year: '2017',
    status: 'Completed',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Journey"
          title="Education"
          description="The qualifications that shaped my technical foundation across computer science and engineering."
          icon={<Award className="w-3.5 h-3.5" />}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 90}>
              <div className="card-surface card-surface-hover p-6 h-full group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent group-hover:border-accent/30 transition-colors duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-tight">
                    {edu.degree}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-slate-300 font-medium">
                  {edu.institution}
                </p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center text-slate-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-accent/70" />
                    {edu.location}
                  </div>
                  <div className="flex items-center text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-accent/70" />
                    {edu.year}
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/[0.08] border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-signal" />
                  <span className="text-xs font-medium text-accent-200">
                    {edu.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 text-slate-500">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
