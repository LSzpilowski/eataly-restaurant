import { IMealData } from "@/app/data/data";
import React from "react";
import ProductCard from "./productCard";

interface DisplayGridProps {
  meals: IMealData[];
}

type TFoodCategory = string[];

const FoodCategory: TFoodCategory = [
  "appetizers",
  "main courses",
  "desserts",
  "hot drinks",
  "soft drinks",
];

function DisplayGrid({ meals }: DisplayGridProps) {
  return (
    <div className="w-full md:w-4/5 px-2 md:px-5 pt-5  border-r-2">
      {FoodCategory.map((category, categoryIndex) => {
        const filteredMeals = meals.filter(
          (mealItem) => mealItem.category === category
        );

        return filteredMeals.length > 0 ? (
          <div
            key={categoryIndex}
            className="flex flex-col w-full gap-2 md:gap-5 mb-5 md:mb-10"
          >
            <h3 className="w-full text-center text-xl md:text-3xl font-bold first-letter:capitalize text-orange-500">
              {category}
            </h3>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 text-center gap-2 md:gap-5 p-0 m-0">
              {filteredMeals.map((meal, mealIndex) => (
                <div key={mealIndex} className="w-full p-0 m-0 overflow-hidden">
                  <ProductCard
                    image={meal.image}
                    name={meal.name}
                    price={meal.price}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default DisplayGrid;
