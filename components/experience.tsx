'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { fadeIn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experienceData = [
  {
    title: 'Web Developer',
    company: 'Q TechSolutions',
    location: 'Remote',
    duration: '06/2025 - Present',
    responsibilities: [
      'Worked on front-end, backend integration, UI fixes, and version control.',
      'Created the company portfolio and gained hands-on experience with modern web development.',
    ],
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Git', 'UI/UX'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section ref={ref} id="experience" className="py-20 px-4">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="font-rubik text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
