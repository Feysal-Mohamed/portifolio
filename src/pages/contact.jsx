import React from "react";
import Header from "../head";
import Footer from "../components/footer";

function Contact() {
  return (
    <>
    < Header />
    <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

      <form className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            placeholder="Write your message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>

      </form>
    </section>
  <Footer />
  </>);
}

export default Contact;
