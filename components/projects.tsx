'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn, fadeIn } from '@/lib/utils';

const projectsData = [
  {
    title: 'CMRTC Cafeteria Website',
    description: 'A modern web application for managing food orders at CMR College cafeteria. This system allows students to order food from multiple stalls and track their orders in real-time.',
    image: '/cafeteria.png',
    tags: ['Next.js', 'Supabase', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Eshwar7325/CMRTC_Cafeteria',
    demo: 'https://cmrtc-cafeteria.vercel.app',
  },
  {
    title: 'Plant Disease Detection',
    description: 'Developed a deep learning-based plant disease detection system using CNNs in Python and Streamlit, leveraging neuron wise and layer-wise visualization for accurate classification of leaf diseases.',
    image: '/plant.png',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit'],
    github: 'https://github.com/Eshwar7325/Plant-Disease-Detection',
    demo: 'https://plant-disease-detection-dl.streamlit.app',
  },
  {
    title: 'SAFE (Safety Alert For Finite Environment)',
    description: 'Developed SAFE, a safety platform prototyped during SIH, featuring real-time tracking, emergency alerts, and secure communication channels to enhance women\'s safety and improve response efficiency.',
    image: './safe.png',
    tags: ['HTML', 'CSS', 'JS', 'Flask'],
    github: 'https://github.com/Eshwar7325/SAFE',
    demo: 'https://safe-656r.onrender.com',
  },
  {
    title: 'Spotify Clone Website',
    description: 'A clone of Spotify using HTML, CSS and JavaScript. This project replicates the core functionalities of Spotify, allowing users to Music player controls (play, pause, next, previous).',
    image: './spotify.png',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/Eshwar7325/SpotifyCLone-Website',
    demo: null,
  },
  {
    title: 'Password Manager',
    description: 'A password manager built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend.',
    image: './password.png',
    tags: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Eshwar7325/Password-Manager',
    demo: 'https://password-manager-indol-nine.vercel.app',
  },
  {
    title: 'Wordle Game',
    description: 'A full-stack Wordle game built with React (frontend) and Node.js/Express (backend).',
    image: './wordle.png',
    tags: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Eshwar7325/Wordle-Game',
    demo: 'https://wordle-game-liard.vercel.app',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section ref={ref} id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="font-rubik text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've worked on, showcasing my skills in web development and AI applications.
          </p>
        </motion.div>

        {/* Mobile view with horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-4 ml-2">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="w-80 flex-shrink-0"
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-gray-800 transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="font-rubik text-lg group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-3">
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-muted/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-3 flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-1.5">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-1.5">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet grid view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-gray-800 transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="font-rubik text-lg group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-3">
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-muted/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-3 flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-1.5">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-1.5">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 text-center"
        >
          <a href="https://github.com/Eshwar7325" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}