import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
const ProjectCard = ({ title, description, image, technologies, github, demo }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
          {description}
        </p>
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex justify-between mt-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon size={18} className="mr-1" />
              <span>GitHub</span>
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLinkIcon size={18} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;