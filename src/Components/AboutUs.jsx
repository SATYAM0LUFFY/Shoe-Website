import React from 'react'

const AboutUs = () => {
  return (
    <div className=' w-screen flex justify-evenly mt-40 mb-48  pt-20 scroll-mt-20 md:flex-row flex-col' >
        <div className='bg-[url("/about-us-background1.png")] md:h-[500px] h-[300px] '>
        <img src="/aboutus.png" className='md:h-screen h-[350px] ' alt="" />
        </div>
      
      <div className='max-w-[505px]'>
        <h1 className='font-bold text-4xl mb-5 md:mt-0  mt-10 md:mx-0 mx-8 scroll-mt-48' id='aboutus'>About Us!</h1>
        <p className='md:mx-0 mx-8'>For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear. <br /><br /> Gone are the days when you needed to go from store to store to locate the correct style and size for yourself. <br /><br /> At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps. <br /><br /> Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.</p>
      </div>
    </div>
  )
}

export default AboutUs
