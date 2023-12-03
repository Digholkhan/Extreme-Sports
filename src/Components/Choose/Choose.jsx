import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import chooseImgOne from '../../assets/chooseImgOne.png'
import chooseImgTwo from '../../assets/chooseImgTwo.png'
import chooseImgThree from '../../assets/chooseImgThree.png'
import chooseImgFour from '../../assets/chooseImgFour.png'

const Choose = () => {
  return (
    <div className='bg-[#FDFEFD]'>
        <Container className='pt-[170px] pb-[101px]' >
          <div className='text-center'>
            <h4 className='text-3xl font-Yellowtail text-[#14B9F1]'>Share The Excitement</h4>
            <h3 className='text-black font-IBM font-bold text-[54px]'>Why Choose Us</h3>
            <div className='mx-auto border-b-2 border-[#A0A0A0] w-[81px] mt-4 mb-[50px]'></div>
          </div>
          <Flex className='gap-x-10'>
            <div className='text-center'>
                <div className='h-[120px] w-[120px] bg-[#DDF1FD] rounded-full flex justify-center items-center mx-auto'>
                  <img  src={chooseImgOne} alt="" />
                </div>
                <h4 className='text-black fon-IBM font-bold text-2xl my-11'>A Team Of Passionate Individuals</h4>
                <p className='text-black font-IBM text-lg'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
            </div>
            <div className='text-center'>
                <div className='h-[120px] w-[120px] bg-[#E7F6E9] rounded-full flex justify-center items-center mx-auto'>
                  <img  src={chooseImgTwo} alt="" />
                </div>
                <h4 className='text-black fon-IBM font-bold text-2xl my-11'>Learn To Train Your Body To Perform</h4>
                <p className='text-black font-IBM text-lg'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
            </div>
            <div className='text-center'>
                <div className='h-[120px] w-[120px] bg-[#F29762] rounded-full flex justify-center items-center mx-auto'>
                  <img  src={chooseImgThree} alt="" />
                </div>
                <h4 className='text-black fon-IBM font-bold text-2xl my-11'>Overcome Your Fears And Master Your Skills</h4>
                <p className='text-black font-IBM text-lg'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
            </div>
            <div className='text-center'>
                <div className='h-[120px] w-[120px] bg-[#FAC6D2] rounded-full flex justify-center items-center mx-auto'>
                  <img  src={chooseImgFour} alt="" />
                </div>
                <h4 className='text-black fon-IBM font-bold text-2xl my-11'>Overcome Your Fears And Master Your Skills</h4>
                <p className='text-black font-IBM text-lg'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
            </div>
          </Flex>
        </Container>
    </div>
  )
}

export default Choose