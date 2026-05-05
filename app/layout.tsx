import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Uncovered",
  description: "Uncovering the business game, one real insight at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
