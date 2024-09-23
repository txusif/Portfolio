import Link from "next/link";
import ModeToggle from "./Toggle";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Nav = () => {
  return (
    <div>
      <nav className="hidden md:flex items-center gap-x-16">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="capitalize text-xl font-medium hover:text-gray-400 hover:underline hover:underline-offset-4 transition-all duration-300 outline-none focus:text-gray-400 focus:underline focus:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}

        <ModeToggle />
      </nav>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={32} className="cursor-pointer" />
          </SheetTrigger>

          <SheetContent className="flex flex-col items-center justify-center gap-24">
            <SheetClose asChild>
              <Logo />
            </SheetClose>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <SheetClose key={link.label} asChild>
                  <Link
                    key={link.href}
                    href={link.href}
                    className="capitalize text-xl font-medium hover:text-gray-400 hover:underline hover:underline-offset-4 transition-all duration-300 outline-none focus:text-gray-400 focus:underline focus:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <SheetClose>
              <ModeToggle />
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
