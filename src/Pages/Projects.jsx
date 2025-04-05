import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../utils/projects';
import ProjectModal from '../Components/ProjectModal';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // stagger each child by 0.15s
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-h-full flex justify-center items-center flex-col mt-10 mb-10">
      <motion.h1
        className="text-5xl md:text-6xl text-copy-primary font-heading"
        // initial={{ opacity: 0, y: -30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Projects Grid with Stagger */}
      <motion.div
        className="flex flex-row flex-wrap justify-center items-center gap-10 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            className="w-[320px] max-h-full md:w-[450px] shadow-lg rounded-lg p-6 border-2 border-mainbr flex flex-col gap-2"
          >
            <h2 className="text-2xl font-bold font-heading text-copy-primary">{project.title}</h2>
            <img src={project.image} alt="" className='h-[200px] object-fill rounded-lg' />

            <p className="text-copy-secondary font-body">{project.description}</p>

            <ul className="text-base text-copy-secondary flex items-center flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, i) => (
                <li key={i} className="border-2 border-mainbr px-2 py-1 text-sm font-body font-semibold rounded-2xl">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex justify-between font-body text-copy-secondary">
              <p 
                onClick={() => setSelectedProject(project)}
                className="text-copy-secondary font-semibold hover:underline cursor-pointer"
              >
                View More
              </p>

              <div className="flex gap-2">
                {project.liveUrl && (
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
          </motion.article>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className='flex flex-col justify-center items-center gap-2 mt-10'>
        <motion.h2 
          className='text-copy-primary font-heading text-2xl'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Always Curious. Always Learning.
        </motion.h2>
        <motion.p
          className="text-lg text-copy-secondary font-body font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          See what I’m building and explore more of my work!
        </motion.p>
        <motion.a
          href="https://github.com/JayD2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold font-body text-copy-primary underline underline-offset-4 transition hover:text-teal-500"
          whileHover={{ scale: 1.05 }}
        >
          Visit My GitHub
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
