import React from 'react'

const HowItIsDone = () => {
  return (
    <div  id='howitworks' className=' scroll-mt-24'>
      <h2 className='font-bold md:text-4xl md:max-w-md max-w-80 mx-auto  mt-16  px-0  md:mx-auto text-2xl ' >  Have they finally made the perfect workout shoe?</h2>
    <div className='relative   mt-[150px] w-screen'>

      <img src="/how-it-works-image 1.png"  className="lg:w-[500px] mx-auto mt-0 w-[400px] lg:rotate-0  rotate-12 " alt="" />

      <div>

        <arrow>
          <img src="/arrow1.png " className='h-40  lg:-top-8 absolute left-[750px] hidden lg:block top-0 ' alt="" />
        </arrow>

        <div className='max-w-60  '>
          <h3  className='font-bold text-[32px] absolute left-[850px] top-10 hidden lg:block'>THE FRONT</h3>
          <p className='text-[20px] max-w-60  absolute left-[850px] top-20 hidden lg:block'>The front is comfortable and adjusts well to the shape of your foot.</p>
        </div>

      </div>

      <div>

        <arrow>
          <img src="/arrow2.png " className='lg:h-40 h-32 lg:block hidden top-6 lg:top-12 absolute left-[130px] lg:left-[220px] lg:rotate-0 rotate-12  ' alt="" />
        </arrow>

        <div className='max-w-60  '>
          <h3  className='font-bold lg:text-[32px] absolute lg:block hidden left-[120px] lg:left-[180px] -top-32 lg:-top-20 text-2xl '>THE HEEL</h3>
          <p className='text-[20px] max-w-60  absolute lg:left-[180px] lg:block hidden lg:-top-10 -top-24  left-[120px]'>The heel is well-built, has appropriate elevation and is not too rigid.</p>
        </div>

      </div>

      <div>

      <arrow>
        <img src="/arrow-3.png " className='h-40  top-64 absolute left-[420px] lg:block hidden' alt="" />
      </arrow>

      <div className='max-w-60  '>
        <h3  className='font-bold text-[32px] absolute left-[250px] top-84 lg:block hidden'>TRACTION</h3>
        <p className='text-[20px] max-w-60  absolute left-[250px] top-[350px] lg:block hidden'>The shoe has good traction and doesn't slip easily.</p>
      </div>

      </div>


      </div>


    </div>
  )
}

export default HowItIsDone
