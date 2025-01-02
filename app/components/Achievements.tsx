import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from 'lucide-react'
import { translations } from '../utils/translations'

type AchievementsProps = {
  language: 'es' | 'en';
}

export default function Achievements({ language }: AchievementsProps) {
  const t = translations[language]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{t.achievements}</h2>
      <Card className="bg-blue-800 text-white">
        <CardHeader>
          <CardTitle>{t.achievements}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {t.achievementsList.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Trophy className="h-5 w-5 text-yellow-400 mt-1" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

