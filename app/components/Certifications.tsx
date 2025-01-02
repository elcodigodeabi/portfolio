'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { translations } from '../utils/translations'

type CertificationsProps = {
  language: 'es' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export default function Certifications({ language }: CertificationsProps) {
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.certifications}</h2>
      <Card className="bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>{t.certifications}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            {t.certificationsList.map((cert, index) => (
              <motion.div key={index} className="flex items-center space-x-4" variants={itemVariants}>
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={`/images/certificates/${cert.image}`}
                    alt={cert.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-300">{cert.issuer}</p>
                  <Badge variant="secondary" className="mt-1">{cert.year}</Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  )
}

