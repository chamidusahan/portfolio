import React from 'react';
import { ArrowDownIcon } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements (keep these) */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-0">
          {/* Left side: Text content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Chamidu Sahan
              </span>
            </h1>
            <h2 className="text-xl sm:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300">
              Aspiring Software Engineer
            </h2>
            <p className="text-base sm:text-xl mb-10 text-slate-600 dark:text-slate-400 leading-relaxed">
              I build responsive web applications and software solutions with a focus on clean code and user
              experience. Currently exploring the intersection of technology and creative problem-solving.
            </p>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowDownIcon size={20} className="ml-2" />
            </button>
          </div>
          {/* Right side: Image */}
          <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0">
            <img
              src="/src/images/pf1.jpg"
              alt="Profile of Chamidu Sahan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;