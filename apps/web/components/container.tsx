import React, { useEffect, useState } from "react";

import { cn } from "@repo/ui/lib/utils";
import Head from "next/head";

export function DefaultHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-50 w-full h-[66px]",
        isScrolled ? "bg-surface-100" : "bg-transparent",
      )}
    >
      <header className="container flex items-center justify-between h-full">
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul></ul>
      </header>
    </nav>
  );
}

export function Container({
  children,
  className,
  header,
  head,
}: {
  children: React.ReactNode;
  className?: string;
  header?: () => React.ReactNode;
  head?: () => React.ReactNode;
}) {
  const DefaultHead = () => {
    const title = "App";
    const description = "App Description";
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="favicon.ico" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
    );
  };

  const HeadComponent = head || DefaultHead;
  const HeaderComponent = header || DefaultHeader;

  return (
    <>
      <HeadComponent />
      <div className="flex flex-col items-center gap-10">
        <HeaderComponent />
        <div className={cn("container mt-24 mb-44", className)}>{children}</div>
      </div>
    </>
  );
}
