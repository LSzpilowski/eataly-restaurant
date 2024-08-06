"use client";

import { useState, useEffect, useCallback } from "react";
import { mealData as mealDataArray, IMealData } from "@/app/data/data";
import DisplayGrid from "@/app/components/menu/displayGrid";
import FilterCategory from "@/app/components/menu/filterCategory";
import FilterDetails from "@/app/components/menu/filterDetails";
import DisplayList from "@/app/components/menu/displayList";
import SwitchDisplay from "@/app/components/menu/switchDisplay";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function MenuPage() {
  const [categoryFilteredMeals, setCategoryFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [filteredMeals, setFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isListLayout, setIsListLayout] = useState<boolean>(true);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState<number>(17);
  const [foodTypeFilters, setFoodTypeFilters] = useState({
    lowCalories: false,
    highProtein: false,
    lowCarb: false,
    lowFat: false,
  });
  const [allergenFilters, setAllergenFilters] = useState({
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

  const applyCategoryFilter = useCallback(
    (meals: IMealData[], category: string) => {
      if (category === "All") {
        return meals;
      }
      return meals.filter((meal) => meal.category === category);
    },
    []
  );

  const handleCategoryChange = useCallback(
    (category: string, index: number) => {
      setCurrentCategory(category);
      setActiveCategoryIndex(index);
    },
    []
  );

  const handleFilter = useCallback(() => {
    const filteredMeals = mealDataArray.filter((meal) => {
      const meetsPrice = parseFloat(meal.price.substring(1)) <= sliderValue;
      const meetsFoodType = Object.keys(foodTypeFilters).every(
        (key) => !foodTypeFilters[key] || meal.foodType[key]
      );
      const meetsAllergens = Object.keys(allergenFilters).every(
        (key) => !allergenFilters[key] || !meal.allergens[key]
      );
      return meetsPrice && meetsFoodType && meetsAllergens;
    });
    const categoryFiltered = applyCategoryFilter(
      filteredMeals,
      currentCategory
    );
    setCategoryFilteredMeals(filteredMeals);
    setFilteredMeals(categoryFiltered);
  }, [
    sliderValue,
    foodTypeFilters,
    allergenFilters,
    applyCategoryFilter,
    currentCategory,
  ]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  const handleFoodTypeChange = (type: keyof typeof foodTypeFilters) => {
    setFoodTypeFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const handleAllergenChange = (type: keyof typeof allergenFilters) => {
    setAllergenFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const handleResetFilters = () => {
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
    setFilteredMeals(mealDataArray);
    setCategoryFilteredMeals(mealDataArray);
    setCurrentCategory("All");
    setActiveCategoryIndex(0);
  };

  useEffect(() => {
    const categoryFiltered = applyCategoryFilter(
      categoryFilteredMeals,
      currentCategory
    );
    setFilteredMeals(categoryFiltered);
  }, [currentCategory, categoryFilteredMeals, applyCategoryFilter]);

  useEffect(() => {
    handleFilter();
  }, [sliderValue, foodTypeFilters, allergenFilters, handleFilter]);

  return (
    <div className="w-full flex flex-col min-h-[88vh]">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2 block md:hidden"
      >
        <CollapsibleTrigger className="w-full flex flex-row items-center justify-center">
          <p className="justify-center text-base font-bold">Fillters</p>
          <div className="justify-end ml-2">
            {isOpen == false ? (
              <FaChevronDown className="h-4 w-4" />
            ) : (
              <FaChevronUp className="h-4 w-4" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col">
          <div className="w-full flex flex-row h-[8vh] sticky top-[8vh] bg-black z-10 justify-end border-b-2">
            <FilterCategory
              onCategoryChange={handleCategoryChange}
              activeCategoryIndex={activeCategoryIndex}
            />{" "}
            <SwitchDisplay
              isListLayout={isListLayout}
              setIsListLayout={setIsListLayout}
              isGridLayout={isGridLayout}
              setIsGridLayout={setIsGridLayout}
            />
          </div>
          <FilterDetails
            meals={mealDataArray}
            onFilter={handleFilter}
            sliderValue={sliderValue}
            onSliderChange={handleSliderChange}
            foodTypeFilters={foodTypeFilters}
            onFoodTypeChange={handleFoodTypeChange}
            allergenFilters={allergenFilters}
            onAllergenChange={handleAllergenChange}
            onResetFilters={handleResetFilters}
          />
        </CollapsibleContent>
      </Collapsible>
      <div className="w-full hidden md:flex flex-row h-[8vh] sticky top-[8vh] bg-black z-10 justify-end border-b-2">
        <FilterCategory
          onCategoryChange={handleCategoryChange}
          activeCategoryIndex={activeCategoryIndex}
        />{" "}
        <SwitchDisplay
          isListLayout={isListLayout}
          setIsListLayout={setIsListLayout}
          isGridLayout={isGridLayout}
          setIsGridLayout={setIsGridLayout}
        />
      </div>
      <div className="flex flex-row min-h-[80vh] w-full">
        {filteredMeals.length > 0 ? (
          isListLayout ? (
            <DisplayList meals={filteredMeals} />
          ) : (
            <DisplayGrid meals={filteredMeals} />
          )
        ) : (
          <p className="text-center mt-4">
            We apologize, but we don{"'"}t have meals within those filters.
          </p>
        )}
        <div className="hidden md:flex">
          <FilterDetails
            meals={mealDataArray}
            onFilter={handleFilter}
            sliderValue={sliderValue}
            onSliderChange={handleSliderChange}
            foodTypeFilters={foodTypeFilters}
            onFoodTypeChange={handleFoodTypeChange}
            allergenFilters={allergenFilters}
            onAllergenChange={handleAllergenChange}
            onResetFilters={handleResetFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
