import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tune in",
  description:
    "Stay updated with real-time weather conditions and detailed forecasts with our intuitive weather dashboard. Get personalized weather alerts and plan your day with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
