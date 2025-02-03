/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface INavItemProps {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

function NavItem({ label, href, submenu }: INavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeout);
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href}>
        <button className={`${isActive ? "text-[#C29E76]" : "hover:text-[#C29E76]"} duration-200`}>
          {label}
        </button>
      </Link>

      {submenu && (
        <div
          className={`absolute left-0 mt-2 w-44 bg-white shadow-lg border rounded-md z-10 transition-opacity duration-200 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        >
          {submenu.map((item) => (
            <Link key={item.href} href={item.href}>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavItem;
