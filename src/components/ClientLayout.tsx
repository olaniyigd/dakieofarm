"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset before animation starts
      easing: "ease-in-out",
      once: false, // Keep animating on scroll up/down
      mirror: true,
    });
  }, []);

  return <>{children}</>;
}
