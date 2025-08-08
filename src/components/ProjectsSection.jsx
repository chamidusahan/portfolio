import React from 'react';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A responsive admin dashboard for managing online store inventory, orders, and customer data with real-time analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides current conditions and 5-day forecasts based on user location or search queries.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["JavaScript", "API Integration", "CSS", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "A full-stack application for managing tasks, deadlines, and team collaboration with customizable workflows.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      technologies: ["React", "Express", "PostgreSQL", "JWT Auth"],
      github: "#",
      demo: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "An interactive web application that visualizes various sorting and pathfinding algorithms to help understand their mechanics.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["JavaScript", "Data Structures", "Algorithms", "Canvas API"],
      github: "#",
      demo: "#"
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;