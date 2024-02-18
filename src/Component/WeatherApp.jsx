import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function WeatherApp() {
  const [location, setLocation] = useState("");

  const fetchData = useQuery(
    [],
    () => {
      return fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API
        }&q=${location}&days=3&aqi=yes&alerts=yes`
      ).then((response) => response.json());
    },
    {
      enabled: false,
    }
  );

  const { data, isLoading, refetch } = fetchData;
  console.log(fetchData, "fetchData");

  const handeLocationChange = (event) => {
    setLocation(event.target.value);
  };

  if (isLoading) {
    return (
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1Z3Cyxt/pexels-pixabay-209831.jpg)",
        }}
      >
        <div className="hero-content text-center text-white text-9xl">
          Loading...
        </div>
      </div>
    );
  }

  if (data && data.error) {
    return (
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1Z3Cyxt/pexels-pixabay-209831.jpg)",
        }}
      >
        <div className="hero-content text-center">
          <div>
            :<p className="text-white text-3xl">An Error Occurred</p>
            <hr />
            <p className="text-white text-3xl">Cause : {data.error.message}</p>
          </div>
        </div>
      </div>
    );
  }

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
            <button
              className="btn btn-outline btn-white text-white m-3"
              onClick={() => refetch()}
            >
              SEARCH
            </button>

            {data && (
              <div className="card text-white text-xl mx-auto w-96 bg-base-300 bg-opacity-60 p-10 shadow-xl">
                <h1>
                  {" "}
                  {data.location.name} / {data.location.country}
                </h1>
              </div>
            )}

            {data && (
              <div className="carousel rounded-box">
                {data.forecast.forecastday.map((day) => (
                  <div className="p-20" key={uuidv4()}>
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
