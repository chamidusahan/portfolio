import React from 'react';
import { CalendarIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
const TimelineItem = ({ year, title, subtitle, description, type }) => {
  const isEducation = type === 'education';
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-slate-300 dark:bg-slate-700"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-5 h-5 -ml-2.5 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-800 z-10"></div>
      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
          <CalendarIcon size={14} className="mr-1" />
          <span>{year}</span>
        </div>
        <h3 className="text-xl font-bold mb-1 flex items-center">
          {isEducation ? (
            <GraduationCapIcon size={18} className="mr-2 text-blue-600" />
          ) : (
            <BriefcaseIcon size={18} className="mr-2 text-blue-600" />
          )}
          {title}
        </h3>
        <h4 className="text-md font-medium text-slate-600 dark:text-slate-300 mb-3">{subtitle}</h4>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
};
const ExperienceSection = () => {
  const timelineItems = [
    {
      year: "2021 - Present",
      title: "B.S. Computer Science",
      subtitle: "University of Technology",
      description: "Focusing on software engineering, data structures, algorithms, and web development. Maintaining a 3.8 GPA while participating in coding competitions and hackathons.",
      type: "education"
    },
    {
      year: "Summer 2023",
      title: "Software Development Intern",
      subtitle: "Tech Solutions Inc.",
      description: "Developed and maintained web applications using React.js and Node.js. Collaborated with a team of developers to implement new features and fix bugs.",
      type: "work"
    },
    {
      year: "2020 - 2021",
      title: "Associate's Degree",
      subtitle: "Community College",
      description: "Completed foundational coursework in computer science, mathematics, and general education before transferring to a four-year university.",
      type: "education"
    },
    {
      year: "2019 - 2020",
      title: "Teaching Assistant",
      subtitle: "Code Academy",
      description: "Assisted instructors in teaching basic programming concepts to high school students. Provided one-on-one support during lab sessions.",
      type: "work"
    }
  ];
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience & Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;