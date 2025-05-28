import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    template: "%s | " + process.env.NEXT_PUBLIC_APP_TITLE,
    default: process.env.NEXT_PUBLIC_APP_TITLE!,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
