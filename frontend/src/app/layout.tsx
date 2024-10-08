import type { Metadata } from "next";
import { roboto } from "@/styles/fonts";
// import localFont from "next/font/local";
import "@/styles/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export const metadata: Metadata = {
  title: "Social Network",
  description: "Application developed by Matheus Pinheiro Santana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
