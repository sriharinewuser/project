import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "Advanced AI & Machine Learning",
    issuer: "Microsoft",
    date: "2024",
    description: "Comprehensive certification in AI implementation and machine learning algorithms."
  },
  {
    title: "Front-End Development Expert",
    issuer: "IBM",
    date: "2023",
    description: "Advanced certification in modern front-end development practices and frameworks."
  },
  {
    title: "Prompt Engineering Specialist",
    issuer: "Simplilearn",
    date: "2023",
    description: "Specialized certification in AI prompt engineering and optimization."
  },
  {
    title: "SaWiT.AI Challenge Winner",
    issuer: "AI Innovation Awards",
    date: "2023",
    description: "First place in AI implementation challenge for web applications."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen py-20 bg-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 relative pl-8"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary to-secondary" />
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2" />
              
              <div className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;