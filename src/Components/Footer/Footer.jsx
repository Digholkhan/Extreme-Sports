import React from 'react'
import footerbg from '../../assets/footerbg.png'
import footerLogo from '../../assets/footerLogo.png'
import Container from '../Container'


const Footer = () => {
  return (
    <div className='bg-[#0F4152]'>
      <div className='flex'>
        <img src={footerbg} alt="footerbg" />
        <Container className=' pt-20 pb-[108px] mx-0  ml-20'>
            <div className='flex'>
              <div>
                <img src={footerLogo} alt="footerlogo" />
                <div className='flex mt-[50px]'>
                  <button className='px-11 py-[18px] bg-Orange text-white text-lg font-bold font-IBM rounded-md '>Join Our <span className='block'>Club</span></button>
                  <p className='w-[388px] ml-[30px] text-white text-lg  font-IBM  '>Dolor sit amet ipsum consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices ipsum sed dolor.</p>
                </div>
                <div className='border-b-2 border-[#3D5D69] w-[590px] mt-[60px] mb-[76px]'></div>
              </div>
            </div>
            <div className='flex gap-x-11'>
              <div>
                <h4 className='text-white text-3xl font-bold font-IBM'>Contact Us</h4>
                <div className='border-b-2 border-[#F7F7F7] w-[50px] mt-[22px] mb-[76px]'></div>
              </div>
              <div className='text-white text-lg  font-IBM '>
                <p>586 Avada Avenue, Avadaville 30221 – USA</p>
                <p>Email: ext-sports@my-domain.com</p>
                <p>Phone: (555) 802-1234</p>
              </div>
            </div>
            <div>
              <p className='text-[#A0A0A0] text-lg  font-IBM '>© 2021 | Avada Theme by <span className='text-white'>ThemeFusion</span> | All Rights Reserved.</p>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer