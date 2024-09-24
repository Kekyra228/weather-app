const API_KEY = "2771a7c4a5e962d53951a1041312e0b4";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return await response.json();
};

// Функция для получения прогноза на 5 дней
export const getWeatherForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return await response.json();
};
