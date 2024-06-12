import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider'
import Foodlist from './Foodlist'

const DisplayFood = () => {
    const{food}= useContext(DataContext)
  return (
    <div>
            <h3 className='text-center text-lg font-semibold'>food list choose ur fav food</h3>
            <div className="food_list md:mx-28">
            {food.map((item)=>
   <Foodlist {...item} />
    )}
        </div>
    </div>
  )
}

export default DisplayFood
