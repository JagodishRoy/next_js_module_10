"use client";
import "./globals.css";
import Menu from "@/ocmponents/Menu";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}
      </body>
    </html>
  );
}
