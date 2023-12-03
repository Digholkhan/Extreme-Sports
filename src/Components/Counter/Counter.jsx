import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Counter = () => {
  return (
    <div className='py-[100px]'>
        <Container>
            <Flex className='gap-x-6'>
            <div className="bg-StarBg bg-cover text-center w-[312px] h-[234px] bg-[#FFF4E5]  py-10">
                <h2 className='font-IBM text-[80px] font-bold'>10+</h2>
                <p className='font-IBM text-lg'>Sports Activities</p>
            </div>
            <div className="bg-StarBg bg-cover text-center w-[312px] h-[234px] bg-[#E7FDE9]  py-10">
                <h2 className='font-IBM text-[80px] font-bold'>3k+</h2>
                <p className='font-IBM text-lg'>Registered Enthusiasts</p>
            </div>
            <div className="bg-StarBg bg-cover text-center w-[312px] h-[234px] bg-[#F2F2FD]  py-10">
                <h2 className='font-IBM text-[80px] font-bold'>15+</h2>
                <p className='font-IBM text-lg'>Years of Experience</p>
            </div>
            <div className="bg-StarBg bg-cover text-center w-[312px] h-[234px] bg-[#FDF1F5]  py-10">
                <h2 className='font-IBM text-[80px] font-bold'>9.5</h2>
                <p className='font-IBM text-lg'>Average Rating</p>
            </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Counter