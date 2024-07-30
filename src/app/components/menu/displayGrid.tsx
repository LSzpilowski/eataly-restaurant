import { IMealData } from '@/app/data/data';
import React from 'react';

interface DisplayGridProps {
  filteredMeals: IMealData[];
}


function DisplayGrid({ filteredMeals }: DisplayGridProps) {
  return (
    <div className='bg-orange-500 w-4/5'>
      {filteredMeals.map((meal, index) => (
        <div key={index}>
          <h3>{meal.name}</h3>
          <p>{meal.price}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayGrid;
