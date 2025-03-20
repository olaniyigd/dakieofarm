"use client";

import { useState } from "react";

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    position: "",
    email: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        action="https://formsubmit.co/YOUR_EMAIL" // Replace with your email
        method="POST"
        encType="multipart/form-data"
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Career Application</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        {/* Position Applied For */}
        <div className="mb-4">
          <label className="block text-gray-700">Position Applied For</label>
          <select
            name="position"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          >
            <option value="">Select a position</option>
            <option value="Vet. Doctor">Vet. Doctor</option>
            <option value="Marketer">Marketer</option>
            <option value="Accountant">Accountant</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Cleaners">Cleaners</option>
            <option value="Security Officer/Guard">Security Officer/Guard</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            required
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-3 rounded-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
