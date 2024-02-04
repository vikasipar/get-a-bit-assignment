import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoWallet, IoNotifications } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (    
    <div className='flex w-full h-[50px] lg:h-[110px] items-center justify-around lg:justify-between text-[24px] lg:py-[40px] bg-[#e3e3e6] border border-black z-20 relative'>
        {sidebar ? 
        <MdClose onClick={() => setSidebar(false)} className='block lg:hidden'/>:
        <RiMenu4Line onClick={() => setSidebar(true)} className='block lg:hidden'/>}
        <motion.span 
          initial={{x: -400}}
          animate={{x: 0}}
          transition={{delay:1.3, ease:'easeIn', duration:1.6, type:"spring"}}
          className='font-[700] ml-[123px] cursor-pointer'>aBit</motion.span>
        <AnimatePresence>
        {sidebar && 
        <motion.div 
          key="sidebar"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{duration:0.8, ease:"easeInOut"}} 
          className='block lg:hidden w-screen text-center h-screen top-[50px] absolute z-50 bg-white/90'>
          <div className='w-fit mx-auto p-9 flex flex-col space-y-5 h-fit my-12 z-50'>
            <motion.span whileHover={{x:9}} transition={{duration:0.4}} className='flex items-center gap-5'><img src='/static/Profile-pic.png' alt='profile pic' className='cursor-pointer'/>Profile</motion.span>
            <motion.span whileHover={{x:9}} transition={{duration:0.4}} className='flex items-center gap-5'><IoWallet className='opacity-[32%] cursor-pointer text-3xl'/> Wallet</motion.span>
            <motion.span whileHover={{x:9}} transition={{duration:0.4}} className='flex items-center gap-5'><IoNotifications className='opacity-[32%] cursor-pointer text-3xl'/>Notifications</motion.span>
            <motion.button whileHover={{x:9}} transition={{duration:0.4}} className='px-[22px] py-[10px] border-2 border-[#764cc2] text-[#764cc2] text-[12px] font-[700] rounded-full'>Share new video</motion.button>
          </div>
          <motion.button whileHover={{x:9}} transition={{duration:0.4}} className='px-[22px] py-[7px] border-2 border-[#764cc2] text-[#764cc2] text-[12px] font-[700] rounded-full'>Logout</motion.button>
        </motion.div>}
        </AnimatePresence>
        <motion.div 
          initial={{x: 400}}
          animate={{x: 0}}
          transition={{delay:1.3, ease:'easeIn', duration:1.6, type:"spring"}}
          className='hidden lg:flex items-center gap-[16px] mr-[60px]'>
            <motion.button 
              initial={{scale: 1}}
              whileHover={{scale: 1.1}}
              transition={{ease:'easeIn', duration:1.6, type:"spring"}}
              className='px-[22px] py-[10px] border-2 border-[#764cc2] text-[#764cc2] text-[12px] font-[700] rounded-full'>Share new video</motion.button>
            <motion.span
              initial={{scale: 1}}
              whileHover={{scale: 1.4}}
              transition={{ease:'easeIn', duration:1.6, type:"spring"}}>
              <IoWallet className='opacity-[32%] cursor-pointer'/>
            </motion.span>
            <motion.span
              initial={{scale: 1}}
              whileHover={{scale: 1.4}}
              transition={{ease:'easeIn', duration:1.6, type:"spring"}}>
              <IoNotifications className='opacity-[32%] cursor-pointer'/>
            </motion.span>
            <motion.span
              initial={{scale: 1}}
              whileHover={{scale: 1.4}}
              transition={{ease:'easeIn', duration:1.6, type:"spring"}}>
              <img src='/static/Profile-pic.png' alt='profile pic' className='cursor-pointer'/>
            </motion.span>
            <span><FaChevronDown className='opacity-[32%] cursor-pointer hover:animate-bounce'/></span>
        </motion.div>
    </div>
  )
}

export default Header;