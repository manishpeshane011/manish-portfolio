import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Manish Peshane Portfolio
 * A premium, modern, and responsive portfolio website.
 */
export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with background animations */}
        <Hero />

        {/* About Section - Professional summary and education */}
        <About />

        {/* Skills Section - Technical stack with icons */}
        <Skills />

        {/* Projects Section - Dynamic grid of work */}
        <Projects />

        {/* Experience Section - Timeline of professional journey */}
        <Experience />

        {/* Certificates Section - Grid of achievements */}
        <Certificates />

        {/* Contact Section - Form and social links */}
        <Contact />
      </main>

      {/* Footer - Minimal branding and copyright */}
      <Footer />
    </div>
  );
}
