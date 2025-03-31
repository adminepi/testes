// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const personalidade: Topic = {
  topic: 'Personalidade',
  level: 'Intermediate',
  totalQuestions: 8,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: 'Ao lidar com desafios, o que você geralmente faz?',
      choices: [
        { choice: "Enfrenta o problema imediatamente, buscando soluções práticas", score: 5 },
        { choice: "Procura ajuda de outras pessoas antes de tomar uma decisão", score: 4 },
        { choice: "Reflete sobre a situação e considera várias opções antes de agir", score: 3 },
        { choice: "Toma seu tempo para entender a situação antes de agir", score: 2 },
        { choice: " Evita o problema inicialmente, esperando que se resolva por si só", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Como você se sente em ambientes sociais?',
      choices: [
        { choice: "Confortável e muitas vezes no centro das atenções", score: 5 },
        { choice: "Observador(a) e silencioso(a), preferindo não chamar a atenção", score: 4 },
        { choice: "Participante ativo(a) nas conversas, mas sem necessariamente buscar destaque", score: 3 },
        { choice: "Prefere ambientes sociais mais íntimos e reservados", score: 2 },
        { choice: "Sente-se ansioso(a) e tenta evitar ao máximo essas situações", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Qual atividade você acredita que traz mais realização?',
      choices: [
        { choice: "Alcançar metas e superar desafios", score: 5 },
        { choice: "Aprender algo novo e aprofundar seu conhecimento", score: 4 },
        { choice: "Criar conexões significativas com outras pessoas", score: 3 },
        { choice: "Expressar sua criatividade em projetos pessoais", score: 2 },
        { choice: "Ajudar os outros e contribuir para a comunidade", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Como você se motiva no dia a dia?',
      choices: [
        { choice: "Estabelecendo metas claras e focando em alcançá-las", score: 5 },
        { choice: " Encontrando inspiração em experiências criativas e culturais", score: 4 },
        { choice: "Valorizando o apoio e a colaboração com os outros", score: 3 },
        { choice: "Buscando equilíbrio emocional e bem-estar", score: 2 },
        { choice: "Mantendo uma rotina estruturada e previsível", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

    {
      question: 'Em situações de conflito, qual é sua abordagem típica?',
      choices: [
        { choice: "Procura resolver o problema diretamente, mesmo que seja confrontador", score: 5 },
        { choice: "Prefere evitar conflitos e buscar soluções pacíficas", score: 4 },
        { choice: "Busca entender as diferentes perspectivas e encontrar um consenso", score: 3 },
        { choice: "Fica aberto(a) ao diálogo, mas prefere observar antes de intervir", score: 2 },
        { choice: "Evita completamente, esperando que o tempo resolva", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

    {
      question: 'Como você equilibra trabalho e lazer?',
      choices: [
        { choice: "Trabalha intensamente e reserva momentos específicos para relaxar", score: 5 },
        { choice: "Mantém um equilíbrio entre trabalho e lazer, adaptando-se conforme necessário", score: 4 },
        { choice: "Valoriza o tempo livre e procura evitar estresse desnecessário", score: 3 },
        { choice: "Alterna entre períodos intensos de trabalho e períodos de descanso completo", score: 2 },
        { choice: "Integra atividades de lazer no dia a dia para evitar desgaste", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

    {
      question: 'Qual característica você mais admira em outras pessoas?',
      choices: [
        { choice: "Coragem e determinação", score: 5 },
        { choice: "Inteligência e criatividade", score: 4 },
        { choice: "Empatia e compaixão", score: 3 },
        { choice: "Honestidade e integridade", score: 2 },
        { choice: "Flexibilidade e adaptabilidade", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },

    {
      question: 'Como você aborda a resolução de problemas complexos?',
      choices: [
        { choice: "Analisa detalhadamente os componentes antes de tomar uma decisão", score: 5 },
        { choice: "Aborda os problemas de maneira prática e direta", score: 4 },
        { choice: "Considera a perspectiva emocional e as relações interpessoais", score: 3 },
        { choice: "Busca soluções inovadoras e fora do convencional", score: 2 },
        { choice: "Divide o problema em partes menores e resolve uma de cada vez", score: 1 },
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    

  ],
}
