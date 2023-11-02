import React from 'react'

import Featured from "../components/Featured";
import Delivery from "../components/Delivery";
import TopPics from "../components/TopPicks";
import Meal from "../components/Meal";

const HomePage = () => {
  return (
    <div>
      <Featured />
      <Delivery />
      <TopPics />
      <Meal />
    </div>
  )
}

export default HomePage