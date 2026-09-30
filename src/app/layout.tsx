import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meridiansky.co.uk"),
  title: {
    default: "Meridian Sky | Above the Ordinary",
    template: "%s | Meridian Sky",
  },
  description: "A private luxury experience above the city.",
  applicationName: "Meridian Sky",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meridian Sky | Above the Ordinary",
    description: "A private luxury experience above the city.",
    type: "website",
    siteName: "Meridian Sky",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
