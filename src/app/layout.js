// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "animate.css";
import dynamic from "next/dynamic";

// Import Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import Header and Footer normally
import Header from "./Component/Header/Header";
import Footer from "./Component/Header/Footer";

// Dynamically load Bootstrap JS only on the client side
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}

export const metadata = {
  title: "Docandeed",
  description: "Online documentation service platform for properties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
