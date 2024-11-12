import React from 'react'

const Navbar = () => {
  return (

    <div className ='bg-[#000000]  bg-black/70 backdrop-blur-md px-9  text-white flex justify-between items-center fixed w-screen'>

       <div>
       <a href="#">
       <img src="/shoe-logo.png" className='md:h-36  md:w-[130px] h-20 w-[80px]  mt-0 pt-0' alt="" />
       </a>
       <p className='text-sm md:-my-10 -my-8'>The Shoe Company</p>
       </div>

       <nav className='flex  lg:space-x-10 md:space-x-4 space-x-2   items-center   font-bold lg:text-[28px]  md:text-[20px] my-8 text-base  sm:block hidden  '>
        <a href="#">Home</a>
        <a href="#howitworks">How It Works?</a>
        <a href="#aboutus">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contactus">Contact Us</a>
       </nav>
       <a className='text-5xl sm:hidden block'>≡</a> 
       

    </div>
  )
}

export default Navbar
