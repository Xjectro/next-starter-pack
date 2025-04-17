import React from "react";

import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
  Text,
  Spinner,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Container,
  ContainerProps,
} from "@repo/ui/components";
import { EllipsisVerticalIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@repo/ui/lib/utils";

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
      isBackground
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
                <DropdownMenuSubTrigger>Theme Mode</DropdownMenuSubTrigger>
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

export function DefaultPreloadPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export function Page({
  className,
  navbar,
  ...props
}: {
  navbar?: () => React.ReactNode;
} & ContainerProps) {
  const NavbarComponent = navbar || DefaultNavbar;

  return (
    <div className="flex flex-col items-center">
      <NavbarComponent />
      <Container className={cn("mt-36 pb-24", className)} {...props} />
    </div>
  );
}
