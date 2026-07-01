import "./globals.css";
import MainHeader from "../components/mainHeader";

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
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
