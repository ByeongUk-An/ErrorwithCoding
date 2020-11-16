import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [lati, setLati] = useState(null);
  const [longi, setLongi] = useState(null);
  const [weat, setWeat] = useState(null);
  const [area, setArea] = useState("");
  const [ondo, setOndo] = useState(null);
  const [nalssi, setNalssi] = useState("");
  navigator.geolocation.getCurrentPosition((pos) => {
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    setLati(latitude);
    setLongi(longitude);
  });
  const API_KEYS = "dd54ee754e5701ed8b53c680d8810f97";

  const getWeather = async () => {
    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEYS}`
      );

      setArea(weather.data.name);
      setOndo(Math.floor(weather.data.main.temp - 273.15));
      setNalssi(weather.data.weather[0].description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (lati !== null && longi !== null) {
      console.log("aeffa");
      getWeather();
    }
  }, [lati, longi]);

  return (
    <>
      <ul>
        <li>현재위치:{area}</li>
        <li>날씨:{nalssi}</li>
        <li>온도:{ondo}도</li>
        <li>위도:{lati ? lati : "요청중"}</li>
        <li>경도:{longi ? longi : "요청중"}</li>
      </ul>
    </>
  );
}

export default App;
