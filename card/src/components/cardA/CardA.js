import React from 'react'
import styles from './cardA.module.css'

const CardA = () => {

    // const bgImage = './images/bg_image_1.jpeg'
    // const cardHeight = '20rem'
    // const cardWidth = '20rem'

  return (
    <div className={styles.card_container}>
        <div className='relative'>
            <img alt='card background' src='./images/bg_image_1.jpeg' className='w-[25rem] h-[25rem]' />
            <div className='absolute p-3 top-10 text-slate-50 '> 
                <h2 className='font-mainText font-normal text-[1.5rem] mb-2'> Title </h2>
                <h3 className='font-mainText text-[1rem] mb-3'> Sub-Title </h3>
                <p className='font-description font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
        </div>
        
    </div>
  )
}

export default CardA