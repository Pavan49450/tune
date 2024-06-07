import React from "react";
import WeatherAlert from "./WeatherAlert";
import WeatherMap from "./WeatherMap";
import HistoricalWeather from "./HistoricalWeather";
import TravelRecommendations from "./TravelRecommendations";
import TodaysWeather from "../TodaysWeather/TodaysWeather";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-100 p-4 flex flex-col gap-4">
      <header className="text-2xl font-bold text-center">
        Weather Dashboard
      </header>
      <TodaysWeather />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        <WeatherAlert />
        <WeatherMap />
        <HistoricalWeather />
        <TravelRecommendations />
      </div>
    </div>
  );
};

export default Dashboard;
