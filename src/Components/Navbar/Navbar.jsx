import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import logo from '../../assets/logo.png'
import List from '../List'
import ListItem from '../ListItem'
import Button from '../Button'
import {FaAngleDown} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='absolute w-full top-0 left-0 z-10'>
      <Container>
         <Flex className=''>
            <div className='w-1/5'>
            <img src={logo} alt="" />
            </div>
            <Flex className='justify-center w-3/5 items-center'>  
              <div>
              <List className='flex gap-x-14 text-lg font-bold text-white font-IBM '>
                <ListItem ItemName='Home' className='hover:text-Orange duration-300'/>
                <ListItem ItemName='About Us' className='hover:text-Orange duration-300'/>
                <ListItem ItemName='Activities'  className='hover:text-Orange duration-300 flex items-center gap-x-1.5'><FaAngleDown/></ListItem>
                <ListItem ItemName='Latest News' className='hover:text-Orange duration-300'/>
                <ListItem ItemName='Contact' className='hover:text-Orange duration-300'/>
              </List>
              </div>
            </Flex>
            <div className='w-1/5 flex justify-end'>
            <Button className='px-[50px] py-5 bg-Orange font-IBM font-bold text-lg text-white rounded-[10px] flex items-center gap-x-1 z-10 after:z-[-1] relative after:content-[" "] after:absolute after:top-0 after:left-0 after:w-0  after:rounded-[10px] hover:after:bg-white hover:after:w-full hover:after:h-full hover:after:duration-1000 hover:text-black hover:duration-500' BtnName='Get Started' Icon={<FaAngleRight/>}/>
            </div>
         </Flex>
      </Container>
    </div>
  )
}

export default Navbar