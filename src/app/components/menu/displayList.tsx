import { IMealData } from '@/app/data/data';
import GenCarousel from '../generic/carousel';

interface DisplayListProps {
  meals: IMealData[];
}

type TFoodCategory = string[];

const FoodCategory: TFoodCategory = ["appetizers", "main courses", "desserts", "hot drinks", "soft drinks"];

function DisplayList({ meals}: DisplayListProps) {
  return (
      <div className='w-full md:w-4/5  md:px-16 pt-5 border-r-2 '>
       {FoodCategory.map((category, categoryIndex) => {
        const filteredMeals = meals.filter((mealItem) => mealItem.category === category);

        return filteredMeals.length > 0 ? (
          <div key={categoryIndex} className='flex flex-col w-full gap-5 mb-5 md:mb-10'>
            <GenCarousel title={category} meals={filteredMeals}/>
          </div>
        ) : null;
      })}
    </div>
  )
}

export default DisplayList;
