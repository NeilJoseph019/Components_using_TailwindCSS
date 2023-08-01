import React from 'react'

const CardB = () => {
  return (
    <div className='m-3 w-[20rem] h-[20rem] bg-white overflow-hidden border-solid border-2 rounded-[1.5rem] shadow-md'>
        <img src='./images/bg_image_2.jpeg' alt='card detail visuals' className='w-[20rem] h-[60%]' />
        <div className='p-2 relative'>
            <h2 className='font-mainText text-[1.5rem]'> Title </h2>
            <h4 className='font-mainText text-gray-400 mb-3'> Sub-Title </h4>
            <p className='font-description  '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className='absolute top-5 right-5 bg-blue-100 rounded-[0.5rem] border-[2px] border-sky-400 px-2 hover:bg-blue-300' > Explore </button>
        </div>
    </div>
  )
}

export default CardB