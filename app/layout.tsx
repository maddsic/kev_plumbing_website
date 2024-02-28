import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: {
      default: "Dunedin",
      template: "%s - Dunedin Plumbing & Heating",
   },
   description: "Welcome to Dunedin Plumbing and Heating",
   twitter: {
      card: "summary_large_image",
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            {children}
            <SpeedInsights />
         </body>
      </html>
   );
}
