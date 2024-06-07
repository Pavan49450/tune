import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create a custom marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const dummyWeatherData = [
  {
    id: 1,
    name: "Hyderabad",
    coord: { lat: 17.385, lon: 78.4867 },
    main: { temp: 30, humidity: 60 },
    weather: [{ description: "Sunny" }],
  },
  {
    id: 2,
    name: "Mumbai",
    coord: { lat: 19.076, lon: 72.8777 },
    main: { temp: 28, humidity: 70 },
    weather: [{ description: "Partly Cloudy" }],
  },
  // Add more dummy data as needed
];

const WeatherMap = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 justify-around">
      <h2 className="text-xl font-semibold mb-2">Interactive Weather Map</h2>
      <div className="h-64 my-auto">
        <MapContainer center={[20, 78]} zoom={5} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {dummyWeatherData.map((weather) => (
            <Marker
              key={weather.id}
              position={[weather.coord.lat, weather.coord.lon]}
            >
              <Popup>
                <div>
                  <h3>{weather.name}</h3>
                  <p>Temperature: {weather.main.temp}°C</p>
                  <p>Weather: {weather.weather[0].description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
