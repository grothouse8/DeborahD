import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deborah D | Interior Curation & Design",
  description:
    "Curations by Deborah — bespoke interior design where every surface, texture, and detail is composed to feel irreversibly yours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
