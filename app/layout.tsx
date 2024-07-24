import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Bodoni_Moda } from "next/font/google";
import Provider from "../Providers/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  // weight: ["100", "400", "300", "700", "900"],
});

const bodo = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodo",
});

export const metadata: Metadata = {
  title: "Welcome - ACCE",
  description: "Al-Ansar Center for Comprehensive Education, Gwarimpa, Abuja",
  icons: {
    icon: "/acceIcon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${bodo.variable} font-[400] text-base lg:text-xl flex flex-col min-h-screen`}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
