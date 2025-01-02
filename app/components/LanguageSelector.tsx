'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

type LanguageSelectorProps = {
  onLanguageChange: (language: 'es' | 'en') => void;
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [language, setLanguage] = useState<'es' | 'en'>('es')

  useEffect(() => {
    onLanguageChange(language)
  }, [language, onLanguageChange])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="icon"
        className="bg-blue-700 hover:bg-blue-600 text-white transition-all duration-300 rounded-full relative group"
      >
        <Globe className="h-5 w-5" />
        <span className="sr-only">Cambiar idioma / Change language</span>
        <div className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {language === 'es' ? 'EN' : 'ES'}
        </div>
      </Button>
    </motion.div>
  )
}

