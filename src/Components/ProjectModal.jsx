import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 px-4 overflow-y-auto">
      <div className="bg-main w-full max-w-[700px] p-12 rounded-lg border-2 border-mainbr shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <p 
          className="absolute top-4 right-4 text-copy-primary hover:text-copy-secondary text-3xl font-bold cursor-pointer"
          onClick={onClose}
        >
          &times;
        </p>

        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[300px] object-cover rounded-md mb-4"
        />

        {/* Modal Content */}
        <h2 className="text-3xl font-bold font-heading text-copy-primary">{project.title}</h2>
        <p className="text-copy-secondary font-body mt-2">{project.longDescription}</p>

        {/* Tech Stack */}
        <div className="mt-4">
          <h3 className="font-bold font-body text-copy-primary">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, i) => (
              <li key={i} className="border px-3 py-1 text-sm font-semibold rounded-xl border-mainbr text-copy-secondary">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub & Live Link */}
        <div className="mt-6 flex justify-end gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal-500 text-copy-primary font-body px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Live
            </a>
          )}
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-mainbr text-copy-primary font-body px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
