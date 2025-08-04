'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/utils';
import Link from 'next/link';

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 w-full"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_100%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className='flex items-center justify-center relative z-10 w-[90vw]'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className='hidden md:flex md:items-center md:justify-center'>
          <img src="hexagon.png" alt="" className='invert-0 dark:invert-[100%] blur-[2px] w-52 opacity-70 relative rotate-180 animate-spin-slow' />
          <p className='absolute text-lg font-bold border-4 border-gray-500 bg-secondary rounded-full px-3 py-1'>MERN</p>
        </motion.div>

        <div className="container flex flex-col items-center text-center w-[90vw] px-0 md:w-[65vw] md:px-6">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mb-4"
          >
            <h1 className="font-rubik font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4">
              Guttala <span className="text-primary">Eshwar</span>
            </h1>
            <div className="h-16 md:h-20">
              <TypeAnimation
                sequence={[
                  'B.Tech Student in AI & ML',
                  2000,
                  'AI & ML Enthusiast',
                  2000,
                  'Web Developer Enthusiast',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A passionate student and developer focused on building innovative solutions
              with modern web technologies and artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link href="#skills" passHref legacyBehavior>
              <Button size="lg" className="rounded-full px-6">
                View My Skills
              </Button>
            </Link>

            <Link href="#contact" passHref legacyBehavior>
              <Button size="lg" variant="outline" className="rounded-full px-6">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className='hidden md:flex md:items-center md:justify-center'>
          <img src="hexagon.png" alt="" className='invert-0 dark:invert-[100%] blur-[2px] w-52 opacity-70 relative rotate-180 animate-spin-slow' />
          <p className='absolute text-lg font-bold border-4 border-gray-500 bg-secondary rounded-full px-3 py-1'>Next JS</p>
        </motion.div>
      </div>
    </section>
  );
}