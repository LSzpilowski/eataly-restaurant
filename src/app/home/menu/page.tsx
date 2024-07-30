"use client"

import { useCallback, useState } from 'react';
import DisplayGrid from '@/app/components/menu/displayGrid';
import FilterCategory from '@/app/components/menu/filterCategory';
import FilterDetails from '@/app/components/menu/filterDetails';
import { mealData as mealDataArray, IMealData } from "@/app/data/data";

function MenuPage() {

   const [filteredMeals, setFilteredMeals] = useState<IMealData[]>(mealDataArray);

  const handleFilter = useCallback((filteredData: IMealData[]) => {
    setFilteredMeals(filteredData);
  }, []);

  return (
    <div className='w-full flex flex-col  custom-min-height '>
      <FilterCategory />
      <FilterDetails  onFilter={handleFilter}/>
      <DisplayGrid  filteredMeals={filteredMeals}/>
    </div>
  );
}

export default MenuPage;
