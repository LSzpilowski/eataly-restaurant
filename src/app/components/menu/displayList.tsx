import React from 'react'
import { IMealData } from '@/app/data/data'

interface DisplayListProps {
  meals: IMealData[];
}

const FoodCategory = ["appetizers", "main courses", "desserts", "hot drinks", "soft drinks"];

function DisplayList({meals} : DisplayListProps) {
  return (
    <div>
       {FoodCategory.map((category, categoryIndex) => {
        const filteredMeals = meals.filter((mealItem) => mealItem.category === category);
        
        return filteredMeals.length > 0 ? (
          <div key={categoryIndex}>
            <h3 className=''>{category}</h3>
            <ul>
              {filteredMeals.map((meal, mealIndex) => (
                <li key={mealIndex}>{meal.name}</li>
              ))}
            </ul>
          </div>
        ) : null;
      })}
    </div>
  )
}

export default DisplayList

