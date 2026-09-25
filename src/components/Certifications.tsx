import { Award, ExternalLink, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/10ThHNQasUW7ypN4zT7HeGaCRLc-u62nB/view?usp=sharing',
    explain:
      'Cybersecurity Essentials, issued by Cisco Networking Academy in 2023. This certification covers the fundamentals of cybersecurity — threats, vulnerabilities, cryptography, access control, and how to protect networks and data from modern attacks.',
    explainUr:
      'Cybersecurity Essentials, Cisco Networking Academy ki taraf se 2023 mein jari hui. Is certification mein cybersecurity ki bunyadi baten shamil hain — threats, vulnerabilities, cryptography, access control aur networks aur data ko modern attacks se kaise bachana hai.',
  },
  {
    name: 'NDG Linux Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1LZYyEjCKjL3y6RZGlCze312jSz5cT55Y/view?usp=sharing',
    explain:
      'N D G Linux Essentials, issued by Cisco Networking Academy in 2023. This certification teaches the Linux operating system — the command line, file systems, user management, permissions, and basic shell scripting. These are core skills for servers and network devices.',
    explainUr:
      'N D G Linux Essentials, Cisco Networking Academy ki taraf se 2023 mein jari hui. Is certification mein Linux operating system sikhaya jata hai — command line, file systems, user management, permissions aur basic shell scripting. Yeh skills servers aur network devices ke liye bunyadi hain.',
  },
  {
    name: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1iq-7ZpjTOmICYzHE4VD2av4maFWN12j-/view?usp=sharing',
    explain:
      'Networking Essentials, issued by Cisco Networking Academy in 2023. It covers I P addressing, subnetting, routing, switching, wireless, and network security basics. It is the foundation for building and troubleshooting real networks.',
    explainUr:
      'Networking Essentials, Cisco Networking Academy ki taraf se 2023 mein jari hui. Ismein I P addressing, subnetting, routing, switching, wireless aur network security ki bunyadi baten shamil hain. Yeh real networks banane aur troubleshoot karne ki bunyad hai.',
  },
  {
    name: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1sqKdNoIERcGxtlo8Sc4nX8byWOO_D76G/view?usp=sharing',
    explain:
      'Introduction to I o T and Digital Transformation, issued by Cisco Networking Academy in 2025. This certification covers the Internet of Things — how smart devices connect, communicate, and generate data — and how businesses use digital transformation to modernise their operations.',
    explainUr:
      'Introduction to I o T and Digital Transformation, Cisco Networking Academy ki taraf se 2025 mein jari hui. Is certification mein Internet of Things cover kiya jata hai — kaise smart devices connect hote hain, communicate karte hain aur data generate karte hain — aur kaise businesses digital transformation ke zariye apne operations ko modern banate hain.',
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/1TI-ASqVsnjnQRgsWOzz4M180wd54uoYF/view?usp=sharing',
    explain:
      'Ethical Hacker, issued by Cisco Networking Academy in 2025. This certification teaches penetration testing and vulnerability assessment — how ethical hackers find and fix security weaknesses before attackers can exploit them. Topics include reconnaissance, scanning, exploitation, and reporting.',
    explainUr:
      'Ethical Hacker, Cisco Networking Academy ki taraf se 2025 mein jari hui. Is certification mein penetration testing aur vulnerability assessment sikhaya jata hai — kaise ethical hackers security kamzoriyan dhoond kar theek karte hain is se pehle ke attackers unhe exploit karein. Topics mein reconnaissance, scanning, exploitation aur reporting shamil hain.',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    recipient: 'Saad Ali Muhammad Arshad',
    link: 'https://drive.google.com/file/d/18eYUu8t-oRmcSzm1vOwpBjpPvuIRigcu/view?usp=sharing',
    explain:
      'Python Essentials 1, issued by Cisco Networking Academy in 2025. This certification covers the fundamentals of Python programming — data types, control flow, functions, modules, and file handling. Python is widely used for automation, scripting, and network tools.',
    explainUr:
      'Python Essentials 1, Cisco Networking Academy ki taraf se 2025 mein jari hui. Is certification mein Python programming ki bunyadi baten shamil hain — data types, control flow, functions, modules aur file handling. Python automation, scripting aur network tools ke liye bohat zyada use hoti hai.',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />

      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-red-500/[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Credentials"
          title="Certifications"
          description="A learning journey through networking, security, and modern development."
          icon={<FileText className="w-3.5 h-3.5" />}
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10"
          />
          <div
            aria-hidden
            className="sm:hidden absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10"
          />

          <div className="space-y-14 sm:space-y-20">
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0;
              const isLatest = cert.date === '2025';

              return (
                <div key={cert.name} className="relative">
                  <div className="absolute left-6 sm:left-1/2 top-6 -translate-x-1/2 z-20">
                    <div className="relative">
                      {isLatest && (
                        <>
                          <span className="absolute inset-0 rounded-full bg-red-500/40 animate-ping" />
                          <span className="absolute inset-0 rounded-full bg-red-500/25 blur-md" />
                        </>
                      )}

                      <div
                        className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm ${
                          isLatest
                            ? 'border-red-500 bg-red-500/15 shadow-[0_0_25px_rgba(239,68,68,0.7)]'
                            : 'border-accent/40 bg-ink-900 shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                        }`}
                      >
                        {isLatest ? (
                          <Sparkles className="w-5 h-5 text-red-300" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        )}

                        <span
                          className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border ${
                            isLatest
                              ? 'bg-red-500 text-white border-red-300'
                              : 'bg-accent/90 text-ink-900 border-accent'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                  >
                    <div
                      aria-hidden
                      className={`hidden sm:block absolute top-[46px] z-10 h-px ${
                        isLeft
                          ? 'right-1/2 mr-6 w-12 lg:w-24 bg-gradient-to-r from-transparent to-accent/40'
                          : 'left-1/2 ml-6 w-12 lg:w-24 bg-gradient-to-l from-transparent to-accent/40'
                      }`}
                    />

                    <Reveal
                      className={`w-full pl-20 sm:pl-0 sm:w-[calc(50%-4.5rem)] ${
                        isLeft ? 'sm:pr-16 lg:pr-24' : 'sm:pl-16 lg:pl-24'
                      }`}
                      delay={(index % 3) * 80}
                    >
                      <div
                        data-explain={cert.explain}
                        data-explain-ur={cert.explainUr}
                        className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                          isLatest
                            ? 'border border-red-500/30 bg-gradient-to-br from-red-500/[0.08] via-white/[0.02] to-transparent shadow-[0_0_40px_-12px_rgba(239,68,68,0.5)]'
                            : 'border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent hover:border-white/20'
                        } backdrop-blur-sm p-6`}
                      >
                        <div
                          className={`absolute top-0 left-0 h-1 w-16 rounded-r-full ${
                            isLatest
                              ? 'bg-gradient-to-r from-red-500 to-red-400'
                              : 'bg-gradient-to-r from-accent to-accent/40'
                          }`}
                        />

                        <div
                          className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider border ${
                            isLatest
                              ? 'border-red-500/40 bg-red-500/10 text-red-300'
                              : 'border-white/10 bg-white/[0.03] text-slate-400'
                          }`}
                        >
                          {cert.date}
                        </div>

                        <div className="flex items-start gap-3 pr-14">
                          <div
                            className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                              isLatest
                                ? 'border-red-500/40 bg-red-500/[0.08] text-red-300'
                                : 'border-white/10 bg-white/[0.03] text-accent group-hover:border-accent/40'
                            }`}
                          >
                            <Award className="w-5 h-5" />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-white leading-snug">
                              {cert.name}
                            </h3>
                            <p
                              className={`text-xs mt-1 font-medium ${
                                isLatest ? 'text-red-300' : 'text-accent-200'
                              }`}
                            >
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                          <span className="text-slate-500 truncate">
                            {cert.recipient}
                          </span>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-all duration-200 shrink-0 ml-3 ${
                              isLatest
                                ? 'border-red-500/40 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:text-white'
                                : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white'
                            }`}
                          >
                            <ExternalLink className="w-3 h-3" />
                            View
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -bottom-10 z-20 flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-accent/40 flex items-center justify-center bg-ink-900">
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium whitespace-nowrap">
              Journey Continues
            </span>
          </div>
        </div>

        <Reveal delay={200} className="mt-32">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center">
              <div className="text-lg sm:text-xl font-bold text-white">
                {certifications.length}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                Certifications
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center">
              <div className="text-lg sm:text-xl font-bold text-accent">Cisco</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                Issuer
              </div>
            </div>
            <div className="rounded-xl border border-red-500/30 bg-red-500/[0.05] px-4 py-3 text-center">
              <div className="text-lg sm:text-xl font-bold text-red-300">2025</div>
              <div className="text-[10px] uppercase tracking-wider text-red-400/70 mt-0.5">
                Latest Year
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm text-slate-400">
                Continuously enhancing skills through industry-recognized certifications
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Certifications;