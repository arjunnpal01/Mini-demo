import "./globals.css";
import SaleBanner from "./Eservice/page";
import BestsellerSection from "./Eservice/Sservice/page";
import Lservice from "./Lservice/page";


export const metadata = {
  title: "UrbanX Services",
  description: "Find local professionals for any home service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>       
        {children}
        <SaleBanner/>
        <BestsellerSection/>
        <Lservice/>
        </body>
    </html>
  );
}
