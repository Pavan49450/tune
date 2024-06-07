"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/context/AuthProvider";
import Image from "next/image";

export default function Home() {
  return (
    <AuthProvider>
      <Header />
      <div className="App">
        <Dashboard />
      </div>
    </AuthProvider>
  );
}
