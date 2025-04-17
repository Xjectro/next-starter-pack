import "@repo/ui/globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: "Description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
