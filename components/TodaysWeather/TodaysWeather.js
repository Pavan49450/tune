"use client";

import { useEffect, useState } from "react";
import Weather from "./Weather";
import WeatherGraph from "./WeatherGraph";
import { useRouter } from "next/navigation";
import GetCurrentDate from "@/hooks/GetCurrentData";
import formatDate from "@/hooks/formatDate";
import { useAuth } from "../../context/AuthProvider";
import ShareWeatherInfo from "./ShareWeatherInfo";
import WeatherInfoForm from "./WeatherInfoForm/WeatherInfoForm";

const TodaysWeather = () => {
  const { userLoggedIn, isEmailUser, isGoogleUser, currentUser } = useAuth();
  useEffect(() => {
    // if(!Auth.user){
    //   // router.push("/signin");
    //   }
    console.log(userLoggedIn);
  });

  const weatherData = {
    location: "Hyderabad, IN",
    date: formatDate(GetCurrentDate()).date,
    temperature: 29,
    condition: "Scattered clouds",
    humidity: 70,
    precipitation: 73,
    wind: "5.14 KpH",
  };

  return (
    <div className="w-full bg-white rounded-lg sm:p-4 p-2 ">
      <div className="flex py-12 flex-col lg:flex-row gap-4">
        <Weather data={weatherData} />
        {userLoggedIn ? <WeatherInfoForm /> : <ShareWeatherInfo />}
      </div>
      <WeatherGraph />
    </div>
  );
};

export default TodaysWeather;
