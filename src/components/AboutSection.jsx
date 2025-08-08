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
              I am a motivated Software Engineering student with a strong passion for application development and modern web technologies. My journey in programming began during high school, and since then, I’ve been dedicated to building real-world solutions through code.<br />

              Currently, I am focused on mastering technologies like JavaScript and React, while continuously expanding my skills in both frontend and backend development. I take a self-driven approach to learning, working on personal projects to strengthen my problem-solving abilities and practical experience.<br />

              My long-term goal is to contribute to impactful software solutions, gain industry experience through internships or entry-level opportunities, and grow into a well-rounded developer. I am eager to apply my knowledge in a professional environment and become a valuable asset to any development team.
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