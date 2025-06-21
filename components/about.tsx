'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { cn, fadeIn } from '@/lib/utils';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section ref={ref} id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="font-rubik text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              B.Tech Student & Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Self-motivated B.Tech student in Artificial Intelligence with a passion for Full Stack Web development. Combining strong academic foundation with hands-on project experience in React.js, Node.js, and ML technologies. Experienced in agile team collaboration with proven communication skills in leading technical discussions and presenting complex solutions. Eager to leverage my technical expertise and collaborative approach to contribute meaningfully to innovative projects while building a career at the intersection of AI and Web Development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <InfoCard
                icon={<GraduationCap className="h-6 w-6 text-primary" />}
                title="Education"
                description="B.Tech in CSE (AIML) with a strong academic record"
              />
              <InfoCard
                icon={<Code className="h-6 w-6 text-primary" />}
                title="Programming"
                description="Proficient in multiple languages and frameworks"
              />
              <InfoCard
                icon={<Briefcase className="h-6 w-6 text-primary" />}
                title="Projects"
                description="Practical experience in AI and web applications"
              />
              <InfoCard
                icon={<Award className="h-6 w-6 text-primary" />}
                title="Achievements"
                description="SIH 2024 qualification and academic awards"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="pic.jpg"
              alt="Profile"
              fill
              className="saturate-150 contrast-100 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
      <div className="shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
