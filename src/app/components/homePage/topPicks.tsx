"use client";

import { mealData } from "@/app/data/data";
import GenCarousel from "../generic/carousel";

function TopPicks() {
  const filteredMeals = mealData.filter(
    (mealItem) => mealItem.isTopPick === true
  );

  return (
    <div className="flex flex-col w-full">
      <GenCarousel title="TopPicks" meals={filteredMeals} />
    </div>
  );
}

export default TopPicks;
