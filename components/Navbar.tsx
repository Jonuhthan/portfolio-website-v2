import React from 'react';
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
]

const Navbar = () => {
  const {systemTheme, theme, setTheme } = useTheme();
  // tracker for current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  // keeps track of mobile/desktop view for menu button
  const [navbar, setNavbar] = useState(false);

  return (
    // different styling according to current theme
    <header
      className={`w-full mx-auto px-4 shadow fixed top-0 z-50 sm:px-20 ${
        currentTheme === 'dark' ? 'bg-stone-900 border-b border-stone-600' : 'bg-white'
      }`}
    >
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            {/* logo */}
            <div className='md:py-5 md:block'>
              <h2 className='text-2xl font-bold'>Jonathan Lam</h2>
            </div>
            <div className='md:hidden'>
              {/* menu button */}
              <button >
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
              <div className='items-center justify-center md:flex md:space-x-6'>
                {NAV_ITEMS.map((item, idx) => {
                  return <a key={idx}>{item.label}</a>;
                })}
                {currentTheme === 'dark' ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-slate-100 p-2 rounded-xl'
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                  ) : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-slate-100 p-2 rounded-xl'
                  >
                    <RiMoonFill size={25} />
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navbar