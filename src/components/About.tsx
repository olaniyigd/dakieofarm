"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="lg:text-4xl text-[20px] font-bold lg:text-center text-left text-gray-900 mb-8">
          About <span className="text-green-800">Us</span>
        </h2>

        <div className="flex flex-col lg:flex-row w-full items-center">
          {/* Left: Company Image */}
          <div className="w-full lg:w-[20%] flex justify-center lg:justify-start">
            <Image
              src="/dakieologo.jpg"
              alt="Our Company"
              width={200}
              height={200}
              className="rounded-lg shadow-md object-cover mx-auto lg:mx-0"
            />
          </div>

          {/* Right: About Us Text */}
          <div className="w-full lg:w-[80%]">
            <p className="text-gray-700 text-[12px] md:text-[14px] leading-relaxed text-justify">
              DAKIEO Farm is a livestock farm company, which is registered company under the Corporate Affairs Commission (CAC), Nigeria. DAKIEO Farm is a start-up Farm that is involved in production of quality and affordable Ram, Sheep, and Cow targeting consumers in southwestern Nigeria. Our Sheep and Ram breeding company is involved in upgrading and multiplying Sheep and Rams with local adaptability and improved performance and yield, innovative breeding technology of artificial insemination and careful selection. We rare Sheep and Ram breeds like Balami, Uda, West African Dwarf sheep and Yankasa. We currently rear 10 of these mixed varieties for sales. Our medium of farming allows for healthy produce and productive yield.
            </p>
          </div>
        </div>

        {/* Bottom: Full-width text block */}
        <div className="mt-2">
          <p className="text-gray-700 text-[12px] md:text-[14px] leading-relaxed text-justify">
            While poor farm yield has always been the major problem facing sheep farms production, at DAKIEO Farm, we are providing the right solution through improved nutrition (silage and concentrate supplement), artificial insemination of local breeds and selection of up-to-date rearing techniques.  
            The entrepreneur behind the vision of DAKIEO Farm is a vast agriculturist, majoring on livestock farming. As a way of practice, he has devoted most of his time and resources in rearing livestock. Owning a first degree in Linguistics at the University of Ilorin, Ilorin, Kwara State, Nigeria.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-black font-bold">THE BENEFITS OF OUR PRODUCTS AND SERVICES</p>
          <p className="text-gray-700 text-[12px] md:text-[14px] leading-relaxed text-justify">
            High quality and affordable Ram and Cow. <br />
            Excellent Customer Care Services. <br />
            Fair and best possible prices.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-black font-bold">VISION STATEMENT</p>
          <p className="text-gray-700 text-[12px] md:text-[14px] leading-relaxed text-justify">
            To be the leading livestock farm in the environs situated in Nigeria through the provision of excellent sales services and products.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-black font-bold">OUR MISSION</p>
          <p className="text-gray-700 text-[12px] md:text-[14px] leading-relaxed text-justify">
            Our mission is to sell our livestock by-products in commercial quantities both within Nigeria and across Africa. DAKIEO intends to build Sheep, Ram, and Cow rearing business that can favorably compete with other leading ram/sheep rearing brands in Nigeria and Africa as a whole.
          </p>
        </div>
      </div>
    </section>
  );
}
