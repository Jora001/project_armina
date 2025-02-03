import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const my_font = Cormorant_Garamond({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <header className={`${my_font.className} sticky top-0 z-10`}>
      <nav className="flex items-center gap-7 justify-center fixed left-0 right-0 top-0 bg-white text-black pt-3 px-[150px]">
        {/* First navigation item */}
        {NAVIGATION.slice(0, 1).map((nav) => (
          <NavItem href={nav.href} label={nav.label} key={nav.href} />
        ))}

        <div className="relative group flex flex-row items-center gap-2">
          {NAVIGATION.slice(1, 2).map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} submenu={nav.submenu} />
          ))}
          <Image
            src="/assets/images/Vector.svg"
            width={8}
            height={4}
            alt="vector"
            className="cursor-pointer"
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
            src="/assets/images/Vector.svg"
            width={8}
            height={4}
            alt="vector"
            className="cursor-pointer"
          />
        </div>

        {NAVIGATION.slice(4).map((nav) => (
          <NavItem href={nav.href} label={nav.label} key={nav.href} />
        ))}
      </nav>
    </header>
  );
}
