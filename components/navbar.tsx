'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(link => link.href));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 z-50 w-full py-4 px-3 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold font-rubik tracking-tight">
          Eshwar<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                activeSection === link.href && "text-blue-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4">
            <a href="https://github.com/Eshwar7325" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/guttala-eshwar-383942257" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 px-4"
        >
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/Eshwar7325" target="_blank" rel="noopener noreferrer" className="text-sm font-medium py-2">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/guttala-eshwar-383942257" target="_blank" rel="noopener noreferrer" className="text-sm font-medium py-2">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}