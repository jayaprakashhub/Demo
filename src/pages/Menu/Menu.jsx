import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category , setCategory]=useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} ></FoodDisplay>
      <AppDownload/>
    </div>
  )
}

export default Home