import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Benson Ibeabuchi",
  description: "Benson Ibeabuchi Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5444473500763929"
     crossorigin="anonymous"></script>
      </Head>
      <body className={poppins.className}>
        <div className="bg-[#f4f4f4] transition-all">
          <div className="max-w-7xl mx-auto bg-[#f4f4f4]">{children}</div>
        </div>
      </body>
    </html>
  );
}
