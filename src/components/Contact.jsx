import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // If using react-icons

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      {/* Form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="flex flex-col gap-4 mb-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <label>
          Your Name:
          <input type="text" name="name" required className="p-2 rounded text-black w-full" />
        </label>

        <label>
          Your Email:
          <input type="email" name="email" required className="p-2 rounded text-black w-full" />
        </label>

        <label>
          Message:
          <textarea name="message" required className="p-2 rounded text-black w-full" rows="4"></textarea>
        </label>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
          Send
        </button>
      </form>

      {/* WhatsApp Section */}
      <div className="text-center mt-6">
        <p className="text-lg mb-2">Or reach me directly on WhatsApp:</p>
        <a
          href="https://wa.me/254702847176"  // ← Replace with your real number!
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white text-md font-medium"
        >
          <FaWhatsapp className="text-xl" />
          Chat with me
        </a>
      </div>
    </section>
  );
};

export default Contact;
