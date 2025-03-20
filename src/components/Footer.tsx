"use client"
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    
      const handleScroll = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault(); // Prevent default navigation
    
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(`/#${sectionId}`); // Fallback if not on the homepage
        }
      };
  return (
    <footer className="bg-green-900 text-white py-2">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-4">
        
        {/* Logo */}
        <Image src="/dakieos.png" alt="Farm Logo" width={100} height={40} />

        {/* Location & Contact Info */}
        <div className="text-sm">
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt />
            <p className="lg:text-[14px] text-[12px]">123 Dakieo Farm, Kwara State, Nigeria</p>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <FaPhone />
            <a href="tel:+2348107265575" className="lg:text-[14px] text-[12px] hover:underline">
              +234 810 726 5575
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://web.facebook.com/Dakieofarm" target="-blank" className="hover:text-gray-300 text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300 text-lg">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/dakieo-farms/?viewAsMember=true" target="_blank" className="hover:text-gray-300 text-lg">
            <FaLinkedin />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-300 lg:text-[14px] text-[12px]">Home</Link>
          <Link href="/about" className="hover:text-gray-300 lg:text-[14px] text-[12px]">About</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "livestock")} className="hover:text-gray-300 lg:text-[14px] text-[12px]">Livestock</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300 lg:text-[14px] text-[12px]">Services</Link>
          <Link href="/career" className="hover:text-gray-300 lg:text-[14px] text-[12px]">Career</Link>
        </div>

        {/* Copyright */}
        <div className="lg:text-xs text-[12px] border-t border-gray-700 pt-3 w-full text-center">
          © {new Date().getFullYear()} Dakieo Farm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
