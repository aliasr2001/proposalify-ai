import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
   subsets: ['latin'],
   display: 'swap',
   weight: "400",
})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const outfit2 = localFont({
//   src: "./fonts/Outfit-VariableFont_wght.ttf",
//   variable: "--font-outfit",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
