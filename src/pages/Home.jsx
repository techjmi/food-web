// import { Banner } from 'flowbite-react'
import React from 'react'
import Banner from '../components/Banner'
import ExploreMenue from '../components/ExploreMenue'
import DisplayFood from '../components/DisplayFood'

const Home = () => {
  return (
    <div className='px-4'>
      <Banner/>
      <ExploreMenue />
      <DisplayFood />
    </div>
  )
}

export default Home
