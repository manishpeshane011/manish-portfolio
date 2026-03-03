import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-display font-bold cursor-pointer tracking-tight"
          >
            Manish<span className="text-primary">.</span>
          </Link>
          <p className="text-slate-500 text-sm">
            Building the web of tomorrow, today.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Manish Peshane
          </p>
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
