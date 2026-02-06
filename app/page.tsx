'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}