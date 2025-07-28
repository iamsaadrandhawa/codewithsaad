import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const titles = [
    "Mern-Stack Developer",
    "React-Native Expert",
    "Network Expert",
    "CS Lecturer"    
  ];

  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
           <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block">Hi, I'm Saad</span>
              <span className="block h-15"><TypeWriter words={titles} /></span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-2xl">
             Building scalable, cross-platform mobile apps with React Native.
                Expert in network architecture and seamless connectivity solutions.
            </p>
            <div className="mt-5 sm:flex sm:justify-start md:mt-8 space-x-4">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Let's work together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="rounded-md shadow mt-3 sm:mt-0">
                <a
                  href="https://drive.google.com/file/d/1oQrNgECCpPIgTz0JWGmV8-xSXuzf6uEn/view?usp=sharing"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Resume
                  <Download className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjsh7B7I4c9gLgsWSWvZysXVkw08KLockPPQUBwSylCabQMMancYmbxaLgoi7ZVLHPNCDjFfpBGJnBTD2HqJ4hHE3rgkqgZEH2UokZ_GA3RxQBwpilCCk-C_TBgqee8Url82ErA401WuMH5ZnF48Jj4w5_nnk7K6UQqG7OQtZX-2OJbAxeb4aTuuw_WW7t/s320/profile%20(2).jpg" 
                alt="Saad" 
                className="rounded-full w-70 h-70 object-cover shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
