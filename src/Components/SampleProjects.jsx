import React from 'react';
import { Link } from 'react-router-dom';

const SampleProjects = () => {
  return (
    <div className='max-h-full flex justify-start flex-col items-center gap-2 mb-10 '>
        <h1 className='text-6xl font-bold font-heading text-copy-primary mb-4 mt-10'>My Recent Projects</h1>
        <h2 className='text-xl font-body text-copy-secondary'>Here are some of the projects I have worked on.</h2>
        <div className='flex justify-center items-center flex-row flex-wrap gap-10 mt-10'>
            <div className='w-[320px] max-h-full md:w-[450px] flex flex-col justify-start items-center border-2 border-mainbr shadow-lg shadow-mainbr/20 backdrop-blur-sm rounded-2xl px-2 py-2 gap-2'>
                <img src="coralsense.png" alt="" className='h-[200px] '/>
                <h3 className='text-xl text-copy-primary font-heading'>CoralSense</h3>
                <p className='text-base text-copy-secondary font-body text-center'>Analyze coral health using deep learning. Upload an image and get real-time predictions.</p>
                <ul className='text-base text-copy-secondary font-body font-semibold text-center flex justify-center items-center flex-wrap gap-2 mb-2'>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>React</li>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>Flask</li>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>Yolo-v11</li>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>Roboflow</li>
                </ul>
            </div>
            <div className='w-[320px] max-h-full md:w-[450px] flex flex-col justify-start items-center border-2 border-mainbr shadow-lg shadow-mainbr/20 backdrop-blur-sm rounded-2xl px-2 py-2 gap-2'>
                <img src="coralsense.png" alt="" className='h-[200px] '/>
                <h3 className='text-xl text-copy-primary font-heading'>Expense Tracker</h3>
                <p className='text-base text-copy-secondary font-body text-center'>Helps users track their spending, categorize expenses and view their overall balance.</p>
                <ul className='text-base text-copy-secondary font-body font-semibold text-center flex items-center flex-wrap gap-2 mb-2'>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>React</li>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>Firebase</li>
                    <li className='border-2 border-mainbr px-2 py-1 rounded-2xl'>Firestore</li>
                </ul>
            </div>
        </div>
        <h2 className='text-xl font-body text-copy-primary underline underline-offset-4 mt-6'><Link to="/projects">Explore more.</Link></h2>
    </div>
  )
}

export default SampleProjects