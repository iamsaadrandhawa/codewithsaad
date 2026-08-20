import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Router } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SwitchNode, DropConnector, FiberLine } from './Topology';

const testimonials = [
  { text: 'Saad delivered our mobile app ahead of schedule with exceptional quality. His expertise in React Native is outstanding.', author: 'Wei Chen', rating: 5 },
  { text: 'Working with Saad was a great experience. His attention to detail and problem-solving skills are remarkable.', author: 'Hiroshi Tanaka', rating: 5 },
  { text: "Saad's technical skills and professional approach made our project a success. Highly recommended!", author: 'Priya Sharma', rating: 5 },
  { text: 'Exceptional developer with great communication skills. Delivered exactly what we needed on time.', author: 'Min-jun Park', rating: 5 },
  { text: "Saad's React Native expertise helped us build a robust mobile app that our users love.", author: 'Mei Lin', rating: 5 },
  { text: 'Saad transformed our business with his mobile app development skills. Excellent work!', author: 'Yuki Nakamura', rating: 5 },
  { text: 'Outstanding developer who understands business requirements perfectly.', author: 'Ananya Singh', rating: 5 },
  { text: "Saad's code is clean, efficient, and well-documented. A true professional.", author: 'Kenji Sato', rating: 5 },
  { text: 'The app Saad built for us exceeded all expectations. Users love it!', author: 'Chloe Kim', rating: 5 },
  { text: "Saad's attention to UI/UX details made our app stand out from competitors.", author: 'Wei Zhang', rating: 5 },
  { text: 'Excellent communication throughout the project. Always available for support.', author: 'Haruto Suzuki', rating: 5 },
  { text: 'Saad delivered a scalable solution that will grow with our business.', author: 'Deepa Reddy', rating: 5 },
  { text: 'The performance optimization Saad implemented made our app lightning fast.', author: 'Ji-hoon Lee', rating: 5 },
  { text: "Saad's testing strategies ensured our app launched without any critical bugs.", author: 'Hana Kim', rating: 5 },
  { text: "Saad's cross-platform development skills saved us time and money.", author: 'Priyanka Das', rating: 5 },
  { text: 'Excellent problem-solver who thinks outside the box.', author: 'Chen Wei', rating: 5 },
  { text: 'The code documentation Saad provided was comprehensive and clear.', author: 'Anjali Desai', rating: 5 },
  { text: "Saad's database optimization improved our app's performance dramatically.", author: 'Kenta Yamamoto', rating: 5 },
  { text: 'Excellent at translating complex requirements into technical solutions.', author: 'Rina Patel', rating: 5 },
  { text: 'The caching strategy Saad implemented reduced our server load significantly.', author: 'Preeti Singh', rating: 5 },
  { text: "Saad's expertise in mobile app architecture is truly impressive.", author: 'Yuki Chen', rating: 5 },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 4);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  const scrollByDir = (dir: number) => {
    scrollContainerRef.current?.scrollBy({ left: dir, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 4) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByDir(300);
      }
      checkScrollButtons();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => checkScrollButtons();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-20" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social Proof"
          title="Client Testimonials"
          description="What clients say about working with me across mobile, web, and infrastructure projects."
        />

        <Reveal>
          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => scrollByDir(-300)}
                aria-label="Scroll left"
                className="absolute left-0 top-[calc(50%+1.5rem)] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-slate-300 hover:border-accent/40 hover:text-accent transition-colors duration-200 -ml-3"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scrollByDir(300)}
                aria-label="Scroll right"
                className="absolute right-0 top-[calc(50%+1.5rem)] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-slate-300 hover:border-accent/40 hover:text-accent transition-colors duration-200 -mr-3"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Horizontal fiber trunk above the carousel */}
            <FiberLine orientation="horizontal" className="w-full" />

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-5 pt-6 snap-x snap-mandatory"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="shrink-0 w-80 snap-start relative">
                  {/* Switch node + vertical drop above each card */}
                  <div className="flex flex-col items-center">
                    <SwitchNode ports={3} icon={<Router className="w-3 h-3" />} />
                    <DropConnector orientation="vertical" length="h-6" />
                  </div>

                  <div className="card-surface card-surface-hover p-6 h-full group">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent group-hover:border-accent/30 transition-colors duration-300">
                        <Quote className="w-5 h-5" />
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-400 italic leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <p className="text-sm font-semibold text-white">{t.author}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Satisfied Client</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm text-slate-400">
              Trusted by clients worldwide for delivering exceptional mobile and web solutions
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
