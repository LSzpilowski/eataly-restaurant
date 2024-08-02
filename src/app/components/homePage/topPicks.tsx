"use client";

import React from "react";
import { mealData } from "@/app/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "react-bootstrap";
import ProductCard from "../menu/productCard";

type CategoryType<T extends string> = T;
type FoodCategory = CategoryType<"pizza" | "salad" | "appetizer" | "all">;
const Category: FoodCategory[] = ["pizza", "salad", "appetizer"];

function TopPicks() {
  return (
    <Card className="w-full border-0">
      <CardHeader className="pt-0">
        <CardTitle className="text-orange-500 font-bold text-3xl text-center">
          Top Picks
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="w-full ">
            {mealData
              .filter((item) => item.isTopPick === true)
              .map((meal, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto "
                >
                  <ProductCard
                    image={meal.image}
                    name={meal.name}
                    price={meal.price}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}

export default TopPicks;
