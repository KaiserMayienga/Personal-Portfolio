import React from 'react';
import './App.css';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const projects = [
    {
      title: "GNS3 Network Lab",
      desc: "Simulated network topologies using GNS3 with router configs, VLANs, and IP addressing."
    },
    {
      title: "Packet Sniffer App",
      desc: "A Python-based tool that captures, logs, and analyzes network packets in real-time, with threat detection, protocol filtering, .pcap export, and dynamic graph visualization of protocol and IP stats."
    },
    {
      title: "Simple Calculator (C)",
      desc: "A basic calculator built using C programming for practicing logic implementation, arithmetic operations, and conditional control flows."
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white/90 backdrop-blur-md shadow-md py-4 px-6 md:px-12 fixed w-full z-50 top-0 flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Caesar Mayienga</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero */}
      <motion.main
        id="home"
        className="p-6 pt-32 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-600">Caesar Mayienga</span>
          </h2>
          <p className="text-lg text-gray-600">
            A passionate Telecommunication and Information Engineering student focused on processor engineering, embedded systems, and intelligent design.
          </p>
          <a href="#projects">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-xl text-md font-semibold hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </a>
        </div>
      </motion.main>

      {/* Projects */}
      <motion.section
        id="projects"
        className="bg-white py-20 px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <section id="contact" className="bg-blue-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message..." />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-8 text-center border-t border-gray-200">
        <p className="text-gray-600 mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/KaiserMayienga" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/caesar-mayienga" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
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
