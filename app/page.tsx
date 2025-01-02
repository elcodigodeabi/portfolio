'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import ProjectsExperience from './components/ProjectsExperience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Hobbies from './components/Hobbies'
import LanguageSelector from './components/LanguageSelector'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-black text-white relative">
      <LanguageSelector onLanguageChange={setLanguage} />
      <div className="container mx-auto px-4 py-16">
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Introduction language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Skills language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <ProjectsExperience language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Education language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Certifications language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Achievements language={language} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Hobbies language={language} />
        </motion.div>
      </div>
    </div>
  )
}

