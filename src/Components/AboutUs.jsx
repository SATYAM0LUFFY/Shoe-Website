import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex justify-evenly mt-40 mb-48 w-full pt-20' id='aboutus'>
        <div className='bg-[url("/about-us-background1.png")] h-[500px]'>
        <img src="/aboutus.png" className='h-screen ' alt="" />
        </div>
      
      <div className='max-w-[505px]'>
        <h1 className='font-bold text-4xl mb-5'>About Us!</h1>
        <p >For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear. <br /><br /> Gone are the days when you needed to go from store to store to locate the correct style and size for yourself. <br /><br /> At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps. <br /><br /> Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.</p>
      </div>
    </div>
  )
}

export default AboutUs
