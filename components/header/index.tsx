"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const my_font = Cormorant_Garamond({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <<<<<<<<<<

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]); // <<<<<<<<<<

  return (
    <header
      className={my_font.className + " sticky top-0 z-20 w-[1440px] h-[80px]"}
    >
      <nav
        ref={navRef}
        className="flex items-center gap-7 justify-center fixed left-0 right-0 top-0 bg-white text-black  px-[150px] shadow-md md:px-6"
      >
        <button
          className="md:hidden absolute left-4 top-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 absolute top-12 left-0 w-full bg-white shadow-md py-4">
            {NAVIGATION.map((nav) => (
              <li key={nav.href} className="py-2">
                <NavItem href={nav.href} label={nav.label} submenu={nav.submenu} />
              </li>
            ))}
          </ul>
        )}

        <div className="hidden md:flex items-center gap-7 max-w-[965px]:hidden">
          {NAVIGATION.slice(0, 1).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}

          <div className="relative group flex flex-row items-center gap-2">
            {NAVIGATION.slice(1, 2).map((nav) => (
              <NavItem href={nav.href} label={nav.label} key={nav.href} submenu={nav.submenu} />
            ))}
            <div>
              <Image
                src="/assets/images/Vector.svg"
                width={8}
                height={4}
                alt="vector"
                className="icon-img cursor-pointer transform transition-transform duration-300 group-hover:rotate-90"
              />
            </div>
          </div>

          {NAVIGATION.slice(2, 3).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}

          <Logo />

          <div className="relative group flex flex-row items-center gap-2">
            {NAVIGATION.slice(3, 4).map((nav) => (
              <NavItem href={nav.href} label={nav.label} key={nav.href} submenu={nav.submenu} />
            ))}
            <div>
              <Image
                src="/assets/images/Vector.svg"
                width={8}
                height={4}
                alt="vector"
                className="icon-img cursor-pointer transform transition-transform duration-300 group-hover:rotate-90"
              />
            </div>
          </div>

          {NAVIGATION.slice(4).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}
        </div>
      </nav>
    </header>
  );
}
