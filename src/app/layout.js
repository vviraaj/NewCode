import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/app/Component/Context/darkmode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={inter.className}>{children}</body>
      </DarkModeProvider>
    </html>
  );
}