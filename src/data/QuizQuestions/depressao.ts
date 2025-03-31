// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const depressao: Topic = {
  topic: 'Depressão',
  level: 'Intermediate',
  totalQuestions: 5,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: 'Nas últimas duas semanas, com que frequência você se sentiu pouco interessado(a) ou sem prazer em fazer coisas?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você se sentiu triste, deprimido(a) ou sem esperança?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você teve dificuldade para dormir, seja por insônia ou dormir demais?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você se sentiu cansado(a) ou com pouca energia?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você teve falta de apetite ou comeu demais?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você se sentiu mal consigo mesmo(a), como se fosse um fracasso, ou que desapontou a si mesmo(a) ou sua família?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você teve dificuldade para se concentrar em atividades como ler, assistir TV ou realizar tarefas?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Nas últimas duas semanas, com que frequência você teve pensamentos de que seria melhor estar morto(a) ou se machucar de alguma forma?',
      choices: [
        { choice: "Nunca", score: 0 },
        { choice: "Algumas vezes (1-7 dias)", score: 1 },
        { choice: "Com frequência (8-13 dias)", score: 2 },
        { choice: "Quase sempre (14 dias)", score: 3 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

  ],
}
