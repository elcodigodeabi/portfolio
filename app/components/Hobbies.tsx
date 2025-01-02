'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { translations } from '../utils/translations'

type HobbiesProps = {
  language: 'es' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Hobbies({ language }: HobbiesProps) {
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.hobbies}</h2>
      <Card className="bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>{t.hobbies}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            {t.hobbiesList.map((hobby, index) => (
              <motion.div key={index} className="flex flex-col items-center text-center" variants={itemVariants}>
                <div className="relative w-24 h-24 mb-2">
                  <Image
                    src={`/images/hobbies/${hobby.image}`}
                    alt={hobby.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold">{hobby.name}</h3>
                <p className="text-sm text-gray-300">{hobby.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  )
}

