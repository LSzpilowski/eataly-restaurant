"use client";

import { IMealData } from "@/app/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../menu/productCard";

interface IGenCarousel {
  title: string;
  meals: IMealData[];
}

function GenCarousel({ title, meals }: IGenCarousel) {
  return (
    <Card className="w-full border-0">
      <CardHeader className="pt-0 pb-2 md:pb-5">
        <CardTitle className="text-orange-500 font-bold text-xl md:text-3xl text-center first-letter:capitalize">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 py-0">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="w-full ">
            {meals.map((meal, index) => (
              <CarouselItem key={index} className="basis-auto overflow-x-hidden">
                <ProductCard
                  image={meal.image}
                  name={meal.name}
                  price={meal.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </CardContent>
    </Card>
  );
}

export default GenCarousel;
