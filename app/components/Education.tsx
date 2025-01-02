'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { translations } from '../utils/translations'

type EducationProps = {
  language: 'es' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export default function Education({ language }: EducationProps) {
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.education}</h2>
      <Card className="bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>{t.academicBackground}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            {t.educationList.map((edu, index) => (
              <motion.div key={index} className="mb-4 flex items-center gap-4" variants={itemVariants}>
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={`/images/education/${edu.image}`}
                    alt={edu.institution}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p className="text-sm text-gray-300">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  )
}

