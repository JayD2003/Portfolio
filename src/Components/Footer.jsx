import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
        <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true, amount: 1 }} // Triggers only once when 50% visible                

          className='flex justify-center lg:justify-between items-center flex-row flex-wrap gap-2 mt-15 mb-5 border-2 border-mainbr shadow-lg shadow-mainbr/20 backdrop-blur-sm rounded-2xl px-4 py-2'>
            <h3 className='text-copy-secondary text-sm'>© 2025  <span className='underline underline-offset-4 font-semibold'>Jayasai Dodla.</span> All rights reserved.</h3>
            <h3 className='text-copy-secondary text-sm'>Built with ❤️ using React & deployed on Vercel.</h3>
        </motion.div>
    </>
  )
}

export default Footer