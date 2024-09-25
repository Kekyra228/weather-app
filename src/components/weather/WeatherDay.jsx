import PropTypes from "prop-types";
import React from "react";
import { WeatherDate, WeatherDayCard } from "./WeatherDay.styled";
import { formatDate } from "../../utils";

const WeatherDay = ({ data }) => {
  const date = formatDate(data.dt_txt);
  return (
    <WeatherDayCard>
      <WeatherDate>{date}</WeatherDate>
      <p>Температура: {data.main.temp}°C</p>
      <p>Влажность: {data.main.humidity}%</p>
      <p>Скорость ветра: {data.wind.speed} м/с</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p>{data.weather[0].description}</p>
    </WeatherDayCard>
  );
};

WeatherDay.propTypes = {
  data: PropTypes.shape({
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default WeatherDay;
