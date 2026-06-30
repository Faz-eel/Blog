import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "../components/mainHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "My Blog",
    template: "My Blog: %s",
  },
  description: "Fazil Yiah's personal blog site",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
