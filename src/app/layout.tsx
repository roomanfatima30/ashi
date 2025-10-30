import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-200">
        <div className="text-center py-4 text-2xl font-semibold text-pink-600">
          🌸🌼 Welcome to My Beautiful Portfolio 🌼🌸
        </div>

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />

        <div className="text-center py-2 text-pink-500 text-sm">
          🌷 Made with love and creativity 🌷
        </div>
      </body>
    </html>
  );
}
