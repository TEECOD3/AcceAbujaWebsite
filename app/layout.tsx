import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Provider from "../Providers/providers";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "700", "900"],
});

export const metadata: Metadata = {
  title: "Welcome - ACCE",
  description: "Website for ACCE ABUJA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
