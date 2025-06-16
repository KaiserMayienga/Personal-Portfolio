import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Caesar Mayienga</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#">Home</a>
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
      <main className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-blue-600">Caesar Mayienga</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A passionate Electrical Engineering student focused on processor engineering, embedded systems, and intelligent design.
          </p>
          <a href="#projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-md font-medium hover:bg-blue-700 transition">
              View My Projects
            </button>
          </a>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;