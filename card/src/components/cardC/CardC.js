import React from 'react'

const CardC = () => {
  return (
    <div className=' group m-3 p-2 w-[20rem] h-[20rem] bg-white overflow-hidden border-solid border-2 rounded-[1.5rem] shadow-md'>
      <div className='group-hover:scale-110 transition-transform duration-200'>
        <img src='./images/bg_image_4.jpeg' alt='person profile' className='w-[20rem] h-[60%] rounded-t-[1.2rem]'  />
      </div>
      <div className='group-hover:translate-y-2 duration-150 text-center'>
        <h2 className='font-mainText font-normal text-[1.5rem] mt-4'> Graduate Student </h2>
        <p className='font-mainText text-gray-600'> Check out our graduate programme for students in their final year. </p>
      </div>
    </div>
  )
}

export default CardC