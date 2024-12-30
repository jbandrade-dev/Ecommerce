"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Materiais</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-40">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/materials"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Montessori Materials
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our range of high-quality Montessori learning materials.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/materials/sensorial" title="Sensorial">
                Materials for developing the senses and understanding abstract concepts.
              </ListItem>
              <ListItem href="/materials/practical-life" title="Practical Life">
                Tools for developing independence and fine motor skills.
              </ListItem>
              <ListItem href="/materials/language" title="Language">
                Materials for language development and early literacy.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Idade</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="/age-groups/0-3" title="0-3 Years">
                Materials for infants and toddlers.
              </ListItem>
              <ListItem href="/age-groups/3-6" title="3-6 Years">
                Preschool and kindergarten materials.
              </ListItem>
              <ListItem href="/age-groups/6-12" title="6-12 Years">
                Elementary school materials.
              </ListItem>
              <ListItem href="/age-groups/12-18" title="12-18 Years">
                Adolescent program materials.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

