import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link href="/" className="font-bold">
          HarmonyBlog
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
