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
    <Button className="max-w-[262px] md:max-w-[350px] h-full p-0 md:mr-2 border-0 rounded-2xl opacity-100 hover:opacity-80 ease-in-out duration-300">
      <Card className="object-cover border-0 h-full rounded-lg p-0 m-0">
        <div className="w-44 h-28  md:w-[250px] md:h-[250px] overflow-hidden">
          <Image
            src={`/img${image}`}
            alt={name}
            className="object-cover rounded-lg w-full h-full"
            width={800}
            height={450}
            quality={100}
          />
        </div>
        <div className="flex flex-row justify-center md:justify-start items-center pt-1 md:pt-3 md:px-1 text-xs md:text-sm">
          <p className=" text-white font-bold hidden md:block">{price} -</p>
          <p className="font-bold">{name}</p>
        </div>
      </Card>
    </Button>
  );
}

export default ProductCard;
