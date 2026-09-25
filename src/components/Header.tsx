import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

interface Pulse {
  x: number;
  y: number;
  key: number;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [pulse, setPulse] = useState<Pulse | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fires a small "signal" pulse from the clicked nav link — a nod to the
  // fiber/network visual language used throughout the rest of the site —
  // while the browser smooth-scrolls to the target section underneath it.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const nextPulse: Pulse = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      key: Date.now(),
    };
    setPulse(nextPulse);
    window.setTimeout(() => setPulse(null), 700);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {pulse && (
        <span
          key={pulse.key}
          className="fixed z-[60] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_3px_rgba(34,211,238,0.8)] pointer-events-none animate-nav-pulse"
          style={{ left: pulse.x, top: pulse.y }}
          aria-hidden
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold tracking-tight text-white flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-signal" />
            IamSaad
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-2 text-sm rounded-md transition-colors duration-200 ${
                  active === link.href
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute left-3 right-3 -bottom-px h-px bg-accent" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 pl-2">
            <a
              href="https://github.com/iamsaadrandhawa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-accent transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/iamsaadrandhawa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-accent transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary !px-4 !py-2"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-slate-200 p-2 -mr-2"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-xl border-b border-white/[0.06]">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-md text-sm transition-colors duration-200 ${
                  active === link.href
                    ? 'text-white bg-white/[0.04]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 pl-3">
              <a
                href="https://github.com/iamsaadrandhawa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-accent"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/iamsaadrandhawa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-accent"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
