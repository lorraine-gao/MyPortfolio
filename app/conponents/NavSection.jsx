"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavSection = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-0 right-0 z-10">
      <div className="mx-auto flex justify-center px-4 py-4 ">
        <div className="flex items-center gap-2 lg:gap-8 bg-[#121212] border border-gray-700 rounded-full px-3 lg:px-6 py-1 lg:py-3">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              title={link.title}
            />
          ))}
          <span className="text-gray-500 lg:text-xl">|</span>
          <span className="text-gray-200 font-bold text-base tracking-wide">🌛</span>
        </div>
      </div>
    </nav>

  );
};

export default NavSection;