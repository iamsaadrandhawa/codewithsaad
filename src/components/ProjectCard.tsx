import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  appStoreLink?: string;
  playStoreLink?: string;

  sellerEmail?: string; // Your email address to receive inquiries
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  appStoreLink,
  playStoreLink,
  sellerEmail = "your-email@gmail.com" // Your default email
}) => {
  const gradients = [
    'from-purple-400 to-pink-400',
    'from-blue-400 to-cyan-400',
    'from-green-400 to-emerald-400',
    'from-orange-400 to-red-400',
    'from-indigo-400 to-purple-400',
    'from-teal-400 to-blue-400'
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];


  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-400/30 overflow-hidden flex flex-col h-full">
  {/* Gradient Top Bar */}
  <div className={`h-2 bg-gradient-to-r ${randomGradient}`}></div>
  
  <div className="p-6 flex flex-col flex-1">
    {/* Project Image */}
    <div className="relative overflow-hidden rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${randomGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
    </div>

    {/* Project Title */}
    <h3 className="text-lg font-semibold text-white">
      {title}
    </h3>

    {/* Project Description */}
    <p className="mt-3 text-gray-300 leading-relaxed flex-1 text-sm">
      {description}
    </p>

    {/* Technologies */}
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20 backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Action Links - Fixed at bottom */}
    <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/10">
      {/* Primary Actions Row */}
      <div className="flex items-center gap-3">
        {/* Always show Code button */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm flex-1 justify-center text-xs"
        >
          <Github className="w-3 h-3 mr-2" />
          Code
        </a>
        
        {/* Show Demo button if liveLink exists */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm flex-1 justify-center text-xs"
          >
            <Globe className="w-3 h-3 mr-2" />
            Demo
          </a>
        )}
      </div>

      {/* Secondary Actions Row */}
      <div className="flex items-center gap-3">
        {/* App Store button if appStoreLink exists */}
        {appStoreLink && (
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm flex-1 justify-center text-xs"
          >
            <Smartphone className="w-3 h-3 mr-2" />
            App Store
          </a>
        )}

        {/* Play Store button if playStoreLink exists */}
        {playStoreLink && (
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm flex-1 justify-center text-xs"
          >
            <Smartphone className="w-3 h-3 mr-2" />
            Play Store
          </a>
        )}
      </div>
    </div>
  </div>

  {/* Hover Effect Glow */}
  <div className={`absolute inset-0 bg-gradient-to-r ${randomGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
</div>
  );
};

export default ProjectCard;