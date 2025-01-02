'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { translations } from '../utils/translations'

type IntroductionProps = {
  language: 'es' | 'en';
}

const socialLinks = [
  { icon: Github, href: "https://github.com/elcodigodeabi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/victoria-abi-rached", label: "LinkedIn" },
  { icon: Mail, href: "mailto:glosario2020@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/541130640485", label: "WhatsApp" }
]

export default function Introduction({ language }: IntroductionProps) {
  const t = translations[language]
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isImageError, setIsImageError] = useState(false)

  return (
    <Card className="mb-12 overflow-hidden bg-violet-800 text-white">
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="relative w-full h-[300px] md:h-[400px] md:w-[350px] overflow-hidden bg-gradient-to-b from-violet-900 to-violet-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            {isImageError ? (
              <div className="h-full w-full flex items-center justify-center bg-violet-900">
                <ImageIcon className="h-20 w-20 text-violet-500" />
              </div>
            ) : (
              <>
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-violet-900">
                    <div className="animate-pulse h-full w-full bg-violet-800" />
                  </div>
                )}
                <Image
                  src="/profile/profile-photo.jpg"
                  alt={t.imageAlt}
                  fill
                  className={`object-cover object-center transition-all duration-300 ${
                    isImageLoading ? 'opacity-0' : 'opacity-100 hover:scale-105'
                  }`}
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                  quality={90}
                  onLoadingComplete={() => setIsImageLoading(false)}
                  onError={() => {
                    setIsImageLoading(false)
                    setIsImageError(true)
                  }}
                />
              </>
            )}
          </div>
        </motion.div>
        <CardContent className="p-6 md:p-8 lg:p-12 flex-grow">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t.name}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t.role}
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="icon" 
                  className="bg-blue-700 hover:bg-blue-600 text-white transition-transform hover:scale-110 relative group" 
                  asChild
                >
                  <a 
                    href={link.href} 
                    target={link.icon === Mail ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    title={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {link.label}
                    </div>
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
      </div>
    </Card>
  )
}

