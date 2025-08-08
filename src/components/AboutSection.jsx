import React from 'react';
import { CodeIcon, BookOpenIcon, BrainIcon } from 'lucide-react';
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8">
            <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
              I'm a passionate Computer Science student with a strong interest in software development and 
              web technologies. My journey in programming began during high school where I discovered my love for 
              creating solutions through code. I enjoy building projects that solve real-world problems and 
              continuously learning new technologies to expand my skill set.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <CodeIcon size={32} className="text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-slate-600 dark:text-slate-400">Java, JavaScript, Python, HTML/CSS</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <BrainIcon size={32} className="text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Interests</h3>
                <p className="text-slate-600 dark:text-slate-400">Web Development, Software Engineering, AI</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <BookOpenIcon size={32} className="text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-slate-600 dark:text-slate-400">B.S. Computer Science (In Progress)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;