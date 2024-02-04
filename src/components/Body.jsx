import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from "react-icons/fa";

function Body() {
  return (
    <div className='w-full lg:z-20 relative lg:top-[100px]' id='bitfont'>
        <motion.div 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, delay:0.2}} 
            className='w-[90%] lg:w-[85%] mx-auto flex flex-wrap items-center justify-between lg:mt-[200px]'>
            <div>
                <h2 className='text-[28px] font-[700]'>Releases</h2>
                <span className='text-[16px]'>Videos that you upload in collaboration with aBit appear here.</span>
            </div>
            <div className='flex flex-wrap items-center justify-around gap-9 mt-5 lg:mt-0'>
                <motion.div className='border-l-[1px] pl-[12px] border-stone-500 flex flex-col w-24'>
                    <motion.div whileHover={{y:-9}} transition={{duration:0.4}}
                         className='flex flex-col w-24'>
                        <span className='font-[700]'>1</span>
                        <span>Shared Videos</span>
                    </motion.div>
                </motion.div>
                <motion.div className='border-l-[1px] pl-[12px] border-stone-500 flex flex-col w-24'>
                    <motion.div whileHover={{y:-9}} transition={{duration:0.4}}
                         className='flex flex-col w-[5.4rem]'>
                        <span className='font-[700]'>$9510</span>
                        <span>Funds Raised</span>
                    </motion.div>
                </motion.div>
                <motion.div className='border-l-[1px] pl-[12px] border-stone-500 flex flex-col w-24'>
                    <motion.div whileHover={{y:-9}} transition={{duration:0.4}}
                         className='flex flex-col w-24'>
                        <span className='font-[700]'>317</span>
                        <span>Co-owner community</span>
                    </motion.div>
                </motion.div>
                <motion.div className='border-l-[1px] pl-[12px] border-stone-500 flex flex-col w-24'>
                    <motion.div whileHover={{y:-9}} transition={{duration:0.4}}
                         className='flex flex-col w-24'>
                        <span className='font-[700]'>$3804</span>
                        <span>Co-owner Earnings</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        <div className='w-[85%] h-[600px] mx-auto my-20 flex flex-wrap gap-9'>
            <motion.div 
                initial={{opacity: 0, x: 100, scale: 1}}
                whileInView={{opacity:1, x:0}}
                whileHover={{scale: 1.1}}
                transition={{duration:1, delay:0.2}} 
                className='h-[312px] w-[283.64px] cursor-pointer rounded-3xl bg-[#e3e3e6]'>
                <div className='flex flex-col justify-between w-[90%] h-[50%] mx-auto mt-[50%] text-center px-3'>
                    <FaPlus className='h-fit text-[35px] text-[#959595] opacity-[57%] mx-auto'/>
                    <span className='text-[#959595]'>You haven’t uploaded any videos with aBit yet. Add now!</span>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, x: -100, scale: 1}}
                whileInView={{opacity:1, x:0}}
                whileHover={{scale: 1.1}}
                transition={{duration:1, delay:0.2}} 
                className='h-[312px] w-[283.64px] cursor-pointer rounded-3xl'>
                <div className='flex flex-col justify-between h-full w-full rounded-3xl text-white p-5' style={{backgroundImage: `url('static/card.png')`}}>
                    <h2 className='text-[20px] font-[700]'>The Sound of Silence</h2>
                    <div className='flex flex-wrap text-[12px] justify-around bg-white/20 backdrop-blur-[4px] p-2 rounded-xl'>
                        <div className='flex flex-col'>
                            <span>Shares</span>
                            <span>317</span>
                        </div>
                        <div className='flex flex-col'>
                            <span>Offered</span>
                            <span>75%</span>
                        </div>
                        <div className='flex flex-col'>
                            <span>Raised</span>
                            <span>$9510</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default Body;