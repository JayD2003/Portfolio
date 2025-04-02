import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/projects';
import ProjectModal from '../Components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const topProjects = projects.slice(0, 2); // Get only the first 2 projects

  return (
    <div className="max-h-full flex justify-center items-center flex-col mt-10 mb-10">
      {/* Section Heading */}
      <h1 className="text-5xl md:text-6xl font-bold font-heading text-copy-primary mb-6">
        Projects
      </h1>
      <h2 className="text-lg w-4/5 md:text-xl text-copy-secondary text-center font-body mb-8 px-4">
        Here are some of my recent projects that showcase my skills in full-stack development and AI.
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10">
        {topProjects.map((project, index) => (
          <article 
            key={index} 
            className="w-[320px] md:w-[450px] shadow-lg rounded-2xl border-2 border-mainbr p-6 flex flex-col gap-4 backdrop-blur-md"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold font-heading text-copy-primary">{project.title}</h2>
            
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="h-[200px] object-cover rounded-lg" />

            {/* Description */}
            <p className="text-copy-secondary font-body text-center">{project.description}</p>

            {/* Tech Stack */}
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-copy-secondary font-body font-semibold">
              {project.techStack.map((tech, i) => (
                <li key={i} className="border-2 border-mainbr px-2 py-1 rounded-2xl">{tech}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-between font-body text-copy-secondary">
              <p 
                onClick={() => setSelectedProject(project)} 
                className="text-copy-secondary font-semibold hover:underline cursor-pointer"
              >
                View More
              </p>
              
              <div className="flex gap-3">
                {project.liveUrl && ( // Render only if liveUrl is present
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline font-semibold text-teal-500"
                  >
                    Live
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline font-semibold text-copy-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-10">
        <Link 
          to="/projects"
          className="text-lg font-semibold text-copy-primary underline underline-offset-4 transition hover:text-teal-500"
        >
          Explore More Projects →
        </Link>
      </div>

      {/* Render Modal if a project is selected */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
