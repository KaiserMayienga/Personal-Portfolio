import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Variants for staggered animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/KaiserMayienga/repos')
      .then(response => response.json())
      .then(data => {
        // Only show repos with topics
        const filtered = data.filter(repo => repo.topics && repo.topics.length > 0);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repos:', error);
        setLoading(false);
      });
  }, []);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="projects"
      className="p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">My GitHub Projects</h2>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center py-10">
          <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Loading projects...</p>
        </div>
      ) : (
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {repos.map(repo => (
            <motion.div
              key={repo.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{repo.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{repo.description}</p>

              {/* Language Tag */}
              {repo.language && (
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded">
                  {repo.language}
                </span>
              )}

              {/* GitHub Link */}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 hover:underline mt-3 text-sm"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105"
          title="Scroll to Top"
        >
          ↑
        </button>
      )}
    </motion.section>
  );
};

export default Projects;
