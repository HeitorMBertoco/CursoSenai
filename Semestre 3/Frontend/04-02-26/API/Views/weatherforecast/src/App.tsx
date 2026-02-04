import { useEffect, useState } from "react";
import { Weather } from "./types/weather";

function App() {
  const [weatherData, setWeatherData] = useState<Weather[]>([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch("http://localhost:5139/weatherforecast/");
      const data: Weather[] = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="root">
      <h1>Weather Forecast</h1>

      {weatherData.map((item, index) => (
        <div className="Container" key={index}>
          <h3>{item.date}</h3>
          <p>
            Temperature: {item.temperatureC} °C / {item.temperatureF} °F
          </p>
          <p>Summary: {item.summary}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
