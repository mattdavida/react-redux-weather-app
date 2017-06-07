import axios from "axios";

const API_KEY = "96e36fac9234b4f28cb3bfa58c83e8c6";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&cnt=16&appid=${API_KEY}`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
