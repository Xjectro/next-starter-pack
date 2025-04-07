import React from "react";

import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { Button } from "@repo/ui/components/button";
import { Text } from "@repo/ui/components/text";
import { Navbar, NavbarContent, NavbarItem } from "@repo/ui/components/navbar";
import { useTheme } from "next-themes";

export function DefaultNavbar() {
  const { setTheme, themes, theme } = useTheme();

  const themeKeys = {
    dark: "Dark Mode",
    light: "Light Mode",
    system: "System Theme",
  };

  return (
    <Navbar
      shouldHideOnScroll
      variant="floating"
      className="max-sm:flex-col max-sm:py-5"
    >
      <NavbarContent justify="start">
        <NavbarItem>
          <Link href="/">
            <Text color="primary" variant="shiny" size="2xl">
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </Text>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVerticalIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Tema Modu</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={theme}
                      onValueChange={setTheme}
                    >
                      {themes.map((theme) => (
                        <DropdownMenuRadioItem value={theme} key={theme}>
                          {themeKeys[theme as "dark"]}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export function Container({
  children,
  className,
  navbar,
}: {
  children: React.ReactNode;
  className?: string;
  navbar?: () => React.ReactNode;
}) {
  const NavbarComponent = navbar || DefaultNavbar;

  return (
    <div className="flex flex-col items-center gap-10">
      <NavbarComponent />
      <div className={cn("container mt-24 mb-44", className)}>{children}</div>
    </div>
  );
}
