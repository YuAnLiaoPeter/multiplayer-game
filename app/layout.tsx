import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emoji Cinema · The Movie Guessing Party",
  description: "Act out movies in emoji and race to guess with friends on any device.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
