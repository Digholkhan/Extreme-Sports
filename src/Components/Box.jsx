import React from 'react'
import Image from './Image'
import bike from '../assets/biking.png'

const Box = () => {
  return (
    <>
        <div className='bg-secondary rounded-[10px]'>
            <Image Imgsrc={bike} />
            <div className='text-center py-8'>
                <h2 className='text-white text-3xl font-IBM pb-[18px]'>Mountain Biking</h2>
                <p className='text-white text-lg  font-IBM'>Dolor sit amet magna</p>
            </div>
        </div>
    </>
  )
}

export default Box