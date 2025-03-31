// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const ansiedade: Topic = {
  topic: 'Ansiedade',
  level: 'Intermediate',
  totalQuestions: 5,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: 'Sentimento de Ansiedade',
      choices: [
        { choice: "Nada Ansioso: Você não está experimentando ansiedade neste momento.", score: 1 },
        { choice: "Um pouco Ansioso: Você sente um leve desconforto, mas está relativamente calmo.", score: 2 },
        { choice: " Muito Ansioso: A ansiedade é perceptível, mas não está fora de controle.", score: 3 },
        { choice: "Moderadamente Ansioso: Você está se sentindo ansioso, mas consegue lidar com isso de maneira razoável", score: 4 },
        { choice: "Extremamente Ansioso: Você está experimentando uma ansiedade intensa e quase insuportável", score: 5 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Sentimento de Medo ou Apreensão',
      choices: [
        { choice: " Nada Assustado ou com Medo: Você não está sentindo medo ou apreensão no momento", score: 1 },
        { choice: "Um pouco Assustado ou com Medo: Você está ligeiramente desconfortável, mas não com medo intenso", score: 2 },
        { choice: "Muito Assustado ou com Medo: A sensação de medo ou apreensão é perceptível, mas você consegue controlá-la.", score: 3 },
        { choice: " Moderadamente Assustado ou com Medo: Você está assustado ou com medo, mas não a ponto de entrar em pânico", score: 4 },
        { choice: "Extremamente Assustado ou com Medo: Você está muito assustado ou com medo, quase em pânico.", score: 5 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Preocupação',
      choices: [
        { choice: " Nada Preocupado: Você não está preocupado no momento", score: 1 },
        { choice: " Um pouco Preocupado: Você tem pouca preocupação, sentindo-se relativamente tranquilo", score: 2 },
        { choice: "Muito Preocupado: Há alguma preocupação presente, mas você a controla em certo grau.", score: 3 },
        { choice: " Moderadamente Preocupado: Você está preocupado, mas consegue lidar com seus pensamentos.", score: 4 },
        { choice: " Extremamente Preocupado: Você está extremamente preocupado, com pensamentos intrusivos e ansiedade intensa", score: 5 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Tensão ou Estado de Alerta',
      choices: [
        { choice: " Nada Tenso ou em Alerta: Você não está sentindo tensão ou estado de alerta neste momento.", score: 1 },
        { choice: " Um pouco Tenso ou em Alerta: Você sente leve tensão ou alerta, mas está relativamente calmo.", score: 2 },
        { choice: " Muito Tenso ou em Alerta: Você sente alguma tensão ou alerta, mas consegue administrar", score: 3 },
        { choice: " Moderadamente Tenso ou em Alerta: Você está tenso(a) ou em alerta, mas ainda consegue relaxar um pouco", score: 4 },
        { choice: " Extremamente Tenso ou em Alerta: Você está extremamente tenso(a) ou em estado de alerta constante.", score: 5 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Sentimento de Nervosismo',
      choices: [
        { choice: "Nada Nervoso: Você não está se sentindo nervoso(a) neste momento.", score: 1 },
        { choice: "Um pouco Nervoso: Você sente uma leve inquietação, mas está relativamente tranquilo(a)", score: 2 },
        { choice: "Muito Nervoso: Você está um pouco nervoso(a), mas consegue controlar.", score: 3 },
        { choice: "Moderadamente Nervoso: Você está nervoso(a), mas não está em pânico.", score: 4 },
        { choice: "Extremamente Nervoso: Você está extremamente nervoso(a), com uma sensação intensa de inquietação.", score: 5 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

  ],
}
