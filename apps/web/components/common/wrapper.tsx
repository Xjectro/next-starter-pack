import React from "react";

import Link from "next/link";
import { EllipsisVerticalIcon } from "lucide-react";

import { cn } from "@xjectro/react/lib";
import { useTheme } from "next-themes";
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
} from "@xjectro/react/components";

export function DefaultNavbar() {
  const { setTheme, themes, theme } = useTheme();

  const themeKeys = {
    dark: "Dark Mode",
    light: "Light Mode",
    system: "System Theme",
  };

  return (
    <Navbar shouldHideOnScroll isBackground variant="floating">
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

export function CommonWrapper({
  className,
  navbar,
  ...props
}: {
  navbar?: () => React.ReactNode;
} & ContainerProps) {
  const NavbarComponent = navbar || DefaultNavbar;

  return (
    <div className="flex w-full flex-col items-center">
      <NavbarComponent />
      <Container
        direction="vertical"
        align="start"
        layout="main"
        spacing="xl"
        as="main"
        className={cn("mt-36 w-full pb-24", className)}
        {...props}
      />
    </div>
  );
}
