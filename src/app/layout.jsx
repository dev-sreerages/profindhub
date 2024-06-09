import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ProFindHub | Job Portal",
  description: "A new way to find your desired job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>
        {children}
      </body>
    </html>
  );
}
