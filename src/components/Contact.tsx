import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Looking to collaborate on an exciting project or just want to chat about AI and web development? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Github className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-center">Check out my open-source projects</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Linkedin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-center">Connect with me professionally</p>
            </a>

            <a
              href="mailto:contact@example.com"
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-center">Send me a message directly</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;