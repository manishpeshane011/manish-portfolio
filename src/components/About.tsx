import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <User size={24} /> Professional Summary
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I am a passionate Full Stack Developer with a strong foundation in Java and modern web technologies. 
                My journey in tech is driven by a desire to solve complex problems and build applications that make a difference.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With experience in both frontend and backend development, I enjoy bridging the gap between 
                elegant user interfaces and robust server-side logic. I'm constantly learning and staying 
                up-to-date with the latest industry trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-secondary">
                <GraduationCap size={24} /> Education
              </h3>
              <div className="border-l-2 border-secondary/30 pl-6 space-y-2">
                <h4 className="text-xl font-semibold text-white">{education.degree}</h4>
                <p className="text-secondary font-medium">{education.institution}</p>
                <p className="text-slate-500 text-sm">{education.year}</p>
                <p className="text-slate-400 mt-2">{education.details}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-secondary mb-1">3+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Internships</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
