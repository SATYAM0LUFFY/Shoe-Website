import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen  h-full flex justify-center mt-40 scroll-mt-36 lg:flex-row flex-col ' id='contactus'>
      <div>
        <h1 className='text-4xl font-bold mt-40 text-center'>Contact Us</h1>
        <p className='max-w-64 lg:text-[24px] text-center text-xl m-auto pb-8 '>THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910</p>
        <div></div>
      </div>
      <div className='flex justify-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.47088590423!2d83.32150921295003!3d26.763844605651826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731235904935!5m2!1sen!2sin"
        width="500"
        height="550"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
       className='lg:w-[500px] lg:h-[500px] w-[350px] h-[500px]'></iframe>
      </div>
    </div>
  )
}

export default Contact
