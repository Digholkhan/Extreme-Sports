import React from 'react'
import Xlogo from '../../assets/Xlogo.png'
import Container from '../Container'
import Button from '../Button'
import {AiFillPlayCircle} from 'react-icons/ai'
import Flex from '../Flex'
import extremeVdoOne from '../../assets/extremeVdoOne.png'
import extremeVdoTwo from '../../assets/extremeVdoTwo.png'
import extremeVdoThree from '../../assets/extremeVdoThree.png'
import {AiFillRightCircle} from 'react-icons/ai'

const ClubActivities = () => {
  return (
    <div className=' bg-Orange relative'>    
       <Container>
       <div className='text-center pt-[100px] pb-[475px]'>
            <img src={Xlogo} alt="" className='mx-auto pb-7' />
            <h2 className='font-IBM text-white text-[54px] w-[px] font-bold'>Extreme Sports Will Test Your Limits and Push The
            Boundaries to The Max</h2>
            <h3 className='font-IBM text-3xl text-white font-bold pt-[50px]'>Be Prepared To Experience The New Adventures</h3>
            <div className=' justify-cente gap-x-11 pt-14'>
            <Button BtnName='Join Our Team' className='text-lg text-white font-IBM font-bold py-5 px-10 bg-color-body rounded-[10px] mr-[46px]'/> 
            <Button Icon={ <AiFillPlayCircle className='absolute top-6 left-4 '/>} BtnName='Join Our Team' className='relative text-lg text-white font-IBM font-bold py-5 px-10 rounded-[10px]  gap-x-1 border-2'/>
            {/* <AiFillPlayCircle className='block'/></Button> */}
            </div>      
       </div>

       <div className='absolute bottom-[-70px]'>
            <Flex className='gap-x-[27px]'>
                <div className='relative'>
                    <img src={extremeVdoOne} alt="" />
                    <div className='absolute top-0 pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                        <h3 className='text-white font-IBM text-[40px] font-bold'>Sports Videos</h3>
                        <h5 className='text-white font-IBM text-[28px] font-semibold'>Get Inspired</h5>
                        <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                        <Flex className='items-center'>
                            <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                            <AiFillRightCircle className='text-2xl ml-5'/>
                        </Flex>
                    </div>
                </div>
                <div className='relative'>
                    <img src={extremeVdoTwo} alt="" />
                    <div className='absolute top-[-62px] pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                        <h3 className='text-white font-IBM text-[40px] font-bold'>Club <span className='block'>Activities</span></h3>
                        <h5 className='text-white font-IBM text-[28px] font-semibold'>View All Sports</h5>
                        <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                        <Flex className='items-center'>
                            <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                            <AiFillRightCircle className='text-2xl ml-5'/>
                        </Flex>
                    </div>
                </div>
                <div className='relative'>
                    <img src={extremeVdoThree} alt="" />
                    <div className='absolute top-[-62px] pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                        <h3 className='text-white font-IBM text-[40px] font-bold'>Meet Our <span className='block'>Team</span></h3>
                        <h5 className='text-white font-IBM text-[28px] font-semibold'>The Instructors</h5>
                        <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                        <Flex className='items-center'>
                            <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                            <AiFillRightCircle className='text-2xl ml-5'/>
                        </Flex>
                    </div>
                </div>
            </Flex>
          </div>
       
       </Container>
    </div>
  )
}

export default ClubActivities