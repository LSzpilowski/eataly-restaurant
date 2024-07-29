"use client"

import { useState } from 'react';
import DisplayGrid from '@/app/components/menu/displayGrid';
import FilterCategory from '@/app/components/menu/filterCategory';
import FilterDetails from '@/app/components/menu/filterDetails';
import { mealData as mealDataArray } from "@/app/data/data";

function MenuPage() {

   const [filteredMeals, setFilteredMeals] = useState(mealDataArray);

   const handleFilterMeals = (filtered) => {
    setFilteredMeals(filtered);
  };

  return (
    <div className='w-full flex flex-col  custom-min-height '>
      <FilterCategory />
      <FilterDetails  onFilter={handleFilterMeals}/>
      <DisplayGrid  meals={filteredMeals}/>

    </div>
  );
}

export default MenuPage;
