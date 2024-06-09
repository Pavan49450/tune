import React from "react";
// import WeatherAlert from "../TodaysWeather/WeatherAlert";
// import WeatherMap from "./WeatherMap";
import HistoricalWeather from "./HistoricalWeather";
import TravelRecommendations from "./TravelRecommendations";
import TodaysWeather from "../TodaysWeather/TodaysWeather";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-100 p-0 pt-6 sm:p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Weather Dashboard</h2>
      <TodaysWeather />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {/* <WeatherAlert /> */}
        <HistoricalWeather />
        <TravelRecommendations />
        {/* <WeatherMap /> */}
      </div>
    </div>
  );
};

export default Dashboard;
