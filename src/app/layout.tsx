import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaughan + Co. | Custom Homes by Liz Vaughan",
  description:
    "Liz Vaughan has designed and built more than 180 custom homes across Central Ohio. Design. Build. Family.",
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
