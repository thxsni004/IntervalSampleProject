// src/api/weatherAPI.js

import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Reusable weather fetch function
export const fetchWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units-metric`);
  return response.data;
};
