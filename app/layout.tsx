import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rothvil Group Holdings | Electrical Engineering & Facilities Maintenance",
  description:
    "Rothvil Group Holdings provides electrical engineering, facilities maintenance and electrical solutions across commercial, residential, industrial and renewable environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
