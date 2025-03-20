"use client";

import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="lg:text-4xl text-[20px] font-bold lg:text-center text-left text-gray-900 mb-8">
          Contact <span className="text-green-800">Us</span>
        </h2>

        <form
          action="https://formsubmit.co/your-email@example.com" // Replace with your email
          method="POST"
          className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
        >
          {/* Prevent spam submissions */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_template" value="table" />

          <div className="mb-4 flex items-center border-b border-gray-400">
            <AiOutlineUser className="text-gray-500 mr-2 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 outline-none lg:text-[14px] text-[12px] bg-transparent text-black placeholder-gray-500"
            />
          </div>

          <div className="mb-4 flex items-center border-b border-gray-400">
            <AiOutlinePhone className="text-gray-500 mr-2 text-xl" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full p-2 outline-none bg-transparent lg:text-[14px] text-[12px] text-black placeholder-gray-500"
            />
          </div>

          <div className="mb-4 flex items-start border-b border-gray-400">
            <AiOutlineMail className="text-gray-500 mr-2 text-xl" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-2 outline-none bg-transparent lg:text-[14px] text-[12px] text-black placeholder-gray-500 h-24 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
