import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuDescription = [
  {
    title: "Starters:",
    description:
      "Easily browse and add a variety of products to your cart from our extensive catalog.",
  },
  {
    title: "Main Courses:",
    description:
      "Savor the heart of Italian cuisine with our main courses. From classic Margherita Pizza to creamy Spaghetti Carbonara, each dish is prepared with authentic ingredients and traditional recipes to transport you to Italy.",
  },
  {
    title: "Desserts",
    description:
      "End your meal on a sweet note with our irresistible desserts. Delight in the layers of Tiramisu, the smoothness of Panna Cotta, or the crunch of a Cannoli. Each dessert is a perfect conclusion to your dining experience.",
  },
  {
    title: "Hot drinks",
    description:
      "Warm up with our selection of hot drinks. Whether you prefer a strong Espresso, a frothy Cappuccino, or a soothing cup of tea, we have the perfect beverage to complement your meal.",
  },
  {
    title: "Soft drinks",
    description:
      "Refresh yourself with our variety of soft drinks. Choose from sparkling Italian sodas, zesty Limonata, or classic Cola. Our soft drinks are perfect for all ages and taste preferences.",
  },
];

const OurNewMenu = () => {
  return (
    <Card className="w-full flex flex-col items-center border-0">
      <CardHeader className="pt-0">
        <CardTitle className="text-orange-500 font-bold text-3xl text-center">
          Our New Menu
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-row items-center justify-between p-0 gap-10">
        <div className="w-1/3">
          <Image
          className="rounded-xl"
            src="/img/people-above.png"
            alt="people-above"
            width={450}
            height={800}
            quality={100}
          />
        </div>
        <Card className="w-2/3 flex flex-col justify-between border-0">
          <CardHeader className="pt-0">
            <CardTitle className="md:text-4xl sm:text-3xl text-2xl font-bold ">
              Limitless paradise of flavours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc">
              {MenuDescription.map((item, index) => {
                return (
                  <li key={index} className="pt-3">
                    <strong>{item.title}</strong> {item.description}
                  </li>
                );
              })}
            </ul>
          </CardContent>
          <CardFooter className="pb-0">
            <Link
              href="/home/menu"
            >
              <Button className="bg-orange-700 text-white hover:bg-white hover:text-orange-700 font-medium">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
};

export default OurNewMenu;
