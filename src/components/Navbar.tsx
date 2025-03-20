"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Prevent default navigation

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      router.push(`/#${sectionId}`); // Fallback if not on the homepage
      setMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-800 text-white lg:h-[13vh] h-[10vh] flex items-center">
      <div className="container mx-auto flex justify-between items-center w-full px-4">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/dakieos.png" 
            alt="Farm Logo" 
            width={150} 
            height={50} 
            className="object-contain lg:w-[150px] lg:h-[100px] w-[90px] h-[100px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about-us" className="hover:text-gray-300">About</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "livestock")} className="hover:text-gray-300">Livestock</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300">Services</Link>

          {/* Spacer */}
          <div className="w-10"></div>

          {/* Contact Us Button */}
          <Link 
            href="#" onClick={(e) => handleScroll(e, "contact")}
            className="bg-white text-green-800 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[8vh] z-50 left-0 w-full bg-green-800 p-4 md:hidden">
          <Link href="/" className="block py-2" onClick={closeMenu}>Home</Link>
          <Link href="/about-us" className="block py-2" onClick={closeMenu}>About</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "livestock")} className="block py-2">Livestock</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "services")} className="block py-2">Services</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "contact")} 
            className="mt-2 block bg-white text-green-800 text-center px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
