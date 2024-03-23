import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className="font-nunito">
        <Navbar />
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
