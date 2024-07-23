import React, { useState } from "react";
import { mealData } from "../data/data";


const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const fillterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };



  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meals
      </h1>
      <div className="flex flex-coll lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center mb-4">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => fillterCat("appetizer")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Appetizer
          </button>
          <button
            onClick={() => fillterCat("pizza")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => fillterCat("salad")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl max-h-[200px] w-full py-2">
        {foods.map((item) => {
          return (
            <div className="border-none w-full object-cover rounded-3xl text-indigo-600">
              <img
                src={item.image}
                alt={item.name}
                className="h-[200px] w-full rounded-xl"
              />
              <div className="flex justify-between py-2 px-4">
                <a href="/" className="font-bold">{item.name}</a>
                <p className="bg-orange-700 h-18 w-18 rounded-full -mt-12 text-white py-3.5 px-2 border-8 border-white font-bold">
                  {item.price}
                </p>
              </div>
              <div className="pl-4 -mt-2 mb-3 cursor-pointer flex"
              >
                {/* <p className="flex items-center text-indigo-600">
                  More Details{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
