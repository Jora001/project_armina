import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const my_font = Cormorant_Garamond({ weight: '400' });

export default function Header() {
  return (
    <header className={`${my_font.className} pt-3 sticky top-0 z-10`}>
      <nav className="flex items-center gap-7 justify-center   position-fixed
  left-0 right-0 top-0 bg-white text-black pt-3 pr-150 pl-150">
        {NAVIGATION.slice(0, 1).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
        <div className="flex flex-row gap-2">
          {NAVIGATION.slice(1, 2).map((nav) => {
            return <NavItem href={nav.href} label={nav.label} key={nav.href} />;  
          })}    
          <Image src="/assets/images/Vector.svg"
                 width={8}
                 height={4}
                 alt="vector"
                 className="left-8 cursor-pointer"
          />
        </div>
        {NAVIGATION.slice(2, 3).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
        <Logo />
        <div className="flex flex-row gap-2">
          {NAVIGATION.slice(3, 4).map((nav) => {
            return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
          })}
          <Image src="/assets/images/Vector.svg"
                width={8}
                height={4}
                alt="vector"
                className="left-8 cursor-pointer"
          />
        </div>
        {NAVIGATION.slice(4).map((nav) => {
          return <NavItem href={nav.href} label={nav.label} key={nav.href} />;
        })}
      </nav>
    </header>
  );
}
