import { Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 fixed w-full z-50 top-0 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Caesar Mayienga</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main id="home" className="p-8 pt-28 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-blue-600">Caesar Mayienga</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A passionate Telecommunication and Information Engineering student focused on processor engineering, embedded systems, and intelligent design.
          </p>
          <a href="#projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-md font-medium hover:bg-blue-700 transition">
              View My Projects
            </button>
          </a>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">GNS3 Network Lab</h3>
            <p className="text-gray-600">
              Simulated network topologies using GNS3 with router configs, VLANs, and IP addressing.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Packet Sniffer App</h3>
            <p className="text-gray-600">
              A Python-based tool that captures, logs, and analyzes network packets in real-time, with threat detection, protocol filtering, .pcap export, and dynamic graph visualization of protocol and IP stats.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Simple Calculator (C)</h3>
            <p className="text-gray-600">
              A basic calculator built using C programming for practicing logic implementation, arithmetic operations, and conditional control flows.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Contact Me</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:border-blue-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-white py-6 px-8 text-center border-t border-gray-200">
        <p className="text-gray-600 mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/KaiserMayienga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/caesar-mayienga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Caesar Mayienga. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
