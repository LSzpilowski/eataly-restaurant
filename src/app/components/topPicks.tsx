"use client";

import React from "react";
import {  topPicks } from "../data/data";
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

const topPick = topPicks;


  function TopPicks () {
  return (
    <Card className="w-5/6  border-0">
      <CardHeader className="pt-0">
        <CardTitle className="text-orange-500 font-bold text-3xl text-center">
          Top Picks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Card className="flex flex-col gap-10 w-full border-0">
            <Card className="w-full border-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-full"
              >
                <CarouselContent className="w-full ">
                   {topPick.map((pick, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-auto opacity-70 hover:opacity-100 ease-in-out duration-300 "
                      >
                        <Link href="/home" className="">
                          <Card
                            className="w-full object-cover border-0"
                          >
                            <Image
                              src={pick.img}
                              alt={pick.title}
                              className="h-[200px] w-full rounded-xl"
                              width={800}
                              height={450}
                              quality={100}
                            />
                            <div className="flex flex-row justify-start items-center pt-3 px-1">
                              <p className=" text-white font-bold">
                                {pick.price} -
                              </p>
                              <p className="font-bold pl-1">{pick.title}</p>
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
        </Card>
      </CardContent>
    </Card>
  )
}

export default TopPicks;
