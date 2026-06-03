import { pb } from "./pb.mjs";

export async function getWeather(userId) {

  const user = await pb.collection("users").getOne(userId);

  if (!user.city) {
    throw new Error("Aucune ville renseignée");
  }

  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(user.city)}&count=1&language=fr&format=json`
  );

  const geoData = await geoResponse.json();

  if (!geoData.results?.length) {
    throw new Error("Ville introuvable");
  }

  const cityData = geoData.results[0];

  const latitude = cityData.latitude;
  const longitude = cityData.longitude;

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&timezone=auto`
  );

  const weatherData = await weatherResponse.json();

  const weatherCode = weatherData.current.weather_code;

  // =========================
  // ✅ VERSION PROPRE (DICO)
  // =========================

  const weatherTypeMap = {
    soleil: [0],
    nuage: [1, 2, 3],
    pluie: [51, 53, 55, 61, 63, 65, 80, 81, 82],
    neige: [71, 73, 75, 77, 85, 86],
    orage: [95, 96, 99]
  };

  const weatherEmojiMap = {
    soleil: "☀️",
    nuage: "☁️",
    pluie: "🌧️",
    neige: "❄️",
    orage: "⛈️"
  };

  function getWeatherType(code) {
    return Object.keys(weatherTypeMap).find(type =>
      weatherTypeMap[type].includes(code)
    ) || "nuage";
  }

  function getWeatherEmoji(code) {
    const type = getWeatherType(code);
    return weatherEmojiMap[type] || "☁️";
  }

  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const forecast = weatherData.daily.time.map((date, index) => {

    const dayDate = new Date(date);
    const code = weatherData.daily.weather_code[index];

    return {
      day: days[dayDate.getDay()],
      temp: Math.round(weatherData.daily.temperature_2m_max[index]),
      icon: getWeatherEmoji(code)
    };
  });

  return {
    city: cityData.name,
    temperature: weatherData.current.temperature_2m,
    feelsLike: weatherData.current.apparent_temperature,
    humidity: weatherData.current.relative_humidity_2m,
    wind: weatherData.current.wind_speed_10m,
    icon: getWeatherEmoji(weatherCode),
    forecast
  };
}