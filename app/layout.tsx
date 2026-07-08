import type { Metadata } from "next";
import { Literata, Albert_Sans } from "next/font/google";
import CrisisFooter from "@/components/CrisisFooter";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Held",
  description:
    "For women living with PMS and PMDD. Not a tracker. Not a diagnosis. A steady voice that shows up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${literata.variable} ${albertSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-clay text-espresso">
        <div className="flex flex-1 flex-col">{children}</div>
        <CrisisFooter />
      </body>
    </html>
  );
}
