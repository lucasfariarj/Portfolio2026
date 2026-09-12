import type { Metadata } from "next";
import { Baloo_2, Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lucas Faria — Full Stack Developer",
  description:
    "Portfolio de Lucas Faria, desenvolvedor full stack: React, Angular, Next.js, PHP, MySQL, Laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${baloo.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
