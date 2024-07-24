"use client"

import React, {useState} from 'react'
import { mealData } from '../data/data';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'lucide-react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

type CategoryType<T extends string> = T;
type FoodCategory = CategoryType<"pizza" | "salad" | "appetizer" | "all">;
const Category: FoodCategory[] = ["pizza", "salad", "appetizer"];


// Create a sidetable which will be fixed, will have checkBoxes instead of those Buttons, but will do the same, display Menu data dependable on what's checked


const Menu = () => {
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
    <div>
      <div className="flex flex-row justify-center gap-3 w-1/3 ">
            {CategoryButtons.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={item.setCat}
                  className="text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
                >
                  {item.text}
                </Button>
              );
            })}
          </div>
      <CardContent className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl w-full py-2">
        {foods.map((item, index) => {
          return (
            <>
              <Link
                href="/home"
                className="hover:scale-105 ease-in-out duration-300"
              >
                <Card key={index} className="w-full object-cover border-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-[200px] w-full rounded-xl"
                    width={800}
                    height={450}
                    quality={100}
                  />
                  <div className="flex flex-row justify-between items-center pt-3 px-1">
                    <div className="flex justify-left">
                      <p className=" text-white font-bold">{item.price} -</p>
                      <p className="font-bold pl-1">{item.name}</p>
                    </div>
                    <div>
                      <p className="opacity-90 text-sm">{`#${item.category}`}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </>
          );
        })}
      </CardContent>
    </div>
  )
}

export default Menu