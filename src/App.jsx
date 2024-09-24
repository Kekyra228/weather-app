import React, { useState } from "react";
import { getCurrentWeather } from "./api/weatherApi";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import Details from "./components/details/Details";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getCurrentWeather(city);
      setWeatherData(data);
      setError(null);
      console.log(city);
    } catch {
      setError("Город не найден");
      setWeatherData(null);
    }
  };

  return (
    <div>
      {/* Компонент для поиска города */}
      <SearchBar onSearch={handleSearch} />

      {error && <p>{error}</p>}

      {/* Передача данных в Details */}
      {weatherData && <Details data={weatherData} />}
    </div>
  );
}

export default App;
