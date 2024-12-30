import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBar({ className }: { className?: string }) {
    return (
      <form className={cn('relative max-w-lg lg:max-w-xs', className)}>
        <Search className="text-muted-foreground absolute left-2 top-2 size-4" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="h-8 rounded-lg pl-8 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]"
        />
      </form>
    )
  }