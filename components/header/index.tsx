import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const my_font = Cormorant_Garamond({ weight: '600' });

export default function Header() {
  return (
    <header className={my_font.className}>
      <nav className="flex items-center gap-7 justify-center fixed left-0 right-0 top-0 bg-white text-black">
        {NAVIGATION.slice(0, 2).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
        <Image src="/assets/images/Vector.png"
               width={8}
               height={4}
               alt="vector"
        />
        {NAVIGATION.slice(2, 3).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
        <Logo />
        {NAVIGATION.slice(3).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
      </nav>
    </header>
  );
}
