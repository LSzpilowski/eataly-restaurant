"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { IMealData } from "@/app/data/data";

type FoodTypeFilters = {
  lowCalories: boolean;
  highProtein: boolean;
  lowCarb: boolean;
  lowFat: boolean;
};

type AllergenFilters = {
  dairy: boolean;
  eggs: boolean;
  fish: boolean;
  shellfish: boolean;
  treeNuts: boolean;
  peanuts: boolean;
  wheat: boolean;
  soy: boolean;
  sesame: boolean;
  sulphites: boolean;
  mustard: boolean;
  celery: boolean;
  lupin: boolean;
  molluscs: boolean;
  gluten: boolean;
};
interface FilterDetailsProps {
  meals: IMealData[];
  onFilter: (filterData: IMealData[]) => void;
}

const FoodType: Array<keyof FoodTypeFilters> = [
  "lowCalories",
  "highProtein",
  "lowCarb",
  "lowFat",
];
const Allergens: Array<keyof AllergenFilters> = [
  "dairy",
  "eggs",
  "fish",
  "shellfish",
  "treeNuts",
  "peanuts",
  "wheat",
  "soy",
  "sesame",
  "sulphites",
  "mustard",
  "celery",
  "lupin",
  "molluscs",
  "gluten",
];

function FilterDetails({ meals, onFilter }: FilterDetailsProps) {
  const [sliderValue, setSliderValue] = useState<number>(17);
  const [foodTypeFilters, setFoodTypeFilters] = useState<FoodTypeFilters>({
    lowCalories: false,
    highProtein: false,
    lowCarb: false,
    lowFat: false,
  });
  const [allergenFilters, setAllergenFilters] = useState<AllergenFilters>({
    dairy: false,
    eggs: false,
    fish: false,
    shellfish: false,
    treeNuts: false,
    peanuts: false,
    wheat: false,
    soy: false,
    sesame: false,
    sulphites: false,
    mustard: false,
    celery: false,
    lupin: false,
    molluscs: false,
    gluten: false,
  });

  const resetAllFilters = useCallback(() => {
    setSliderValue(17);
    setFoodTypeFilters({
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    });
    setAllergenFilters({
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    });
  }, []);

  const filterMeals = useCallback(() => {
    const filteredMeals = meals.filter((meal) => {
      const meetsPrice = parseFloat(meal.price.substring(1)) <= sliderValue;
      const meetsFoodType = Object.keys(foodTypeFilters).every(
        (key) => !foodTypeFilters[key] || meal.foodType[key]
      );
      const meetsAllergens = Object.keys(allergenFilters).every(
        (key) => !allergenFilters[key] || !meal.allergens[key]
      );
      return meetsPrice && meetsFoodType && meetsAllergens;
    });
    onFilter(filteredMeals);
  }, [sliderValue, foodTypeFilters, allergenFilters, meals, onFilter]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  const handleFoodTypeChange = (type: keyof FoodTypeFilters) => {
    setFoodTypeFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const handleAllergenChange = (type: keyof AllergenFilters) => {
    setAllergenFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  useEffect(() => {
    if (
      sliderValue === 17 &&
      Object.values(foodTypeFilters).every((value) => value === false) &&
      Object.values(allergenFilters).every((value) => value === false)
    ) {
      filterMeals();
    }
  }, [sliderValue, foodTypeFilters, allergenFilters, filterMeals]);

  return (
    <div className="flex flex-col items-center border-x-2 w-1/5 fixed top-[149px] right-0 min-h-screen p-5">
      <p className="text-2xl font-bold">Filters</p>
      <div className="w-full flex flex-col items-center gap-10 mt-5">
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Price</p>
          <Slider
            defaultValue={[sliderValue]}
            max={17}
            min={5}
            step={1}
            onValueChange={handleSliderChange}
          />
          <p>{`£${sliderValue}`}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Food type</p>
          <div className="grid grid-cols-2 w-full">
            {FoodType.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  className="mr-2"
                  checked={foodTypeFilters[item]}
                  onChange={() => handleFoodTypeChange(item)}
                />
                <label htmlFor={item}>
                  {item.replace(/([A-Z])/g, "-$1").toLowerCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Allergens</p>
          <div className="grid grid-cols-2 w-full">
            {Allergens.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  className="mr-2"
                  checked={allergenFilters[item]}
                  onChange={() => handleAllergenChange(item)}
                />
                <label htmlFor={item}>
                  {item.replace(/([A-Z])/g, " $1").toLowerCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input type="submit" value="Submit" onClick={filterMeals} />
        <Input type="reset" value="Reset" onClick={resetAllFilters} />
      </div>
    </div>
  );
}

export default FilterDetails;
