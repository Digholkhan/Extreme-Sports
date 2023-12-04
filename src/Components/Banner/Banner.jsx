import React from 'react'
import Button from '../Button'
import BannerV from '../../assets/banner-Vector.png'
const Banner = () => {
  return (
    <>
     <div className=''>
     <div className='relative top-0 bg-BannerImg bg-cover py-[240px] '>
        <h1 className='font-IBM text-7xl text-white font-bold text-center w-[785px] mx-auto'>Experience the spirit of adventure sports</h1>
        <div className='text-center mt-12'>
            <Button BtnName='Explore Activities' className='px-[51px] py-[19px] bg-Orange font-IBM font-bold text-lg text-white z-10 rounded-[10px] mr-4 relative after:content-[" "] after:absolute after:top-0 after:left-0 after:w-0 after:rounded-[10px] after:z-[-1] hover:after:bg-white hover:text-black hover:duration-500 hover:after:w-full  hover:after:h-full hover:after:duration-1000 hover:after:ease-in-out' />
            <Button BtnName='Who We Are' className='px-[63px] py-[19px] bg-white font-ibn font-bold text-lg rounded-[10px] z-10 relative after:content-[" "] after:absolute after:top-0 after:left-0 after:w-0 after:rounded-[10px] after:z-[-1] hover:after:bg-Orange hover:text-white hover:duration-500 hover:after:w-full  hover:after:h-full hover:after:duration-1000 hover:after:ease-in-out'/>
        </div>
        <div>
            <img src={BannerV} alt="" className='w-full absolute bottom-0'/>
        </div> 
    </div>
     </div>
    </>
  )
}

export default Banner