"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900">
              About <span className="text-green-800">Us</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
            DAKIEO Farm is a livestock farm company, which is registered company under the Corporate Affairs Commission (CAC), Nigeria. DAKIEO Farm is a start-up Farm that is involved in production of quality and affordable Ram, Sheep, and Cow targeting consumers in southwestern Nigeria.  Our Sheep and Ram breeding company is involved in upgrading and multiplying Sheep and Rams with local adaptability and improved performance and yield, innovative breeding technology of artificial insemination and careful selection.
            </p>
           
            <button className="mt-6 px-6 py-3 bg-green-800 text-white rounded-md text-lg font-medium hover:bg-green-700 transition duration-300">
             <Link href="/"> Learn More </Link>
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 lg:block hidden">
            <Image
              src="/dakieologo.jpg" // Ensure this image is in /public folder
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
