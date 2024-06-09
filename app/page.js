"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/context/AuthProvider";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Tune in | Weather dashboard";
  }, []);

  return (
    <>
      {/* <Head>
        <title>Weather Dashboard</title>
        <meta
          name="description"
          content="Stay updated with real-time weather conditions and detailed forecasts with our intuitive weather dashboard. Get personalized weather alerts and plan your day with confidence."
        />
      </Head> */}
      <AuthProvider>
        <Header />
        <div className="App">
          <Dashboard />
        </div>
      </AuthProvider>
    </>
  );
}
