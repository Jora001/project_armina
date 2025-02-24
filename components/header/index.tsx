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
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Animate the header on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${my_font.className} fixed top-0 z-20 w-full h-[80px]`}>
      <nav
        ref={navRef}
        className="flex items-center justify-between left-0 right-0 bg-white text-black px-4 sm:px-6 md:px-10 lg:px-[150px] shadow-md"
      >
        <button
          className="lg:hidden z-30 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-[80px] left-0 w-3/4 h-[calc(100vh-80px)] bg-white shadow-md py-4 px-4 ${isOpen ? "block" : "hidden"}`}
        >
          {NAVIGATION.map((nav, index) => (
            <li key={nav.href || index} className="py-2">
              <NavItem
                href={nav.href}
                label={nav.label}
                submenu={nav.submenu}
                onClick={() => setIsOpen(false)}
              />
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-7 w-full justify-center">
          {NAVIGATION.slice(0, 1).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}

          <div className="relative group flex flex-row items-center gap-2">
            {NAVIGATION.slice(1, 2).map((nav) => (
              <NavItem href={nav.href} label={nav.label} key={nav.href} submenu={nav.submenu} />
            ))}
            <Image
              src="/assets/images/Vector.png"
              width={8}
              height={4}
              alt="vector"
              className="cursor-pointer transform transition-transform duration-300 group-hover:rotate-90"
            />
          </div>

          {NAVIGATION.slice(2, 3).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}

          <Logo />

          <div className="relative group flex flex-row items-center gap-2">
            {NAVIGATION.slice(3, 4).map((nav) => (
              <NavItem href={nav.href} label={nav.label} key={nav.href} submenu={nav.submenu} />
            ))}
            <Image
              src="/assets/images/Vector.png"
              width={8}
              height={4}
              alt="vector"
              className="cursor-pointer transform transition-transform duration-300 group-hover:rotate-90"
            />
          </div>

          {NAVIGATION.slice(4).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}
        </div>
      </nav>
    </header>
  );
}