import Link from "next/link";
import React from "react";

interface INavItemProps {
  label: string;
  href: string;
}

function NavItem({ ...props }: INavItemProps) {
  const { label, href } = props;
  return (
    <Link href={href}>
      <button>{label}</button>
    </Link>
  );
}

export default NavItem;
