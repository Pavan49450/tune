const { default: Image } = require("next/image");
const { useState } = require("react");

const Weather = ({ data }) => {
  const {
    location,
    date,
    temperature,
    condition,
    humidity,
    precipitation,
    wind,
  } = data;
  const [degree, setDegree] = useState("c");

  const toggleDegree = (unit) => () => {
    setDegree(unit);
  };

  let temperatureCelsius = temperature;
  let displayedTemperature =
    degree === "f" ? (temperatureCelsius * 9) / 5 + 32 : temperatureCelsius;

  return (
    <div className="max-w-lg  mx-auto border p-4 shadow bg-white overflow-hidden w-1/2">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="https://cdn.search.brave.com/serp/v2/_app/immutable/assets/03d.DP67Xt6Y.svg"
            alt="Weather icon"
            width={48}
            height={48}
          />
          <div className="text-4xl font-bold w-16">
            {Math.round(displayedTemperature)}°
          </div>
          <div className="text-sm text-gray-500">
            <span
              className={`cursor-pointer px-2 hover:bg-zinc-100 rounded-lg py-1 ${
                degree === "c" ? "text-black" : "text-zinc-300"
              }`}
              onClick={toggleDegree("c")}
            >
              C
            </span>
            <span>|</span>
            <span
              className={`cursor-pointer px-2 hover:bg-zinc-100 rounded-lg py-1 ${
                degree === "f" ? "text-black" : "text-zinc-300"
              }`}
              onClick={toggleDegree("f")}
            >
              F
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">{location}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="text-xl font-semibold">{condition}</div>
        <div className="text-sm text-gray-600">
          <div>Humidity: {humidity}%</div>
          <div>Precipitation: {precipitation}%</div>
          <div>Wind: {wind}</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
