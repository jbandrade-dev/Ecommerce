import Link from "next/link";

import { SearchBar } from "./SearchBar";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Cart } from "./Cart";

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-20">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4">
        <div className="mr-8 flex items-center gap-3">
           
          <Logo className="size-8" />
          <Link
            href="/"
            className="flex items-center gap-2 px-2 text-xl font-bold tracking-tighter"
          >
            Montessori
          </Link>
        </div>
        <Navigation />
        <div className="ml-auto flex items-center gap-2">
          <SearchBar className="hidden sm:block" />
          <Cart />
        </div>
      </div>
    </header>
  );
}
