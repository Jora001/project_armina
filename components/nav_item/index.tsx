"use client"; // Օգտագործել client component

import { usePathname } from 'next/navigation'; // Օգտագործել usePathname next/navigation-ից
import Link from "next/link";
import React from "react";

interface INavItemProps {
  label: string;
  href: string;
}

function NavItem({ ...props }: INavItemProps) {
  const { label, href } = props;
  const pathname = usePathname(); // Ստանալ ընթացիկ էջի ուղին
  const isActive = pathname === href; // Համեմատել ընթացիկ ուղին NavItem-ի href-ի հետ

  return (
    <Link href={href}>
      <button className={`${isActive ? 'text-gold' : 'text-black'}`}>{label}</button> {/* Ստեղծել ոսկեգույն միայն ակտիվ էջում */}
    </Link>
  );
}

export default NavItem;
