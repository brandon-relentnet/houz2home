"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Update form values
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
  
    // Simple check for required fields
    if (!name || !email || !message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }
  
    try {
      setLoading(true);
      setStatusMessage("");
  
      // Send data to our Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatusMessage("Thank you! Your message has been sent.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        const { message } = await response.json();
        setStatusMessage(message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error); // Logging the error
      setStatusMessage("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16mb-12 lg:mb-28">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center max-w-xl mx-auto mb-8">
        Send us a message and start the journey from transforming your house into a <span className="italic">home</span>.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold text-subtext1">
            Name <span className="text-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-surface0 px-3 py-2 border border-surface1 rounded focus:outline-none focus:ring focus:ring-accent/50"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold text-subtext1">
            Email <span className="text-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="bg-surface0 px-3 py-2 border border-surface1 rounded focus:outline-none focus:ring focus:ring-accent/50"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="subject" className="mb-1 font-semibold text-subtext1">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="bg-surface0 px-3 py-2 border border-surface1 rounded focus:outline-none focus:ring focus:ring-accent/50"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="phone" className="mb-1 font-semibold text-subtext1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(XXX) XXX-XXXX"
            className="bg-surface0 px-3 py-2 border border-surface1 rounded focus:outline-none focus:ring focus:ring-accent/50"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="message" className="mb-1 font-semibold text-subtext1">
            Message <span className="text-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message..."
            className="bg-surface0 px-3 py-2 border border-surface1 rounded focus:outline-none focus:ring focus:ring-accent/50"
          />
        </div>

        {/* Submission Status */}
        {statusMessage && (
          <div className="sm:col-span-2">
            <p className="p-2 text-sm italic text-center text-accent bg-accent/10 rounded">
              {statusMessage}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-block bg-accent text-base font-semibold px-6 py-3 rounded-lg 
                       hover:opacity-60 transition-opacity duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
