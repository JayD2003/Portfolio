import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import SampleProjects from '../Components/SampleProjects';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Skills />
      <SampleProjects />
      <div className='w-full mb-10 text-center py-2'>
        <p className='text-copy-secondary text-xl font-body'>Want to know more about me?</p>
        <Link to='/about' className='text-copy-primary font-body text-xl transition hover:text-teal-500 dark:hover:text-teal-400 underline underline-offset-2'>Click here</Link>
      </div>
  </div>
  )
}

export default Home