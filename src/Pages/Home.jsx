import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import SampleProjects from '../Components/SampleProjects';
import { Link } from 'react-router-dom';
import links from '../utils/links';

const Home = () => {
  return (
    <motion.div 
      className='w-full h-full'
    >
        <Hero />

        <Skills />

        <SampleProjects />

      <motion.div
        className='mb-10 py-2'
      >
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center items-center'>
          
          {/* Connect Card */}
          <motion.div 
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5}}
             viewport={{ once: true }}
            className='max-h-full lg:h-[250px] w-full cols-span-1 lg:col-span-2 flex gap-5 flex-col rounded-2xl p-6 shadow-lg shadow-mainbr/20 backdrop-blur-sm dark:bg-main dark:text-copy-primary dark:ring-white/10 border-2 border-mainbr dark:border-mainbr'
          >
            <h1 className='text-2xl md:text-4xl font-bold font-heading text-copy-primary'>Hey 👋, let’s connect!</h1>
            <h2 className='text-copy-secondary text-lg md:text-xl font-body'>
              I’m always open to discussing tech, collaborating on projects, or just geeking out over new ideas. Feel free to reach out!
            </h2>
                    <motion.div
                  className="mt-2 flex gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }, // Delay each item
                    },
                  }}
                >
                  {links.map((link, index) => (
                    <motion.a
                      key={index}
                      className="group -m-1 p-1"
                      href={link.url}
                      target="_blank"
                      aria-label={`Follow on ${link.label}`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {link.svg}
                    </motion.a>
                  ))}
                              
                </motion.div>
          </motion.div>

          {/* About Prompt */}
          <motion.div 
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             viewport={{ once: true }}
            className='max-h-full cols-span-1 lg:h-[250px] flex justify-start text-center items-center flex-col rounded-2xl p-4 shadow-lg shadow-mainbr/20 backdrop-blur-sm dark:bg-main dark:text-copy-primary dark:ring-white/10 border-2 border-mainbr dark:border-mainbr'
          >
            <motion.img 
                      animate={{ y: [0, -10, 0] }}
                       transition={{ ease: "linear", repeat: Infinity, duration: 3 }}              
              src="./Home/image.png" alt="" className='w-[120px] h-[120px] object-fit' />
            <p className='text-copy-secondary text-xl font-body'>Want to know more about me?</p>
            <Link to='/about' className='text-copy-primary font-body text-xl transition hover:text-teal-500 dark:hover:text-teal-400 underline underline-offset-2'>Click here</Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
