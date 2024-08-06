import FoodSlider from "../components/homePage/foodSlider";
import OurNewMenu from "../components/homePage/ourNewMenu";
import TopPicks from "../components/homePage/topPicks";

 function HomePage() {
  return (
    <div className="w-full md:w-3/4 flex flex-col items-center gap-16 py-10">
      <FoodSlider />
      <OurNewMenu />
      <TopPicks />
    </div>
  );
}

export default HomePage;