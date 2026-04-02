import "./globals.css";

export const metadata = {
  title: "CHRONOS | Sovereign Restoration Engine",
  description: "Waking the Ancestors with 2026 AI. Historical restoration and synthetic media.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
