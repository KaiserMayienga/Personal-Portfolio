import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="flex flex-col gap-4"
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
    </section>
  );
};

export default Contact;
