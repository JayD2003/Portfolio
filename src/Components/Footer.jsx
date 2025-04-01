import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex justify-center lg:justify-between items-center flex-row flex-wrap gap-2 mt-15 mb-5 border-2 border-mainbr shadow-lg shadow-mainbr/20 backdrop-blur-sm rounded-2xl px-4 py-2'>
            <h3 className='text-copy-secondary text-sm'>© 2025  <span className='underline underline-offset-4 font-semibold'>Jayasai Dodla.</span> All rights reserved.</h3>
            <h3 className='text-copy-secondary text-sm'>Built with ❤️, coded in React, and deployed on Vercel.</h3>
        </div>
    </>
  )
}

export default Footer