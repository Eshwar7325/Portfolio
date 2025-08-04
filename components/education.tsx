'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { cn, fadeIn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const educationData = [
  {
    degree: 'B.Tech in CSE (AIML)',
    institution: 'CMR Technical Campus',
    location: 'Hyderabad, Telangana',
    duration: '2022-2026',
    gpa: '9.38',
  },
  {
    degree: 'Intermediate',
    institution: 'Toppers Junior College',
    location: 'Sainikpuri, Hyderabad',
    duration: '2020-2022',
    gpa: '9.44',
  },
  {
    degree: '10th',
    institution: 'ST. Joseph\'s Missionary School',
    location: 'Balaji Nagar, Hyderabad',
    duration: '2020',
    gpa: '10',
  },
];

const certificatesData = [
  {
    title: 'Smart Coder by Smart Interviews',
    issuer: 'Solved competitive programming challenges and optimized algorithms to enhance problem-solving skills.',
  },
  {
    title: 'HTML5, CSS3, JavaScript - Infosys Springboard',
    issuer: 'Developed responsive web pages using HTML5, styled them with CSS3, and added interactivity with JavaScript to enhance user experience and accessibility.',
  },
  {
    title: 'IIT Bombay - Python',
    issuer: 'A multiple-choice test certifying proficiency in Python programming, conducted by IIT Bombay.',
  },
  {
    title: 'Node.js - Infosys Springboard',
    issuer: 'Successfully completed the course Server-side Programming with Node.js for Beginners, enhancing skills in building scalable web applications using Node.js.',
  },
  {
    title: 'AI Foundation - Hexart.In',
    issuer: 'successfully completing the training on AI Foundation, by exploring AI fundamentals, learning Python and Machine Learning, and applied them through hands-on projects to build real-world skills.',
  },
];

const achievementsData = [
  {
    title: 'Hackathon Achievement',
    description: 'Qualified in internal level Smart-India Hackathon SIH 2024.',
  },
  {
    title: 'Academic Achievement',
    description: 'Secured 1st place in Academic Excellence in 2024.',
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section ref={ref} id="education" className="py-20 px-4">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="font-rubik text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements throughout my educational career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-primary text-sm font-bold">{educationData.length - index}</span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg bg-card border-muted shadow-md">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold">{item.degree}</h4>
                      <Badge variant="outline" className="bg-primary/10">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                    {item.gpa && (
                      <p className="text-sm font-medium mt-1">
                        CGPA: <span className="text-primary">{item.gpa}/10</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-3 text-primary" />
                Certifications
              </h3>

            <div className='max-h-[400px] overflow-y-auto'>
              <div className="space-y-4">
                {certificatesData.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 0.1 + index * 0.1)}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                  >
                    <Card className="p-5 mr-2 h-full hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary w-6 h-6">
                  <path d="M8.21 13.89 7 23l-2-2-2-2 9.1-1.21a1.39 1.39 0 0 0-.18-2.68L5 13.5l2.5-2.5a1.39 1.39 0 0 0-2-2L3 11.5l-1.9-7.2a1.39 1.39 0 0 0-2.68.18L2 15l2 2 2 2 9.5 1-1.26-4.27a1.39 1.39 0 0 0-2.03-1.84Z" />
                  <path d="M2 15h7.5" />
                  <path d="m11.13 13.77-.13.23" />
                </svg>
                Achievements
              </h3>

              <div className="space-y-4">
                {achievementsData.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 0.1 + index * 0.1)}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                  >
                    <Card className="p-5 hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}