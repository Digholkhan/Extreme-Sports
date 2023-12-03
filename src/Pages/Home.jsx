import React from 'react'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'
import NewAdventures from '../Components/NewAdventures/NewAdventures'
import Counter from '../Components/Counter/Counter'
import SportsActivities from '../Components/SportsActivities/SportsActivities'
import ClubActivities from '../Components/ClubActivities/ClubActivities'
import Choose from '../Components/Choose/Choose'
import Share from '../Components/Share/Share'
import Sponsor from '../Components/Sponsor/Sponsor'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner ></Banner>
      <NewAdventures></NewAdventures>
      <Counter></Counter>
      <SportsActivities></SportsActivities>
      <ClubActivities></ClubActivities>
      <Choose></Choose>
      <Share></Share>
      <Sponsor></Sponsor>
      <Footer></Footer>

    </>
  )
}

export default Home