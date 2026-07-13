import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserRoundIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Menu() {
  return (
    <div className="ml-auto flex items-center justify-end">
      <nav className="hidden items-center gap-2 md:flex">
        <ModeToggle />
        <Button variant="ghost">
          <Link href="/cart" className="inline-flex items-center gap-2">
            <ShoppingCart className="size-4" />
            <span>Cart</span>
          </Link>
        </Button>
        <Button>
          <Link href="/sign-in" className="inline-flex items-center gap-2">
            <UserRoundIcon className="size-4" />
            <span>Sign In</span>
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button variant="ghost">
              <Link href="/cart" className="inline-flex items-center gap-2">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button>
              <Link href="/sign-in" className="inline-flex items-center gap-2">
                <UserRoundIcon className="size-4" />
                <span>Sign In</span>
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
