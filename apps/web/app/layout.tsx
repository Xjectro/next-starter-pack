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
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL!),
  authors: [
    {
      name: process.env.NEXT_PUBLIC_APP_TITLE,
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
    },
  ],
  openGraph: {
    title: {
      template: "%s - " + process.env.NEXT_PUBLIC_APP_TITLE,
      default: process.env.NEXT_PUBLIC_APP_TITLE!,
    },
    siteName: process.env.NEXT_PUBLIC_APP_TITLE,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s - " + process.env.NEXT_PUBLIC_APP_TITLE,
      default: process.env.NEXT_PUBLIC_APP_TITLE!,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CLIENT_URL,
  },
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
