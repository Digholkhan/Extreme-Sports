import React from 'react'
import Container from '../Container'
import  Flex from '../Flex'
import Button from '../Button'
import List from '../List'
import ListItem from '../ListItem'
import P1 from '../../assets/NewAd-1.png'
import P2 from '../../assets/NewAd-2.png'
import {BsCheckCircleFill} from 'react-icons/bs'


const NewAdventures = () => {
  return (
    <div>
      <Container>
        <Flex>
          <div className='2/4'>
                <h3 className='font-Yellowtail text-3xl text-[#7EBDF1] pb-1.5'>Feel The Excitement</h3>
                <h2 className='font-IBM text-[54px] w-[595px] font-bold'>Join Us And Embark On New Adventures</h2>
                <div className='w-[100px] h-[1px] bg-[#A0A0A0] mt-[70px] mb-20'></div>
                <p className='font-IBM text-lg text-[#4C4522] w-[590px] '>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts 
                   laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus 
                   commodo viverra sed ipsum maecenas.</p>
                <List className='pt-[51px] pb-14'>
                    <ListItem className='flex items-center font-IBM text-lg text-[#4C4522]'><BsCheckCircleFill className='text-black text-[30px] p-[7px] bg-[#C4C4C4] rounded-[50%] mr-[18px]'/>Unde omnis iste natus error sit voluptatem dolore</ListItem>
                    <ListItem className='flex items-center font-IBM text-lg text-[#4C4522] mt-[22px]'><BsCheckCircleFill className='text-black text-[30px] p-[7px] bg-[#C4C4C4] rounded-[50%] mr-[18px]'/>Unde omnis iste natus error sit voluptatem dolore</ListItem>
                    <ListItem className='flex items-center font-IBM text-lg text-[#4C4522] mt-[22px]'><BsCheckCircleFill className='text-black text-[30px] p-[7px] bg-[#C4C4C4] rounded-[50%] mr-[18px]'/>Unde omnis iste natus error sit voluptatem dolore</ListItem>
                </List>
                <Button BtnName='Discover More' className='px-[55px] py-5 bg-Orange font-IBM font-bold text-lg text-white rounded-[10px] flex items-center gap-x-1 z-10 after:z-[-1] relative after:content-[" "] after:absolute after:top-0 after:left-0 after:w-0  after:rounded-[10px] hover:after:bg-black hover:after:w-full hover:after:h-full hover:after:duration-1000 '></Button>
          </div>

          <div className='flex items-center w-2/4'>
              <div className='ml-[74px] mr-6'>
                  <img src={P1}alt="" />
              </div>          
              <div>
                  <img src={P2}alt="" />
              </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default NewAdventures