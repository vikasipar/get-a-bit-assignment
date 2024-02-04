import React from 'react';

function Hero() {
  return (
    <div className='w-full'>
        <img src="/static/cover-image.png" alt="cover image" className='lg:z-0 lg:absolute top-2'/>
        <span className='w-full lg:top-[375px] lg:z-1 lg:relative'>
            <marquee id="marquee" behavior="scroll" className='w-full text-[18px] lg:text-[24px] bg-[#363535] py-1 lg:py-6 text-white'>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now /John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</marquee>
        </span>
    </div>
  )
}

export default Hero;