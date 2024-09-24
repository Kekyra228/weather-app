import styled from "styled-components";

export const WeatherDayCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 180px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const WeatherDate = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const WeatherInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;

  span {
    font-weight: bold;
  }
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px 0;
`;
