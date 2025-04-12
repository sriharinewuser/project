import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative gradient-background"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="text-center px-4 relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-gradient"
        >
          <TypeAnimation
            sequence={[
              'Sri Hari',
              1000,
              'AI-Powered Web Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Building Intelligent Web Experiences with AI & Front-End Magic
        </motion.p>

        <motion.button
          onClick={handleExploreClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-primary rounded-full text-white font-semibold shadow-lg hover:shadow-secondary/50 transition-all duration-300"
        >
          Explore My Work
        </motion.button>
      </div>

      <motion.div 
        onClick={handleScrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 cursor-pointer z-10"
      >
        <ChevronDown className="w-8 h-8 text-white hover:text-secondary transition-colors duration-300" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;