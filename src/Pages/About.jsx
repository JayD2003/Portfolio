import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import links from '../utils/links'

const About = () => {
  return (
    <>
      <div className='mt-20 md:mt-10 mb-10 flex flex-col items-center justify-center gap-10'>
        <div className='h-[400px] flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
          <div className='flex flex-col text-left gap-5'>
            <motion.div 
                                                                                              initial={{ opacity: 0,  }}
                                                                                              whileInView={{ opacity: 1, y: 0 }}
                                                                                              transition={{ duration: 1, delay: 0.3 }}
                                                                                              viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                                            
              className="max-w-fit inline-flex items-center rounded-full border border-mainbr px-3 py-1 text-sm text-copy-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Based in India
            </motion.div>

            <h1 className='text-copy-primary font-heading text-2xl lg:text-5xl'>About me</h1>
            <h2 className="text-xl lg:text-2xl font-body font-medium text-copy-secondary">
            <Typewriter
              words={[
                "Hi! 👋",
                "నమస్కారం 🙏",
                "Konnichiwa 👋",
                "Vanakkam 🙏",
                "Ciao 👋",
                "नमस्ते 🙏",
                ".... .. 👋"              
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
            <motion.p 
                                                                                initial={{ opacity: 0,  }}
                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                transition={{ duration: 1, delay: 0.1 }}
                                                                                viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                              
              className='text-copy-secondary font-body text-1xl lg:text-xl'>
              I’m Jayasai, a recent Computer Science graduate with a passion for building things on the web, combining sleek front-end experiences with well-optimized backend systems to bring ideas to life.
            </motion.p>
          </div>
          <img src="./About/avatar.png" alt="" className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-2 border-mainbr rounded-full transition-transform hover:scale-105' />
        </div>
        <div className='flex flex-col items-center justify-center gap-5 mt-10 lg:mt-5 mb-10'>
              <h2 className='w-3/4 text-copy-primary text-xl md:text-2xl font-body text-center'>My journey in tech started with curiosity — tinkering with code, breaking things, and learning how to fix them...</h2>
              <p className='w-5/6 text-center text-copy-secondary text-base md:text-lg font-body'>
              What began as simple experimentation soon turned into a passion for building seamless and efficient web experiences. I love creating intuitive interfaces that feel smooth and natural while ensuring the backend runs just as efficiently behind the scenes.
              </p>
              <p className='w-3/4 text-center text-copy-secondary text-base md:text-lg font-body'>
              Lately, I’ve been diving deeper into scalable architectures and problem-solving, constantly refining my skills and exploring new ways to build better applications. Every project is a new challenge, and I enjoy pushing my limits with each one.
              </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 mb-10'>
          <h1 className='text-4xl md:text-5xl font-bold font-heading text-copy-primary mb-8'>My Education</h1>
          <div className='flex flex-wrap items-center justify-center gap-5'>
            <motion.div 
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                              
              className='flex flex-col gap-5 border-2 border-mainbr rounded-2xl p-5 md:w-[420px]'>
              <div className='flex flex-col text-left'>
                <h1 className='text-copy-primary text-2xl font-heading'>R.M.K Engineering College</h1>
                <p className='text-copy-secondary text-lg font-body'>2021 - 2025 | Chennai, Tamil Nadu</p>
              </div>
              <div className='flex flex-col text-left'>
                <p className='text-copy-secondary text-lg font-body font-semibold'>CGPA: 8.61/10</p>
                <p className='text-copy-secondary text-lg font-body font-semibold'>B.E in CSE, Honors in AI</p>
                <p className='text-copy-secondary text-lg font-body font-semibold'></p>
              </div>
            </motion.div>
            <motion.div 
                                                  initial={{ opacity: 0, y: -50 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 1, delay: 0.2 }}
                                                  viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible
              className='flex flex-col gap-5 border-2 border-mainbr rounded-2xl p-5 md:w-[420px]'>
              <div className='flex flex-col text-left'>
                <h1 className='text-copy-primary text-2xl font-heading'>Sri Chaitanya Boys Jr College</h1>
                <p className='text-copy-secondary text-lg font-body'>2019 - 2021 | Vijayawada, Andhra Pradesh</p>
              </div>
              <div className='flex flex-col text-left'>
                <p className='text-copy-secondary text-lg font-body font-semibold'>Score: 95.6%</p>
                <p className='text-copy-secondary text-lg font-body font-semibold'>Pre-University: MPC (12th) </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-5 mb-10'>
          <h1 className='text-4xl font-bold font-heading text-copy-primary'>Beyond Code</h1>
              <motion.h2 
                                                                  initial={{ opacity: 0,  }}
                                                                  whileInView={{ opacity: 1, y: 0 }}
                                                                  transition={{ duration: 1, delay: 0.1 }}
                                                                  viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                
                className=' text-copy-secondary text-medium font-body text-left w-2/3'>
              When I’m not building things, I love escaping into different worlds — whether through <span className='text-copy-primary'>anime, web series, movies or gaming. </span>
              <br />I also love to <span className='text-copy-primary'>doodle</span> and sketch, often inspired by Pinterest.
              </motion.h2>
              <motion.h2
                                                                                  initial={{ opacity: 0,  }}
                                                                                  whileInView={{ opacity: 1, y: 0 }}
                                                                                  transition={{ duration: 1, delay: 0.3 }}
                                                                                  viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                

                className=' text-copy-primary text-medium font-body text-left w-2/3 mb-4'>
                Here are some of my favorite worlds:
              </motion.h2>
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="md:-ml-[250px] md:-mr-[250px] grid grid-cols-1 grid-rows-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  <img src="./About/gaming.png" alt="" className="hidden lg:block h-[350px] w-[300px] object-cover col-span-1 rounded-lg border-2 rotate-2 border-mainbr" />
                  <img src="./About/anime.png" alt="" className="h-[350px] w-[300px] object-fit col-span-1 rounded-lg border-2 md:rotate-2 border-mainbr" />
                  <img src="./About/webseries.png" alt="" className="h-[350px] w-[300px] object-cover col-span-1 rounded-lg border-2 md:-rotate-2 border-mainbr" />
                  <img src="./About/movies.png" alt="" className="h-[350px] w-[300px] object-cover col-span-1 rounded-lg border-2 md:rotate-2 border-mainbr" />
                  <img src="./About/doodle.png" alt="" className="hidden lg:block h-[350px] w-[300px] object-cover col-span-1 rounded-lg border-2 -rotate-2 border-mainbr" />
                </div>
              </div>
        </div>
        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                      
          className='flex flex-col items-center justify-center gap-5 text-center mb-5'>
        <h1 className='text-4xl font-bold font-heading text-copy-primary'>Hey 👋, don’t be a stranger! </h1>
          <h2 className='text-copy-secondary text-xl font-body w-3/4'>I’d love to connect! <br /> Feel free to reach out if you want to discuss tech, projects, or just geek out over anime, movies, webseries, or games.
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
      </div>
    </>
  )
}

export default About