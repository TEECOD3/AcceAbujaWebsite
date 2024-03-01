import "./globals.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Provider from "../Providers/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  // weight: ["100", "400", "300", "700", "900"],
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
      <body className={`${syne.className} font-[400] text-base lg:text-xl`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
