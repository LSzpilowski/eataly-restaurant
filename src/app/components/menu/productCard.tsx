import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IProductCardProps {
  image: string;
  name: string;
  price: string;
}

function ProductCard({ image, name, price }: IProductCardProps) {
  return (
    <Button className="max-w-[350px] h-full p-0 m-0 border-0 rounded-2xl opacity-100 hover:opacity-80 ease-in-out duration-300">
      <Card className="object-cover border-0 h-full rounded-lg">
        <Image
          src={`/img${image}`}
          alt={name}
          className="h-[200px] object-cover rounded-lg"
          width={800}
          height={450}
          quality={100}
        />
        <div className="flex flex-row justify-start items-center pt-3 px-1">
          <p className=" text-white font-bold">{price} -</p>
          <p className="font-bold pl-1">{name}</p>
        </div>
      </Card>
    </Button>
  );
}

export default ProductCard;
