import { Gabarito, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "RoseAnimeList",
  description: "Website Anime Ala Rose",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
