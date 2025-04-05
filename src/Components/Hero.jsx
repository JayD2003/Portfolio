import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import links from '../utils/links';
const Hero = () => {
  return (
    <>
      <div className='h-[500px] flex flex-row justify-around items-center gap-10'>
      <motion.div 
         initial={{ x: -50, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 1, ease: "easeOut" }}
        className='text-copy-primary text-left flex flex-col justify-center items-start gap-5 basis-3.5/5'>
        <h1 className='font-bold text-5xl lg:text-6xl font-heading'>Hey, I'm Jayasai.</h1>
          <h2 className="text-xl lg:text-3xl font-body text-copy-secondary font-semibold">
          <Typewriter
            words={[
              'I build things for web.',
              'MERN Stack Developer.',
              'Tech Explorer.',
              'Competitive Coder.',
              'Sci-Fi Fanatic.',
              'Gamer.',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className='text-copy-secondary font-body lg:text-xl font-medium'>I'm a developer who enjoys building web applications and exploring new technologies. 
          When I'm not coding, you’ll probably find me gaming, or watching webseries or anime. 
          <br /><span className='font-bold'>Always curious, Always learning.</span>
        </p>
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
        <motion.img 
         initial={{ x: 50, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
        src="./Home/profile.png" alt="" className='hidden lg:block lg:w-[300px] lg:h-[300px] object-cover lg:rounded-lg rounded-xl ring-1 shadow-lg shadow-mainbr ring-mainbr/20 backdrop-blur-sm 
                          dark:bg-main dark:text-copy-primary dark:ring-white/10 border-2 border-mainbr dark:border-mainbr'/>
      </div>

    </>
  )
}

export default Hero