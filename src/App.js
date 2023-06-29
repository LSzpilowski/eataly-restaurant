import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPics from "./components/TopPicks";
import Meal from "./components/Meal";



function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPics />
      <Meal />
    </div>
  );
}

export default App;
