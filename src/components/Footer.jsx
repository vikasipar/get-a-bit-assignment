import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <>
    <div className='w-[90%] lg:w-[85%] mx-auto mb-[70px] flex flex-wrap justify-between items-center relative lg:z-20 overflow-hidden'>
      <motion.div
        initial={{opacity: 0, y: 120}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, delay:0.2}} >
        <h2 className='font-[700] text-[24px] lg:text-[40px]'>aBit</h2>
        <p className='font-[400] text-[18px] lg:text-[20px]'>Changing The Way In Which<br/>Creators And Fans Interact.</p>
      </motion.div>
      <div 
        className='lg:border-l-[1px] border-stone-400 pl-5 mt-5 lg:mt-0'>
        <ul className='flex md:flex-col items-baseline flex-wrap text-[14px] font-[700] space-y-4 my-auto gap-5'>
          <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer'>Home</motion.li>
          <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer'>Are you a creater?</motion.li>
          <motion.li whileHover={{x:9}} transition={{duration:0.4}} className='cursor-pointer'>Support</motion.li>
        </ul>
      </div>
    </div>
    <h3 className='p-4 lg:mx-10'>Developed by <a href='https://vikasipar.vercel.app/' target='_blank' className='border-b-2 border-orange-500'>Vikas Ipar</a>.</h3>
  </>

  )
}

export default Footer;