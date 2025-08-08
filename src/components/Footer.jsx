import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
            <p className="text-slate-400 mt-2">Aspiring Software Engineer</p>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0 flex items-center">
            Built with <HeartIcon size={16} className="mx-1 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;