 "use client";

import React, { useState } from "react";
import { mealData } from "../../data/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";


type CategoryType<T extends string> = T;
type FoodCategory = CategoryType<"pizza" | "salad" | "appetizer" | "all">;
const Category: FoodCategory[] = ["pizza", "salad", "appetizer"];

function Menu2() {
     
  const [foods, setFoods] = useState(mealData);
  const fillterCat = (category: FoodCategory) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };

  const CategoryButtons = [
    {
      setCat: () => setFoods(mealData),
      text: "All",
    },
    {
      setCat: () => fillterCat("appetizer"),
      text: "Appetizer",
    },
    {
      setCat: () => fillterCat("pizza"),
      text: "Pizza",
    },
    {
      setCat: () => fillterCat("salad"),
      text: "Salad",
    },
  ];

  return (
    <Card className="w-5/6 pb-5 border-0">
      <CardHeader className="gap-3">
        <CardTitle className="text-orange-500 font-bold text-3xl text-center">
          Our Meals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Card className="flex flex-col gap-10 w-full border-0">
          {Category.map((categoryName, index) => (
            <Card key={index} className="w-full border-0">
              <CardTitle className="capitalize pl-5 pb-2">{`${categoryName}s`}</CardTitle>
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-full pl-4"
              >
                <CarouselContent className="w-full ">
                  {foods
                    .filter((item) => item.category === categoryName)
                    .map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/4 hover:scale-105 ease-in-out duration-300 "
                      >
                        <Link href="/home" className="">
                          <Card
                            key={index}
                            className="w-full object-cover border-0"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="h-[200px] w-full rounded-xl"
                              width={800}
                              height={450}
                              quality={100}
                            />
                            <div className="flex flex-row justify-start items-center pt-3 px-1">
                              <p className=" text-white font-bold">
                                {item.price} -
                              </p>
                              <p className="font-bold pl-1">{item.name}</p>
                            </div>
                          </Card>
                        </Link>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Card>
          ))}
        </Card>
      </CardContent>
    </Card>
  );
};

export default Menu2;