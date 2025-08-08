import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon size={20} className="text-yellow-400" />
              ) : (
                <MoonIcon size={20} className="text-slate-700" />
              )}
            </button>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon size={20} className="text-yellow-400" />
              ) : (
                <MoonIcon size={20} className="text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <XIcon size={24} className="text-slate-700 dark:text-slate-300" />
              ) : (
                <MenuIcon size={24} className="text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-800 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;