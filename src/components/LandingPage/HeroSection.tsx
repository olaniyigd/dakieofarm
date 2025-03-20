"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/image1.jpg",
    title: "Premium Rams & Cattle",
    description: "We provide the best quality livestock for your farm and business.",
  },
  {
    image: "/image 2.jpg",
    title: "Healthy & Well-Fed Livestock",
    description: "Our animals are nurtured with care and premium feeds.",
  },
  {
    image: "/image3.jpg",
    title: "Your Trusted Livestock Supplier",
    description: "Supplying healthy livestock to businesses and individuals.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70 z-20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-30">
            <h1 className="text-[25px] lg:text-6xl font-bold">{slide.title}</h1>
            <p className="mt-2 text-[13px] lg:text-2xl">{slide.description}</p>
            <Link href="#">
              <button className="mt-4 lg:px-6 px-4 lg:py-3 py-2 bg-green-800 text-white rounded-md lg:text-lg text-[13px] font-medium hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-green-600 w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
