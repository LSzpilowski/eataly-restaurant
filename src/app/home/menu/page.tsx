"use client";

import { useState, useEffect, useCallback } from "react";
import DisplayGrid from "@/app/components/menu/displayGrid";
import FilterCategory from "@/app/components/menu/filterCategory";
import FilterDetails from "@/app/components/menu/filterDetails";
import { mealData as mealDataArray, IMealData } from "@/app/data/data";
import DisplayList from "@/app/components/menu/displayList";
import SwitchDisplay from "@/app/components/menu/switchDisplay";

function MenuPage() {
  const [categoryFilteredMeals, setCategoryFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [filteredMeals, setFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [isListLayout, setIsListLayout] = useState<boolean>(false);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(true);

  const applyCategoryFilter = useCallback(
    (meals: IMealData[], category: string) => {
      if (category === "All") {
        return meals;
      }
      return meals.filter((meal) => meal.category === category);
    },
    []
  );

  const handleCategoryChange = useCallback((category: string) => {
    setCurrentCategory(category);
  }, []);

  const handleFilter = useCallback(
    (filteredData: IMealData[]) => {
      const categoryFiltered = applyCategoryFilter(
        filteredData,
        currentCategory
      );
      setFilteredMeals(categoryFiltered);
      setCategoryFilteredMeals(filteredData);
    },
    [applyCategoryFilter, currentCategory]
  );

  useEffect(() => {
    const categoryFiltered = applyCategoryFilter(
      categoryFilteredMeals,
      currentCategory
    );
    setFilteredMeals(categoryFiltered);
  }, [currentCategory, categoryFilteredMeals, applyCategoryFilter]);

  return (
    <div className="w-full flex flex-col  custom-min-height ">
      <div className="w-full flex flex-row sticky top-[79px] bg-black z-50">
          <div className="w-full flex flex-row justify-end border-b-2 py-1">
        <FilterCategory onCategoryChange={handleCategoryChange} />{" "}
        <SwitchDisplay
          isListLayout={isListLayout}
          setIsListLayout={setIsListLayout}
          isGridLayout={isGridLayout}
          setIsGridLayout={setIsGridLayout}
        />
        </div>
      </div>
      <FilterDetails meals={mealDataArray} onFilter={handleFilter} />

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
    </div>
  );
}

export default MenuPage;
