"use client";

import { useState, useEffect, useCallback } from "react";
import DisplayGrid from "@/app/components/menu/displayGrid";
import FilterCategory from "@/app/components/menu/filterCategory";
import FilterDetails from "@/app/components/menu/filterDetails";
import { mealData as mealDataArray, IMealData } from "@/app/data/data";
import DisplayList from "@/app/components/menu/displayList";
import SwitchDisplay from "@/app/components/menu/switchDisplay";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

function MenuPage() {
  const [categoryFilteredMeals, setCategoryFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [filteredMeals, setFilteredMeals] =
    useState<IMealData[]>(mealDataArray);
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [isListLayout, setIsListLayout] = useState<boolean>(true);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

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
            <FilterCategory onCategoryChange={handleCategoryChange} />{" "}
            <SwitchDisplay
              isListLayout={isListLayout}
              setIsListLayout={setIsListLayout}
              isGridLayout={isGridLayout}
              setIsGridLayout={setIsGridLayout}
            />
          </div>
          <FilterDetails meals={mealDataArray} onFilter={handleFilter} />
        </CollapsibleContent>
      </Collapsible>
      <div className="w-full hidden md:flex flex-row h-[8vh] sticky top-[8vh] bg-black z-10 justify-end border-b-2">
        <FilterCategory onCategoryChange={handleCategoryChange} />{" "}
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
          <FilterDetails meals={mealDataArray} onFilter={handleFilter} />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
