import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Palette, Database, GitBranch, Layout } from 'lucide-react';

const skillsData = [
  {
    category: "Front-End",
    icon: <Code className="w-6 h-6" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript","Bootstrap"]
  },
  {
    category: "AI & ML",
    icon: <Bot className="w-6 h-6" />,
    skills: ["ChatGPT Integration", "Prompt Engineering", "AI API Implementation", "ML Models"]
  },
  {
    category: "UI/UX",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Responsive Design", "Animation", "User Experience", "Accessibility"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js","Mongodb","RESTful APIs", "Database Design", "Server Management"]
  },
  {
    category: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Git", "GitHub", "CI/CD", "Agile Methodology"]
  },
  {
    category: "Web Performance",
    icon: <Layout className="w-6 h-6" />,
    skills: ["Optimization", "SEO", "Analytics", "Performance Metrics"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;