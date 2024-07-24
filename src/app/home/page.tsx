import Delivery from "../components/delivery";
import FoodSlider from "../components/foodSlider";
import TopPicks from "../components/topPicks";




export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-5">
      <FoodSlider />
      <Delivery />
      <TopPicks />
    </div>
  );
}
