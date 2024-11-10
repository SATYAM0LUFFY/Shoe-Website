import React from 'react'

const Review = () => {
  return (
    <div className='bg-[url("/review_background.png")] w-screen h-[1024px] flex  gap-20 flex-col pt-20  ' id='testimonials'>
      <h1  className='max-w-[786px] font-bold text-[50px] text-center self-center mt-0 pt-0 '>What People are saying about THE SHOE COMPANY ?</h1>
      <div className='flex justify-around'>
        <div className='flex flex-col' >
            <img className='rounded-full w-72 h-72 ' src="/person2.png" alt="" />
            <p className='max-w-80 mt-4'>“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
        </div>
        <div className='flex flex-col' >
            <img className=' rounded-full w-72 h-72 ' src="/person1.png" alt="" />
            <p className='max-w-80 mt-4'>“I love the shoes, the quality, and everyting. They are worth the investment!”</p>
        </div>
        <div className='flex flex-col' >
            <img className='rounded-full w-72 h-72 ' src="/person3.png" alt="" />
            <p className='max-w-80 mt-4'>“They make the best and forever lasting shoes. Superb fit and confort is literally the next level. Much recommended!”</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Review
