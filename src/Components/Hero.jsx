import React from 'react'

const Hero = () => {
  return (
    <div className=' flex justify-center bg-[url("/background-road-share1.png")]  h-screen md:bg-contain bg-contain bg-no-repeat bg-right'>
      <div className='flex items-center gap-0 md:gap-0 justify-center flex-col md:flex-row m-auto'>
        <h1 className='md:text-7xl text-3xl font-bold lg:mt-[60px] mt-[80px] mb-0 pb-0'> THE <br /> SHOE <br /> COMPANY </h1>
        <img src="/the-white-shoe-hero-image1.png" className='md:mt-20 mb-20 w-96 md:w-[440px]' alt=""/>
        
       
      </div>
    </div>
  )
}

export default Hero
