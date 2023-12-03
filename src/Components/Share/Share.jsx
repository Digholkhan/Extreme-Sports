import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import shareImgOne from '../../assets/shareImgOne.png'
import shareImgTwo from '../../assets/shareImgTwo.png'
import shareImgThree from '../../assets/shareImgThree.png'

const Share = () => {
  return (
    <div className='bg-[#F7F7F7]'>
        <Container className='pt-[102px] pb-[160px]'>
        <Flex className='items-center'>
                <div className='w-1/2'>
                    <h4 className='font-Yellowtail text-Orange text-3xl'>Share The Passion</h4>
                    <h2 className='font-bold font-IBM text-black text-[54px]'>Extreme Sports<span className='block'>Activities</span></h2>
                </div>
                <div className='w-1/2'>
                <p className='font-IBM text-black text-lg w-[634px]'>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
                </div>
        </Flex>
        <div className='border-b-2 border-[#A0A0A0] w-[100px] mt-[41px] mb-[70px]'></div>
        <Flex className='gap-x-6'>
            <div className='text-center border-2 border-[#F0F0F0] rounded-[10px] bg-white'>
                <img className='mx-auto' src={shareImgOne} alt="" />
                <h4 className='text-black font-bold font-IBM text-[28px] mt-7 mb-6'>Paragliding Adventures <span className='block'> Across the World</span></h4>
                <p className='text-black text-lg font-IBM w-[312px] mx-auto mb-11'>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                <div className='border-t-2 border-[#F0F0F0]'>
                    <button className='text-lg  text-Orange font-bold font-IBM py-9'>Read Article</button>
                </div>
            </div>
            <div className='text-center border-2 border-[#F0F0F0] rounded-[10px] bg-white'>
                <img className='mx-auto' src={shareImgTwo} alt="" />
                <h4 className='text-black font-bold font-IBM text-[28px] mt-7 mb-6'>All-Terrain Vehicle  <span className='block'> Excursions for the Family</span></h4>
                <p className='text-black text-lg font-IBM w-[312px] mx-auto mb-11'>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                <div className='border-t-2 border-[#F0F0F0]'>
                    <button className='text-lg  text-Orange font-bold font-IBM py-9'>Read Article</button>
                </div>
            </div>
            <div className='text-center border-2 border-[#F0F0F0] rounded-[10px] bg-white'>
                <img className='mx-auto' src={shareImgThree} alt="" />
                <h4 className='text-black font-bold font-IBM text-[28px] mt-7 mb-6'>Best Skateboarding Big <span className='block'> Air Skate Parks</span></h4>
                <p className='text-black text-lg font-IBM w-[312px] mx-auto mb-11'>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                <div className='border-t-2 border-[#F0F0F0]'>
                    <button className='text-lg  text-Orange font-bold font-IBM py-9'>Read Article</button>
                </div>
            </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Share