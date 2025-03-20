"use client";

import Image from "next/image";

const livestockProducts = [
  {
    id: 1,
    name: "Premium Rams",
    image: "/cow.jpeg", // Ensure this image exists in /public folder
    description: "High-quality and well-fed rams for your farm or business.",
  },
  {
    id: 2,
    name: "Healthy Cattle",
    image: "/ram.jpeg",
    description: "Strong and disease-free cattle for dairy and meat production.",
  },
  {
    id: 3,
    name: "Goats",
    image: "/goat.jpeg",
    description: "Well-bred goats, ideal for farming and trade.",
  },
];

export default function LivestockPage() {
  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our <span className="text-green-800">Livestock Products</span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {livestockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-md object-cover w-full h-52"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
