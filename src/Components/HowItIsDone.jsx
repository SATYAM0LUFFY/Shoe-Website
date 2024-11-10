import React from 'react'

const HowItIsDone = () => {
  return (
    <div  id='howitworks' className=' '>
      <h2 className='font-bold md:text-4xl md:max-w-md max-w-80 mx-auto  mt-16  px-0  md:mx-auto text-2xl ' >  Have they finally made the perfect workout shoe?</h2>
    <div className='relative   mt-[150px] w-screen'>
      <img src="/how-it-works-image 1.png"  className="w-[500px] mx-auto mt-0 " alt="" />

      <div>

        <arrow>
          <img src="/arrow1.png " className='h-40  -top-8 absolute left-[750px]' alt="" />
        </arrow>

        <div className='max-w-60  '>
          <h3  className='font-bold text-[32px] absolute left-[850px] top-10'>THE FRONT</h3>
          <p className='text-[20px] max-w-60  absolute left-[850px] top-20'>The front is comfortable and adjusts well to the shape of your foot.</p>
        </div>

      </div>

      <div>

        <arrow>
          <img src="/arrow2.png " className='h-40  top-12 absolute left-[220px]' alt="" />
        </arrow>

        <div className='max-w-60  '>
          <h3  className='font-bold text-[32px] absolute left-[180px] -top-20'>THE HEEL</h3>
          <p className='text-[20px] max-w-60  absolute left-[180px] -top-10'>The heel is well-built, has appropriate elevation and is not too rigid.</p>
        </div>

      </div>

      <div>

      <arrow>
        <img src="/arrow-3.png " className='h-40  top-64 absolute left-[420px]' alt="" />
      </arrow>

      <div className='max-w-60  '>
        <h3  className='font-bold text-[32px] absolute left-[250px] top-84'>TRACTION</h3>
        <p className='text-[20px] max-w-60  absolute left-[250px] top-[350px]'>The shoe has good traction and doesn't slip easily.</p>
      </div>

      </div>


      </div>


    </div>
  )
}

export default HowItIsDone