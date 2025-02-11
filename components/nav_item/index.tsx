"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface INavItemProps {
  label: string;
  href: string;
  submenu?: { label: string; href: string; submenu?: { label: string; href: string }[] }[];
}

function NavItem({ label, href, submenu }: INavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
      setNestedOpen(false); // ✅ Փակում ենք նաև nested մենյուն
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeout);
  }, []);

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={href}>
        <button className={`${isActive ? "text-[#C29E76]" : "hover:text-[#C29E76]"} duration-200`}>
          {label}
        </button>
      </Link>

      {submenu && isOpen && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-10 transition-opacity duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {submenu.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => {
                if (item.label === "FÄCHER") {
                  setNestedOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.label === "FÄCHER") {
                  setNestedOpen(false);
                }
              }}
            >
              <Link href={item.href}>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between">
                  {item.label} {item.submenu && <span>▶</span>}
                </p>
              </Link>

              {/* Nested submenu (FÄCHER) */}
              {item.submenu && nestedOpen && (
                <div className="absolute left-full top-0 w-56 bg-white shadow-lg border rounded-md z-20 transition-opacity duration-200">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href}>
                      <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{subItem.label}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavItem;
