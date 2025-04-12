import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            As an AI-Powered Web Developer, I combine cutting-edge front-end development with artificial intelligence to create innovative web solutions. My expertise spans across modern web technologies and AI integration, allowing me to build intelligent and responsive applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <Code2 className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Front-End Expertise</h3>
              <p className="text-gray-400">
                Proficient in React, TypeScript, and modern CSS frameworks, creating responsive and interactive user interfaces.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <Brain className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-400">
                Experienced in implementing AI-powered features and integrating various AI APIs into web applications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <Cpu className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-400">
                Building automated workflows and intelligent systems to enhance development efficiency.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <Terminal className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Analytical approach to solving complex technical challenges with innovative solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;