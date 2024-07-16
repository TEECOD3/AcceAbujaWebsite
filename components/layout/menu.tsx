"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "../ui/button";

const careers: { title: string; href: string; description: string }[] = [
  {
    title: "why join us",
    href: "/WhyJoinUs",
    description: "Acce's culture to talents",
  },
  {
    title: "Vacancy",
    href: "/Vacancy",
    description: "Application for Vancancy",
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link
          href={"/"}
          className="text-white text-sm uppercase font-medium cursor-pointer mr-4"
        >
          Home
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/AboutUs"
                  >
                    {/* <Icons.logo className="w-6 h-6" /> */}
                    <div className="mt-4 mb-2 text-lg font-medium">
                      About ACCE
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      our mission, our Goals, our beliefs and values
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/Founder" title="Founder welcome">
                I am tremendously proud to lead a dedicated and hardworking
                team. Our priority is our pupils and our society. My team and I
                will strive to provide the highest possible standard of
                education at all times for ...
              </ListItem>
              <ListItem href="/Principal-welcome" title="Principal welcome">
                I am tremendously proud to lead a dedicated and hardworking
                team. Our priority is our pupils and our society. My team and I
                will strive to provide the highest possible standard of
                education at all times for...
              </ListItem>
              <ListItem href="/executive-team" title="Executive Team">
                meet our wonderful team....
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Career</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {careers.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent border-none hover:bg-transparent">
            Admission
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent border-none hover:bg-transparent">
            Academics
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* 
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent border-none hover:bg-transparent">
            department
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <li>
          <Button className="capitalize text-white bg-orange-400 rounded-none border-white border-[1px]">
            <Link href="http://acce.edves.net" target="_blank">
              Portal
            </Link>
          </Button>
        </li>
        {
          <NavigationMenuItem>
            <Link href="/Vacancy" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Button className="capitalize text-orange-400 bg-white rounded-none border-white border-[1px]">
                  apply for vacancy
                </Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
