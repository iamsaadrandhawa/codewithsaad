import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Star, Github, Code, Smartphone, Globe, Search } from 'lucide-react';
import TypeWriter from './TypeWriter';
import './Hero.css';

const Hero = () => {
  const titles = [
    "Mern-Stack Developer",
    "React-Native Expert",
    "Network Expert",
    "CS Lecturer"
  ];

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section pt-20 pb-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="grid-pattern"></div>

        {/* Animated Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div ref={textRef} className="md:w-1/2 text-center md:text-left transform transition-all duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 animate-float">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-indigo-200">Available for Projects</span>
            </div>

            <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 animate-gradient">Saad</span>
              </span>
              <span className="block h-20 mt-4 opacity-0 text-5xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             
               <TypeWriter words={titles} />
              
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 sm:text-xl md:mt-8 md:text-2xl max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Building <span className="text-cyan-400 font-semibold animate-pulse-slow">scalable, cross-platform</span> mobile apps with React Native.
              Expert in <span className="text-indigo-400 font-semibold animate-pulse-slow" style={{ animationDelay: '1s' }}>network architecture</span> and seamless connectivity solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-400">Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:flex sm:justify-start md:mt-12 space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-4 border-2 border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 md:py-5 md:text-lg md:px-12 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Let's work together</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </a>
              </div>
              <div className="rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25">
                <a
                  href="https://drive.google.com/file/d/1oQrNgECCpPIgTz0JWGmV8-xSXuzf6uEn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 border-2 border-indigo-500 text-base font-semibold rounded-lg text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 md:py-5 md:text-lg md:px-12 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Resume</span>
                  <Download className="ml-3 w-5 h-5 group-hover:animate-bounce transition-transform duration-300 relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section - Half Image Out of Circle */}
         <div ref={imageRef} className="md:w-1/2 mt-12 md:mt-0 flex justify-center opacity-0 animate-fade-in-left">
  <div className="relative">
    {/* Animated Gradient Background - Increased Size */}
    <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 blur-2xl opacity-30 animate-gradient-flow -z-10"></div>

    {/* Main Circle Container - Increased Size */}
    <div className="relative w-96 h-96">
      {/* Circular Border Background - Increased Size */}
      <div className="absolute inset-0 rounded-full border-4 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl animate-border-glow z-10"></div>

      {/* Image Container - Half Out of Circle */}
      <div className="relative w-full h-full rounded-full z-20 image-half-mask overflow-show">
        <img
          src='./saadali.png'
          alt="Saad Ali - Professional Developer"
          className="w-full h-full object-cover object-top scale-125 transform -translate-y-8 hover:scale-135 hover:-translate-y-10 transition-all duration-500 ease-out"
        />
        {/* Circle border */}
        <div className="absolute inset-0 rounded-full border-white/20 pointer-events-none z-30"></div>
      </div>

      {/* Tech Icons Floating Around - Adjusted positions for larger circle */}
      <div className="tech-icons-container">
        {/* GitHub Icon */}
        <div className="tech-icon-item github-icon">
          <div className="tech-icon-wrapper bg-gray-800 border border-gray-600">
            <Github className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* VSCode Icon */}
        <div className="tech-icon-item vscode-icon">
          <div className="tech-icon-wrapper bg-blue-600 border border-blue-400">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Android Icon */}
        <div className="tech-icon-item android-icon">
          <div className="tech-icon-wrapper bg-green-500 border border-green-400">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* iOS Icon */}
        <div className="tech-icon-item ios-icon">
          <div className="tech-icon-wrapper bg-gray-100 border border-gray-300">
            <Smartphone className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        {/* Web Icon */}
        <div className="tech-icon-item web-icon">
          <div className="tech-icon-wrapper bg-purple-500 border border-purple-400">
            <Globe className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* SEO Icon */}
        <div className="tech-icon-item seo-icon">
          <div className="tech-icon-wrapper bg-orange-500 border border-orange-400">
            <Search className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Rotating Tech Ring - Increased size to match larger circle */}
      <div className="absolute -inset-6 rounded-full border-2 border-cyan-400/30 animate-spin-slow pointer-events-none z-5"></div>
    </div>

    {/* Experience Badge - Adjusted position for larger circle */}
    <div className="absolute -bottom-6 right-16 bg-gradient-to-r from-cyan-400 to-blue-400 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl z-30 transform hover:scale-105 transition-transform duration-300 animate-pulse-slow">
      <div className="text-sm font-bold text-gray-900 flex items-center">
        <Star className="w-3 h-3 mr-1 text-yellow-600" />
        5+ Years Experience
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;