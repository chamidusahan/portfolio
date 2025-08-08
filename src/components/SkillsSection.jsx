import React from 'react';
import { 
  CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, LayersIcon, GitBranchIcon
} from 'lucide-react';
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <GlobeIcon size={28} className="text-blue-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <ServerIcon size={28} className="text-blue-600" />,
      skills: ["Node.js", "Express", "RESTful APIs", "Authentication"]
    },
    {
      title: "Databases",
      icon: <DatabaseIcon size={28} className="text-blue-600" />,
      skills: ["SQL", "MongoDB", "Database Design"]
    },
    {
      title: "Languages",
      icon: <CodeIcon size={28} className="text-blue-600" />,
      skills: ["Java", "JavaScript", "Python", "TypeScript"]
    },
    {
      title: "Tools & Platforms",
      icon: <LayersIcon size={28} className="text-blue-600" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Heroku"]
    },
    {
      title: "Concepts",
      icon: <GitBranchIcon size={28} className="text-blue-600" />,
      skills: ["OOP", "Data Structures", "Algorithms", "Software Design"]
    }
  ];
  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;