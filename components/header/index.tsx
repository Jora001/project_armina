import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-7 justify-center">
        {NAVIGATION.slice(0, 3).map((nav) => {
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
