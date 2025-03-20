"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryItems = [
  {
    id: 1,
    thumbnail: "/image 2.jpg",
    images: ["/image1.jpg", "/image 2.jpg", "/image3.jpg"],
    alt: "Livestock Delivery",
  },
  {
    id: 2,
    thumbnail: "/image3.jpg",
    images: ["/image1.jpg", "/image 2.jpg", "/image3.jpg"],
    alt: "Veterinary Check-up",
  },
  {
    id: 3,
    thumbnail: "/image1.jpg",
    images: ["/image1.jpg", "/image 2.jpg", "/image3.jpg"],
    alt: "Quality Assurance",
  },
  {
    id: 4,
    thumbnail: "/image3.jpg",
    images: ["/image3.jpg", "/image 2.jpg", "/image1.jpg"],
    alt: "Livestock Feeding",
  },
  {
    id: 5,
    thumbnail: "/image 2.jpg",
    images: ["/image 2.jpg", "/image1.jpg", "/image3.jpg"],
    alt: "Customer Support",
  },
  {
    id: 6,
    thumbnail: "/image1.jpg",
    images: ["/image1.jpg", "/image 2.jpg", "/image3.jpg"],
    alt: "Healthy Livestock",
  },
];

export default function ServicesGallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (images: string[]) => {
    setSelectedImages(images);
    setSelectedIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Services <span className="text-green-800">Gallery</span>
        </h2>

        {/* Hide the carousel when modal is open */}
        {!modalIsOpen && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 4 }, // Large screens: 4 images
              768: { slidesPerView: 2 }, // Medium screens: 2 images
              0: { slidesPerView: 1 }, // Small screens: 1 image
            }}
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative w-full h-[250px] cursor-pointer"
                  onClick={() => openModal(item.images)}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.alt}
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center pt-[30px] bg-black bg-opacity-80"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative max-w-2xl w-full bg-white rounded-lg p-4 flex flex-col items-center">
          <button className="absolute top-3 right-4 text-gray-700 text-xl" onClick={closeModal}>
            ✖
          </button>

          {/* Modal Image Display */}
          <Image
            src={selectedImages[selectedIndex]}
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg"
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full mt-4">
            <button onClick={prevImage} className="px-4 py-2 bg-gray-700 text-white rounded-lg">
              ◀ Prev
            </button>
            <button onClick={nextImage} className="px-4 py-2 bg-gray-700 text-white rounded-lg">
              Next ▶
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
