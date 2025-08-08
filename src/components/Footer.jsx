import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Chamidu Sahan. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0 flex items-center">
            Built with <HeartIcon size={16} className="mx-1 text-red-500" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;