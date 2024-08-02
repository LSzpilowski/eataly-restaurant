import { IMealData } from '@/app/data/data';
import { Button } from '@/components/ui/button';
import React from 'react';
import ProductCard from './productCard';

interface DisplayGridProps {
  meals: IMealData[];
}

type TFoodCategory = string[];

const FoodCategory: TFoodCategory = ["appetizers", "main courses", "desserts", "hot drinks", "soft drinks"];

function DisplayGrid({ meals}: DisplayGridProps) {
  return (
      <div className='w-4/5 px-10 py-5'>
       {FoodCategory.map((category, categoryIndex) => {
        const filteredMeals = meals.filter((mealItem) => mealItem.category === category);

        return filteredMeals.length > 0 ? (
          <div key={categoryIndex} className='flex flex-col w-full gap-5 mb-10'>
            <h3 className='w-full text-center text-3xl font-bold first-letter:capitalize'>{category}</h3>
            <div className='w-full grid grid-cols-4 text-center gap-5'>
              {filteredMeals.map((meal, mealIndex) => (
                  <div key={mealIndex} className="w-full">
                    <ProductCard  image={meal.image} name={meal.name} price={meal.price} />
                  </div>
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  )
}

export default DisplayGrid;
