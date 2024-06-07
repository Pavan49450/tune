import { useAuth } from "@/context/AuthProvider";
import { auth, db } from "@/firebaseConfig/firebaseConfig";
import formatDate from "@/hooks/formatDate";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const WeatherAlert = () => {
  const { currentUser } = useAuth();
  const [alerts, setAlerts] = useState();
  // const docRef = doc(db, "weatherInfo");

  useEffect(() => {
    const getWeatherAlerts = async () => {
      const querySnapshot = await getDocs(collection(db, "weatherInfo"));
      let alertsArray = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        // return doc.data();
        alertsArray.push(doc.data());
      });

      setAlerts(alertsArray);
    };
    getWeatherAlerts();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 p-2">
        Weather Alerts from tune users
      </h2>
      {alerts && alerts.length > 0 ? (
        <AlertTable alerts={alerts} />
      ) : (
        <p>No alerts at this time.</p>
      )}
    </div>
  );
};

export default WeatherAlert;

const AlertTable = ({ alerts }) => {
  return (
    <div className="overflow-auto max-h-96">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Place</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Alert</th>
          </tr>
        </thead>
        <tbody>
          {alerts &&
            alerts.map((alert, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{alert.place}</td>
                <td className="py-2 px-4 border-b text-center">{alert.name}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(alert.date.seconds * 1000).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {alert.alert}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
