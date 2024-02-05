import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <motion.div 
      initial={{y: 530}}
      animate={{y: 0}}
      transition={{delay:2.3, ease:'easeIn', duration:1.6, type:"spring"}}>
        <motion.div 
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          transition={{ease:'easeIn', duration:1.6, type:"spring"}}
          className='w-[90%] mx-auto lg:mx-0 md:w-[509px] lg:h-[204px] flex md:flex-wrap items-center rounded-3xl shadow-2xl drop-shadow-md lg:drop-shadow-xl top-[-70px] lg:top-[204px] lg:left-[83px] relative z-10 bg-white'>
            <img src="/static/Profile.png" className='h-40 lg:h-[99%] md:mt-[-2%]' alt="user profile" />
            <div className='py-1 px-2 lg:p-[26px]'>
                <h2 className='flex flex-col lg:flex-row lg:items-center justify-between text-[16px] lg:text-[24px] font-[700]'>DAN MACE <span className='text-[9px] lg:text-[14px] font-[400]'>/Johny_Films</span></h2>
                <div className='text-[11px] lg:text-[14px] lg:mt-[10px]' id='bitfont'>
                    <span className='font-[700]'>Bio<br/></span>
                    <span className='font-[400]'>Simply a film fan creating original<br/> content for YouTube. Let’s Collaborate.</span>
                </div>
                <div className='w-full text-[12px] lg:text-[14px] text-center font-[400] flex items-center mt-2 lg:mt-[26px]'>
                    <span className='w-[50%] h-5 lg:h-[29px] border border-black rounded'>Creator</span>
                    <span className='w-[50%] h-5 lg:h-[29px] border border-l-0 border-black bg-stone-500 rounded'></span>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Profile;