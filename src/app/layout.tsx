import { Playfair_Display, Lato } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Αφαιρέσαμε το "greek" από εδώ, κρατήσαμε μόνο το "latin"
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"], // Αφαιρέσαμε το "greek" και από εδώ
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Olive Yard by Marinos | Authentic Zakynthian Products",
  description: "Discover authentic local products, traditional ceramics, and extra virgin olive oil from Zakynthos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-ivory text-earth-900">
        <Header />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}