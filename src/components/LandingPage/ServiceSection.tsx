"use client";

import { FaTruck, FaUserTie, FaHandshake, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Livestock Delivery",
    icon: <FaTruck className="text-green-800 text-5xl" />,
    description: "We provide fast and safe delivery of livestock to your location.",
  },
  {
    id: 2,
    title: "Veterinary Services",
    icon: <FaUserTie className="text-green-800 text-5xl" />,
    description: "Our expert veterinarians ensure your livestock stays healthy.",
  },
  {
    id: 3,
    title: "Consultation & Support",
    icon: <FaHandshake className="text-green-800 text-5xl" />,
    description: "We offer professional guidance on livestock farming and management.",
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: <FaShieldAlt className="text-green-800 text-5xl" />,
    description: "We guarantee top-quality livestock with thorough health checks.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="lg:text-4xl text-[20px] font-bold lg:text-center text-left text-gray-900 mb-8">
          Our <span className="text-green-800">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="lg:text-2xl text-[13px] font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-[12px]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
