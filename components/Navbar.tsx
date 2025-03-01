"use client"
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string;
  page: string;
}

// array of navitems, each containing a label and section
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // tracker for current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname()
  // keeps track of mobile/desktop view for menu button
  const [navbar, setNavbar] = useState(false);

  return (
    // different styling according to current theme
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* interactive logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Jonathan Lam</h2>
              </div>
          </Link>
          <div className="md:hidden">
            {/* menu button, shows or closes nav items */}
            <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
      </div>
      
      <div>
        {/* hides or shows menu button according to viewport */}
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          {/* displays all nav items and light/dark mode toggle button */}
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className={
                    "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                  }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              )
            })}
            {/* dark/light mode toggle button */}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={25} />
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;