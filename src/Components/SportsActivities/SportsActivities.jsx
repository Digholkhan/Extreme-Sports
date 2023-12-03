import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Box from '../Box'
import vector from '../../assets/extreme-sports-vector.png'

const SportsActivities = () => {
  return (
    <div className='bg-color-body py-28 relative'>
        <Container>

            <Flex className='pb-[70px]'> 
                
                <div>
                    <h3 className='font-Yellowtail text-3xl text-Orange pb-1.5'>Live The Excitement</h3>
                    <h2 className='font-IBM text-white text-[54px] w-[595px] font-bold'>Extreme Sports Activities</h2>
                    <div className='w-[100px] h-[1px] bg-[#A0A0A0] mt-10'></div>
                </div>
                
                
                <div>
                    <p className='text-white w-[590px] pt-16'>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt
                    labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus
                    ipsum dolore commodo viverra maecenas.</p>
                </div>
             
            </Flex>

            <div className='grid gap-x-[30px] gap-y-[50px] grid-cols-3'>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </div>
        </Container>
        <div className='bg-StarBg2  bg-center bg-no-repeat text-white text-[160px] font-Arizonia text-center'>
                <h1 className='font-Arizonia'>Extreme Sports</h1>
        </div>
        <img src={vector} alt="" className='absolute bottom-0 w-full'/>
    </div>
  )
}

export default SportsActivities