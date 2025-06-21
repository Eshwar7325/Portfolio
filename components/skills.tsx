'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cn, fadeIn } from '@/lib/utils';
import { Code, BadgeCheck, Cloud, Database, BookOpen, Rocket } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: ['C', 'C++', 'Java', 'Python'],
  },
  {
    category: 'Frontend',
    icon: <Rocket className="w-8 h-8 text-primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: <Cloud className="w-8 h-8 text-primary" />,
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8 text-primary" />,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    skills: ['Git', 'GitHub'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section ref={ref} id="skills" className="py-20">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="font-rubik text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired through my academic journey and project work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-400 p-8 flex flex-col gap-6 shadow-md min-h-[200px]">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-xl p-4">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-foreground px-6 py-1 rounded-full border-2 border-gray-700 font-medium text-lg hover:border-gray-500 hover:scale-105 transition duration-500 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}