// import { Banner } from 'flowbite-react'
import React, { useState } from 'react'
import Banner from '../components/Banner'
import ExploreMenue from '../components/ExploreMenue'
import DisplayFood from '../components/DisplayFood'

const Home = () => {
  const[category, setCategory]= useState('All')
  return (
    <div className='px-4'>
      <Banner/>
      <ExploreMenue category={category}setCategory={setCategory}/>
      <DisplayFood category={category}/>
    </div>
  )
}

export default Home
