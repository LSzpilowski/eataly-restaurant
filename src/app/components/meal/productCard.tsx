import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface IProductCardProps {
  image: string;
  name: string;
  price: string;
}

function ProductCard({image, name, price} : IProductCardProps) {
  return (
    <Card className="w-full object-cover border-0">
      <Image
        src={`/img${image}`}
        alt={name}
        className="h-[200px] w-[350px] object-cover rounded-xl"
        width={800}
        height={450}
        quality={100}
      />
      <div className="flex flex-row justify-start items-center pt-3 px-1">
        <p className=" text-white font-bold">{price} -</p>
        <p className="font-bold pl-1">{name}</p>
      </div>
    </Card>
  );
}

export default ProductCard;
