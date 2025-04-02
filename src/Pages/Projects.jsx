import React, { useState } from 'react';
import projects from '../utils/projects';
import ProjectModal from '../Components/ProjectModal';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State to track selected project

  return (
    <div className="max-h-full flex justify-center items-center flex-col mt-10 mb-10">
      <h1 className="text-copy-primary text-6xl font-heading">Projects</h1>

      {/* Projects Grid */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-10">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="w-[320px] max-h-full md:w-[450px] shadow-lg rounded-lg p-6 border-2 border-mainbr flex flex-col gap-2"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold font-heading text-copy-primary">{project.title}</h2>
            <img src={project.image} alt="" className='h-[200px] '/>
            {/* Description */}
            <p className="text-copy-secondary font-body">{project.description}</p>

            {/* Tech Stack */}
            <ul className="text-base text-copy-secondary flex items-center flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, i) => (
                <li key={i} className="border-2 border-mainbr px-2 py-1 text-sm font-body font-semibold rounded-2xl">
                  {tech}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-between font-body text-copy-secondary">
              <p 
                onClick={() => setSelectedProject(project)} // Open modal with project details
                className="text-copy-secondary font-semibold hover:underline cursor-pointer"
              >
                View More
              </p>
              
              <div className="flex gap-2">
              {project.liveUrl && ( // Render only if liveUrl is present
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Live
                </a>
              )}  
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-copy-secondary"
              >
                GitHub
              </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Render Modal if a project is selected */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} // Close modal
        />
      )}
    </div>
  );
};

export default Projects;
