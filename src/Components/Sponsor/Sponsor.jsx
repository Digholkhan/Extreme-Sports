import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import sponsorImgOne from '../../assets/sponsorImgOne.png'
import sponsorImgTwo from '../../assets/sponsorImgTwo.png'
import sponsorImgThree from '../../assets/sponsorImgThree.png'
import sponsorImgFour from '../../assets/sponsorImgFour.png'
import sponsorImgFive from '../../assets/sponsorImgFive.png'

const Sponsor = () => {
  return (
    <div>
        <Container className='pt-[106px] pb-[100px]'>
            <Flex className='justify-between items-center'>
                <div>
                    <img src={sponsorImgOne} alt="" />
                </div>
                <div>
                    <img src={sponsorImgTwo} alt="" />
                </div>
                <div>
                    <img src={sponsorImgThree} alt="" />
                </div>
                <div>
                    <img src={sponsorImgFour} alt="" />
                </div>
                <div>
                    <img src={sponsorImgFive} alt="" />
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Sponsor