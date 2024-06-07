import React from "react";
import formatDate from "@/hooks/formatDate";

const TravelRecommendations = ({ weather }) => {
  // Function to generate travel recommendations based on weather
  const generateRecommendations = (weather) => {
    if (weather === "Sunny") {
      return "Sunny days ahead! Pack your sunglasses and sunscreen.";
    } else if (weather === "Rainy") {
      return "Rainy weather forecasted. Don't forget your umbrella and raincoat.";
    } else if (weather === "Cloudy") {
      return "Cloudy skies expected. Bring a light jacket.";
    } else {
      return "Weather conditions might vary. Pack accordingly.";
    }
  };

  // Dummy weather data
  const dummyWeather = [
    { date: "2024-06-01", weather: "Sunny" },
    { date: "2024-06-02", weather: "Rainy" },
    { date: "2024-06-03", weather: "Cloudy" },
    { date: "2024-06-04", weather: "Unknown" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Travel Recommendations</h2>
      {dummyWeather.map((data, index) => (
        <div key={index} className="mb-6 bg-zinc-200 p-2 rounded-lg">
          <p className="text-sm text-end font-semibold mb-1">
            {formatDate(data.date).date}
          </p>
          <p className="text-gray-600">
            {generateRecommendations(data.weather)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TravelRecommendations;
