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

const navLinkClassName = "";
const primaryNavLinkClassName =
  "inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90";

export default function Menu() {
  return (
    <div className="ml-auto flex items-center justify-end">
      <nav className="hidden items-center gap-2 md:flex">
        <ModeToggle />
        <Button variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="size-4" />
            <span>Cart</span>
          </Link>
        </Button>
        <Button>
          <Link href="/sign-in">
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
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button>
              <Link href="/sign-in">
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
