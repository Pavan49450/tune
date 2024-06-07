import React from "react";

const HistoricalWeather = () => {
  // Dummy historical weather data with extreme conditions
  const historicalData = [
    {
      date: "2024-06-08",
      temperature: 33,
      precipitation: 0,
      windSpeed: 18,
      pressure: 1005,
      description: "Heatwave with extreme temperatures",
    },
    {
      date: "2024-06-09",
      temperature: 29,
      precipitation: 0,
      windSpeed: 20,
      pressure: 1003,
      description: "Severe thunderstorm with heavy rainfall",
    },
    {
      date: "2024-06-10",
      temperature: 26,
      precipitation: 0,
      windSpeed: 15,
      pressure: 1008,
      description: "Tropical cyclone approaching, windy with heavy rain",
    },
  ];

  const WeatherCard = ({
    date,
    temperature,
    precipitation,
    windSpeed,
    pressure,
    description,
  }) => (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-2">{date}</h3>
        <span className="text-gray-600"> {temperature}°C</span>
      </div>
      <p className="text-gray-600">Precipitation: {precipitation}mm</p>
      <p className="text-gray-600">Wind Speed: {windSpeed} km/h</p>
      <p className="text-gray-600">Pressure: {pressure} mb</p>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Historical Weather Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {historicalData.map((data, index) => (
          <WeatherCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default HistoricalWeather;
