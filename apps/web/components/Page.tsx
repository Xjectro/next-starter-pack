import React from "react";

import Link from "next/link";
import { EllipsisVerticalIcon } from "lucide-react";

import { cn } from "@xjectro/react/ui/lib";
import { useTheme } from "@xjectro/react/ui/hooks";
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
} from "@xjectro/react/ui/components";

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

export function Page({
  className,
  navbar,
  ...props
}: {
  navbar?: () => React.ReactNode;
} & ContainerProps) {
  const NavbarComponent = navbar || DefaultNavbar;

  return (
    <div className="flex flex-col items-center w-full">
      <NavbarComponent />
      <Container direction="vertical" align="start" layout="main" spacing="xl" as="main" className={cn("w-full mt-36 pb-24", className)} {...props} />
    </div>
  );
}
