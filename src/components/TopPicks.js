import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPics = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide options={{ perPage: 4, gap: "0.2rem", drag: "free" }}>
          {topPicks.map((item) => {
            return (
              <SplideSlide>
                <div className="relative rounded-3xl">
                  <div className="absolute w-full h-full bg-black/30 hover:bg-black/10 rounded-3xl ">
                    <p className="px-2 text-white font-bold text-xl mt-2 mx-2">
                      {item.title}
                    </p>
                    <p className="px-2 text-white text-bold text-l mx-2">
                      {item.price}
                    </p>
                    <div className="flex flex-col items-center justify-center">
                      <button className="content-center border-dotted border-white text-white absolute bottom-4 text-xl hover:bg-orange-700 hover:text-2xl ease-in-out duration-300 text-bold">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={item.img}
                    alt="Top Picks"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPics;
