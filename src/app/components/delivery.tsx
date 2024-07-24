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

const AppDescription = [
  {
    title: "Add Products to Cart:",
    description:
      "Easily browse and add a variety of products to your cart from our extensive catalog.",
  },
  {
    title: "Creative Ideas:",
    description:
      "Receive personalized ideas and recommendations based on the products you add to your cart.",
  },
  {
    title: "Buy Products:",
    description:
      "Purchase the products directly within the app with a seamless and secure checkout process.",
  },
  {
    title: "Free Delivery:",
    description:
      "Enjoy free delivery on all orders over £25, ensuring you get your items quickly and without extra cost.",
  },
  {
    title: "Restaurant Orders:",
    description:
      "Order delicious food from a wide selection of local restaurants listed in the app.",
  },
  {
    title: "Convenient:",
    description:
      "Experience the convenience of having groceries and restaurant meals delivered straight to your doorstep.",
  },
];

const Delivery = () => {
  return (
    <Card className="w-full flex flex-col items-center border-0">
      <CardHeader>
        <CardTitle className="text-orange-500 font-bold text-3xl text-center">
          Quick Delivery App
        </CardTitle>
      </CardHeader>
      <CardContent className="w-2/3 flex flex-row px-10 items-center gap-10  ">
        <Link
          className="w-2/5 mx-auto hover:scale-105 duration-300"
          target="_blank"
          href="https://www.ubereats.com/be-en/brand/quick"
        >
          <Image
            alt="Phone Photos"
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
            width={800}
            height={450}
            quality={100}
          />
        </Link>
        <Card className="w-3/5 flex flex-col justify-between border-0">
          <CardHeader>
            <CardTitle className="md:text-4xl sm:text-3xl text-2xl font-bold ">
              Limitless Convenience on-demand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ">
              {AppDescription.map((item, index) => {
                return (
                  <li key={index}>
                    <strong>{item.title}</strong> {item.description}
                  </li>
                );
              })}
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              target="_blank"
              href="https://www.ubereats.com/be-en/brand/quick"
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

export default Delivery;
