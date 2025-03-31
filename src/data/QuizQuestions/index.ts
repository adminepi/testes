
import { ansiedade } from './ansiedade'
import { depressao } from './depressao'
import { stress } from './stress'
import { inteligenciaEmocional } from './inteligênciaEmocional'
import { solidao } from './solidao'
import { autoeficacia } from './autoeficacia'
import { preocupacao } from './preocupacao'
import { ruminacao } from './ruminacao'
import { personalidade } from './personalidade'


type Choice = {
  choice: string;
  score: number
}[]

type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  Ansiedade: ansiedade,
  Depressão: depressao,
  Stress: stress,
  Inteligencia_Emocional: inteligenciaEmocional,
  Solidão: solidao,
  Auto_Eficácia: autoeficacia,
  Preocupação: preocupacao,
  Ruminação: ruminacao,
  Personalidade: personalidade
}
