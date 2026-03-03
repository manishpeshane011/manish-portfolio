import { Code2, Database, Globe, Layout, Server, Smartphone, Terminal, Github, Linkedin, Mail, ExternalLink, Download, Award, Briefcase, GraduationCap, User, Send } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Experience', href: 'experience' },
  { name: 'Certificates', href: 'certificates' },
  { name: 'Contact', href: 'contact' },
];

export const skills = [
  { name: 'Java', icon: Code2, color: 'text-red-500' },
  { name: 'Spring Boot', icon: Server, color: 'text-green-500' },
  { name: 'React', icon: Layout, color: 'text-blue-400' },
  { name: 'HTML5', icon: Globe, color: 'text-orange-500' },
  { name: 'CSS3', icon: Layout, color: 'text-blue-500' },
  { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400' },
  { name: 'Oracle DB', icon: Database, color: 'text-red-600' },
  { name: 'Git & GitHub', icon: Github, color: 'text-slate-300' },
];

export const projects = [
  {
    id: 1,
    title: 'DirectFarm',
    description: 'A comprehensive platform connecting farmers directly with consumers, reducing middleman costs and ensuring fresh produce.',
    image: 'https://picsum.photos/seed/farm/800/600',
    tech: ['React', 'Spring Boot', 'Oracle'],
    github: 'https://github.com/manishpeshane',
    live: '#',
  },
  {
    id: 2,
    title: 'Car Service Booking Center',
    description: 'An automated system for booking car services, managing appointments, and tracking service history for vehicles.',
    image: 'https://picsum.photos/seed/car/800/600',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/manishpeshane',
    live: '#',
  },
  {
    id: 3,
    title: 'Psycholinguistic Analysis',
    description: 'A research-based project analyzing linguistic patterns to determine psychological states using NLP techniques.',
    image: 'https://picsum.photos/seed/research/800/600',
    tech: ['Python', 'NLP', 'React'],
    github: 'https://github.com/manishpeshane',
    live: '#',
  },
];

export const experiences = [
  {
    company: 'Percept Infosystem',
    role: 'Full Stack Developer Intern',
    duration: 'Jun 2024 - Present',
    description: 'Working on enterprise-level Java applications and modernizing frontend components with React.',
    icon: Briefcase,
  },
  {
    company: 'Brillect Tech Solutions',
    role: 'Java Developer Intern',
    duration: 'Jan 2024 - May 2024',
    description: 'Developed backend services using Spring Boot and optimized database queries for better performance.',
    icon: Briefcase,
  },
  {
    company: 'CodSoft',
    role: 'Virtual Intern',
    duration: 'Nov 2023 - Dec 2023',
    description: 'Completed several web development tasks and projects focusing on responsive design and UI/UX.',
    icon: Smartphone,
  },
];

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Your University Name',
  year: '2021 - 2025',
  details: 'Focusing on software engineering, data structures, and full-stack development.',
};

export const certificates = [
  {
    title: 'Java Full Stack Development',
    issuer: 'Udemy',
    image: 'https://picsum.photos/seed/cert1/400/300',
  },
  {
    title: 'React Advanced Patterns',
    issuer: 'Coursera',
    image: 'https://picsum.photos/seed/cert2/400/300',
  },
  {
    title: 'Spring Boot Microservices',
    issuer: 'LinkedIn Learning',
    image: 'https://picsum.photos/seed/cert3/400/300',
  },
  {
    title: 'Oracle Database SQL',
    issuer: 'Oracle',
    image: 'https://picsum.photos/seed/cert4/400/300',
  },
];
