import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import SampleProjects from '../Components/SampleProjects';

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Skills />
      <SampleProjects />
  </div>
  )
}

export default Home