import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";
import Cnsole from "./Component/Cnsole";

function App() {
  return (
    <>
      <div className="font-nunito">
        <Navbar />
        <WeatherApp />
        <Cnsole />
      </div>
    </>
  );
}

export default App;
