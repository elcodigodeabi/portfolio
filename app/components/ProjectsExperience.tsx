'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { translations } from '../utils/translations'

type ProjectsExperienceProps = {
  language: 'es' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ProjectsExperience({ language }: ProjectsExperienceProps) {
  const [activeTab, setActiveTab] = useState("projects")
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.projectsAndExperience}</h2>
      <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">{t.projects}</TabsTrigger>
          <TabsTrigger value="experience">{t.experience}</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Card className="bg-blue-800 text-white">
            <CardHeader>
              <CardTitle>{t.projects}</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate={activeTab === "projects" ? "visible" : "hidden"}
              >
                {t.projectsList.map((project, index) => (
                  <motion.div key={index} className="mb-8" variants={itemVariants}>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/3">
                        <div className="relative w-full h-48 md:h-full">
                          <Image
                            src={`/images/projects/${project.image}`}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="bg-violet-700">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="experience">
          <Card className="bg-blue-800 text-white">
            <CardHeader>
              <CardTitle>{t.experience}</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate={activeTab === "experience" ? "visible" : "hidden"}
              >
                {t.experienceList.map((exp, index) => (
                  <motion.div key={index} className="mb-8" variants={itemVariants}>
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={`/images/projects/${exp.logo}`}
                          alt={exp.company}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p className="font-medium">{exp.role}</p>
                        <p className="text-sm text-gray-300 mb-2">{exp.period}</p>
                        <ul className="list-disc list-inside">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

