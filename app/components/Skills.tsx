'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { translations } from '../utils/translations'

type SkillsProps = {
  language: 'es' | 'en';
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export default function Skills({ language }: SkillsProps) {
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.skills}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-blue-800 text-white overflow-hidden">
          <CardHeader>
            <CardTitle>{t.softSkills}</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div 
              className="flex flex-wrap gap-2" 
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
              initial="hidden" 
              animate="visible"
            >
              {t.softSkillsList.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <Badge variant="secondary" className="bg-violet-700">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
        <Card className="bg-blue-800 text-white overflow-hidden">
          <CardHeader>
            <CardTitle>{t.hardSkills}</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div 
              className="flex flex-wrap gap-2" 
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
              initial="hidden" 
              animate="visible"
            >
              {t.hardSkillsList.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <Badge variant="default" className="bg-violet-700">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

