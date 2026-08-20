import { Award, ExternalLink, FileText, Router } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FiberLine, SwitchNode, DropConnector } from './Topology';

const certifications = [
  {
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/10ThHNQasUW7ypN4zT7HeGaCRLc-u62nB/view?usp=sharing',
  },
  {
    name: 'NDG Linux Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1LZYyEjCKjL3y6RZGlCze312jSz5cT55Y/view?usp=sharing',
  },
  {
    name: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1iq-7ZpjTOmICYzHE4VD2av4maFWN12j-/view?usp=sharing',
  },
  {
    name: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1sqKdNoIERcGxtlo8Sc4nX8byWOO_D76G/view?usp=sharing',
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1TI-ASqVsnjnQRgsWOzz4M180wd54uoYF/view?usp=sharing',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/18eYUu8t-oRmcSzm1vOwpBjpPvuIRigcu/view?usp=sharing',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Credentials"
          title="Certifications"
          description="Industry-recognized certifications demonstrating expertise in networking and security."
          icon={<FileText className="w-3.5 h-3.5" />}
        />

        <div className="relative">
          {/* Vertical fiber trunk */}
          <FiberLine
            orientation="vertical"
            className="absolute left-5 sm:left-6 top-0 bottom-0 h-full"
          />

          <div className="space-y-6 pl-14 sm:pl-20">
            {certifications.map((cert, i) => (
              <div key={cert.name} className="relative">
                {/* Switch node on the trunk */}
                <div className="absolute -left-14 sm:-left-20 top-5 z-10">
                  <SwitchNode ports={4} icon={<Router className="w-3.5 h-3.5" />} />
                </div>

                {/* Horizontal ethernet drop */}
                <div className="hidden sm:block absolute left-0 top-8 w-12 h-px">
                  <DropConnector orientation="horizontal" length="w-12" />
                </div>

                <Reveal delay={(i % 3) * 80}>
                  <div className="card-surface card-surface-hover p-6 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent group-hover:border-accent/30 transition-colors duration-300">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-white leading-tight">
                        {cert.name}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-300 font-medium">{cert.issuer}</p>

                    <div className="mt-3 space-y-1 text-xs text-slate-500">
                      <div>Issued: {cert.date}</div>
                      <div>To: {cert.recipient}</div>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white text-xs transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2" />
                      View Certificate
                    </a>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm text-slate-400">
              Continuously enhancing skills through industry-recognized certifications and training programs
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Certifications;
