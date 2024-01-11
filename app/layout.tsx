import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Provider from "../Providers/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "300", "700", "900"],
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
      <body className={`${lato.className} font-[400]`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
