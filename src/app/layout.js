import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Benson Ibeabuchi",
  description: "Benson Ibeabuchi Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f4f4f4] font-[poppins] transition-all">
        <div className="max-w-7xl mx-auto bg-[#f4f4f4]">{children}</div>
      </body>
    </html>
  );
}
