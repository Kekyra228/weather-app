import React, { useState } from "react";
import { getCurrentWeather, getWeatherForecast } from "./api/weatherApi";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import Details from "./components/details/Details";
import WeatherList from "./components/weather/WeatherList";
import {
  AppWrapper,
  Contain,
  ErrorMessage,
  Title,
  Wrapper,
} from "./App.styled";

const getBackgroundColor = (weatherType) => {
  switch (weatherType) {
    case "Clear":
      return "#87CEEB"; // Ясная погода — небесно-голубой
    case "Clouds":
      return "#B0C4DE"; // Облачная погода — светло-серый
    case "Rain":
      return "#4682B4"; // Дождливая погода — стальной синий
    case "Thunderstorm":
      return "#708090"; // Гроза — серый
    case "Snow":
      return "#FFFAFA"; // Снег — почти белый цвет
    case "Mist":
    case "Fog":
      return "#778899"; // Туман — темно-серый
    default:
      return "#87CEEB"; // По умолчанию — небесно-голубой
  }
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weekData, setWeektData] = useState(null); // Данные прогноза на 5 дней

  const handleSearch = async (city) => {
    try {
      const currentData = await getCurrentWeather(city);
      const week = await getWeatherForecast(city);
      setError(null);
      setWeatherData(currentData);
      setWeektData(week);
      console.log(city);
    } catch {
      setError("Город не найден");
      setWeatherData(null);
      setWeektData(null);
    }
  };

  const weatherType = weatherData?.weather?.[0]?.main || null;

  const bgColor = getBackgroundColor(weatherType); // Получаем цвет фона
  console.log("weatherType:", weatherType); // Для отладки
  console.log("weatherData:", weatherData); // Для отладки

  return (
    <AppWrapper bgColor={bgColor}>
      <Contain>
        <Title>Прогноз Погоды</Title>
        {/* Компонент для поиска города */}
        <SearchBar onSearch={handleSearch} />
      </Contain>

      <Wrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {/* Передача данных в Details */}
        {weatherData && <Details data={weatherData} />}
        {weekData && <WeatherList data={weekData.list} />}
      </Wrapper>
    </AppWrapper>
  );
}

export default App;
