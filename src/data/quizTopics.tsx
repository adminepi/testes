import { ReactNode } from 'react'

type QuizTopic = {
  title: string
  icon?: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Ansiedade',
  },
  {
    title: 'Depressão',
  },
  {
    title: 'Stress',
  },
  {
    title: 'Inteligencia_Emocional',
  },
  {
    title: 'Solidão'
  },
  {
    title: 'Auto_Eficácia'
  },
  {
    title: 'Preocupação'
  },
  {
    title: 'Ruminação'
  },
  {
    title: 'Personalidade'
  }
  
]
