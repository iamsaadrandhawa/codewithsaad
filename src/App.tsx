import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.06] bg-ink-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-signal" />
            <span className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Saad &mdash; Developer &amp; Network Engineer
            </span>
          </div>
          <div className="flex items-center gap-3">
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
              href="https://www.linkedin.com/in/iamsaadrandhawa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-accent transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
