import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRONOS | Sovereign Restoration Engine",
  description: "Waking the Ancestors with 2026 AI. Historical restoration and synthetic media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
