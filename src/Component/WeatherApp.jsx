import axios from "axios";
import { useState, useEffect } from "react";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=018c6b65e54a4c2b9fe182923241201&q=${location}&days=3&aqi=yes&alerts=yes`
        );
        setWeatherData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 2000);
  }, [location]);

  const handeLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1Z3Cyxt/pexels-pixabay-209831.jpg)",
        }}
      >
        <div className="hero-content text-center">
          <div>
            <input
              className="input text-2xl input-bordered input-primary w-full max-w-xs"
              type="text"
              placeholder="Enter a city name"
              value={location}
              onChange={handeLocationChange}
            />
            {weatherData && (
              <div className="carousel rounded-box">
                {weatherData.forecast.forecastday.map((day) => (
                  <div className="p-20" key={day.date}>
                    <div className="border-double border-8 border-indigo-600 shadow-xl p-5">
                      <img
                        className="mx-40 w-20"
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                      />
                      <p className="text-white text-xl">
                        {" "}
                        {day.day.condition.text}
                      </p>
                      <div className="card w-96 bg-base-300 bg-opacity-60 p-20 shadow-xl">
                        <p className="p-2 text-6xl"> {day.day.avgtemp_c} °C</p>
                        <h2 className="p-2"> date: {day.date} </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
