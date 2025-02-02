'use client';  // Add this directive to make it a client-side component

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";  // Use usePathname here

interface INavItemProps {
  label: string;
  href: string;
}

function NavItem({ label, href }: INavItemProps) {
  const pathname = usePathname();  // Get the current path
  const isActive = pathname === href;  // Check if the current pathname matches the href

  return (
    <Link href={href}>
      <button
        className={`${
          isActive ? "text-[#C29E76]" : "hover:text-[#C29E76]"
        } duration-200`}  // Apply different styles based on whether the link is active
      >
        {label}
      </button>
    </Link>
  );
}

export default NavItem;
