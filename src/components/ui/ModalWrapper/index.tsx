import { FC, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { supabase } from '../../../supabase/supabaseConfig'
import toast from 'react-hot-toast'
// Importar o Resend

// Inicializar o Resend (você precisará de uma API key)

// Componentes estilizados para o formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 450px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const FormDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1rem 0;
  text-align: center;
  line-height: 1.5;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const InputHint = styled.span`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.25rem;
`;

const PrivacyNote = styled.p`
  font-size: 0.8rem;
  color: #777;
  text-align: center;
  margin: 0.5rem 0;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SendIcon = styled.span`
  margin-left: 8px;
  
  &:before {
    content: "→";
  }
`;

// Componentes estilizados para a mensagem de sucesso
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 450px;
`;

const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;
`;

const SuccessMessage = styled.div`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  p {
    margin: 0.5rem 0;
  }
`;

const EmailHighlight = styled.div`
  font-weight: 600;
  color: #4a90e2;
  background-color: rgba(74, 144, 226, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0.75rem 0;
  word-break: break-all;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const ModalContent = styled.div`
 
`


interface ModalWrapperProps {
  title: string
  subtitle: string
  buttonTitle: string
  onClick: () => void
  result: number
  type: string
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  subtitle,
  buttonTitle,
  onClick,
  result,
  type,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(true)
  const [emailSent, setEmailSent] = useState(false)

  const getResultText = (type: string, totalResult: number): string => {
    switch (type) {
      case 'Ansiedade':
        if (totalResult <= 5) {
          return "Ausência ou Mínima Ansiedade: Sugere que você está se sentindo bastante calmo e tranquilo no momento. Você não está experimentando ansiedade significativa neste momento. Isso é positivo e indica um estado emocional mais relaxado. A ausência de ansiedade é benéfica para sua saúde mental e bem-estar geral.";
        } else if (totalResult >= 6 && totalResult <= 10) {
          return "Ansiedade Leve a Moderada: Sugere que você está experimentando algum grau de ansiedade, mas ainda consegue lidar com isso de maneira razoável. Pode ser que você esteja enfrentando situações que o deixem um pouco nervoso, mas isso não está fora de controle. A ansiedade leve a moderada é comum e, em muitos casos, pode ser gerenciada com estratégias simples, como a prática de técnicas de relaxamento e o estabelecimento de hábitos saudáveis.";
        } else if (totalResult >= 11 && totalResult <= 15) {
          return "Ansiedade Moderada a Alta: Você está enfrentando um nível moderado a alto de ansiedade. Isso significa que você pode estar se sentindo significativamente ansioso em relação a várias situações. A ansiedade moderada a alta pode afetar sua qualidade de vida, causando desconforto e preocupação. É importante explorar maneiras de reduzir o estresse e a ansiedade em sua vida diária, como a prática de exercícios físicos e a busca de apoio social.";
        } else {
          return "Ansiedade Alta ou Intensa: Indica que você está experimentando ansiedade em um nível alto ou intenso. Isso pode indicar uma ansiedade significativa que está afetando sua vida diária e bem-estar emocional. A ansiedade intensa pode se manifestar em sintomas físicos e emocionais, como tensão muscular, insônia e preocupação constante. É crucial buscar apoio de um profissional de saúde mental para ajudar a gerenciar a ansiedade e desenvolver estratégias de enfrentamento eficazes.";
        }
  
      case 'Depressão':
        if (totalResult <= 4) {
          return "Ausência ou Mínima Depressão: Isso geralmente significa que você não está experimentando sintomas significativos de depressão. Isso é uma boa notícia! No entanto, é importante lembrar que todos têm momentos em que se sentem tristes ou preocupados, e isso é uma parte normal da vida.";
        } else if (totalResult >= 5 && totalResult <= 9) {
          return "Depressão Leve: Você pode estar passando por um período de tristeza ou preocupação, mas não necessariamente uma depressão grave. É importante reconhecer que a depressão não é apenas uma questão de 'ficar triste'; é uma condição de saúde mental que pode ser causada por uma combinação de fatores.";
        } else if (totalResult >= 10 && totalResult <= 14) {
          return "Depressão Moderada: Isso sugere que você está experimentando sintomas moderados de depressão. É importante entender que a depressão é uma condição tratável e que o tratamento pode melhorar significativamente a qualidade de vida.";
        } else {
          return "Depressão Grave: Isso indica sintomas graves de depressão. A depressão grave é uma condição médica séria que requer intervenção imediata. Educar-se sobre os riscos associados à depressão, como o aumento do risco de suicídio, é essencial.";
        }
  
      case 'Stress':
        if (totalResult <= 13) {
          return "Stress Mínimo: Isso sugere que, em geral, você está se sentindo relativamente bem e lidando bem com o estresse. É normal enfrentar desafios ocasionais na vida, mas parece que o estresse não está tendo um impacto significativo em sua vida cotidiana.";
        } else if (totalResult >= 14 && totalResult <= 26) {
          return "Stress Moderado: Você pode estar enfrentando um nível moderado a alto de estresse em sua vida. É importante prestar atenção a isso e considerar estratégias para gerenciar o estresse. O estresse, quando persistente, pode afetar sua saúde física e emocional.";
        } else {
          return "Stress Alto: Você está enfrentando um nível significativamente alto de estresse em várias áreas de sua vida. É fundamental reconhecer que o estresse crônico pode ter sérias consequências para sua saúde física e mental. Nesse ponto, é altamente recomendável buscar apoio e orientação de um profissional de saúde mental ou terapeuta.";
        }
  
      case 'Inteligencia_Emocional':
        if (totalResult >= 15 && totalResult <= 30) {
          return "Baixo nível de inteligência emocional: Se a sua pontuação total está nessa faixa, isso sugere que você pode ter desafios significativos na área de inteligência emocional. Você pode ter dificuldades em reconhecer e gerenciar suas próprias emoções, bem como em entender e lidar com as emoções dos outros.";
        } else if (totalResult >= 31 && totalResult <= 45) {
          return "Nível em desenvolvimento de inteligência emocional: Se sua pontuação está nessa faixa, isso indica que você está em um estágio intermediário em termos de inteligência emocional. Você pode ter alguma consciência de suas próprias emoções e ser capaz de gerenciá-las de forma razoável.";
        } else if (totalResult >= 46 && totalResult <= 60) {
          return "Nível intermediário de inteligência emocional: Se sua pontuação se encaixa nessa faixa, você demonstra habilidades sólidas em várias áreas da inteligência emocional. Você provavelmente tem uma boa compreensão de suas próprias emoções e é capaz de gerenciá-las de maneira eficaz.";
        } else {
          return "Alto nível de inteligência emocional: Se sua pontuação está dentro dessa faixa, isso indica um alto nível de inteligência emocional. Você é altamente consciente de suas próprias emoções e capaz de gerenciá-las eficazmente.";
        }
  
      case 'Solidão':
        if (totalResult >= 10 && totalResult <= 20) {
          return "Solidão Leve: Você pode experimentar um nível leve de solidão e isolamento social. Você provavelmente faz muitas atividades sozinho ocasionalmente, mas, no geral, tem algumas conexões sociais que o ajudam a evitar a solidão constante.";
        } else if (totalResult >= 21 && totalResult <= 30) {
          return "Isolamento Social Moderado: Você está enfrentando um isolamento social moderado. Você sente a falta de interações sociais em sua vida, experimentando momentos frequentes de solidão. Isso pode afetar seu bem-estar emocional e, potencialmente, sua saúde física.";
        } else if (totalResult >= 31 && totalResult <= 40) {
          return "Solidão Significativa: Você provavelmente sente uma falta constante de conexões sociais e pode se sentir incompreendido e excluído com frequência. A solidão nesse nível pode ter um impacto substancial na sua saúde mental e emocional, bem como na sua saúde física.";
        } else if (totalResult >= 41 && totalResult <= 50) {
          return "Isolamento Extremo: A solidão é uma parte constante de sua vida, e você pode se sentir incapaz de estabelecer conexões significativas com outras pessoas. Esse nível de isolamento é preocupante e pode ter sérias repercussões para sua saúde mental, emocional e física.";
        } else {
          return "Isolamento Crítico: Você está vivenciando uma solidão profunda e contínua, com poucas ou nenhuma interação social significativa. Esse estado é extremamente preocupante e pode ter consequências graves para sua saúde mental e física.";
        }
  
      case 'Auto_Eficácia':
        if (totalResult >= 10 && totalResult <= 20) {
          return "Baixa Autoeficácia: Sua autoeficácia percebida é baixa. Isso pode indicar que você pode ter dificuldade em acreditar em sua capacidade de lidar com desafios e adversidades. Considere trabalhar em estratégias para aumentar sua confiança e autoestima.";
        } else if (totalResult >= 21 && totalResult <= 30) {
          return "Autoeficácia Moderada: Sua autoeficácia percebida é moderada. Você acredita em sua capacidade de enfrentar alguns desafios, mas pode haver áreas onde você sente menos confiança. Trabalhar na construção de habilidades e autoconfiança nessas áreas específicas pode ser benéfico.";
        } else if (totalResult >= 31 && totalResult <= 40) {
          return "Autoeficácia Razoavelmente Alta: Sua autoeficácia percebida é razoavelmente alta. Você tem uma crença saudável em sua capacidade de enfrentar desafios e superar obstáculos na vida. Continue a nutrir essa confiança e aplique-a em várias áreas da sua vida.";
        } else {
          return "Autoeficácia Muito Alta: Sua autoeficácia percebida é muito alta. Você acredita fortemente em sua capacidade de lidar com uma ampla variedade de situações. Isso é um ótimo sinal de confiança e resiliência. Continue a aplicar essa atitude positiva em todas as áreas da vida.";
        }
  
      case 'Preocupação':
        if (totalResult >= 16 && totalResult <= 32) {
          return "Preocupação Mínima: Indicam um nível mínimo de preocupação habitual. A pessoa pode não ser propensa a preocupações excessivas ou crônicas.";
        } else if (totalResult >= 33 && totalResult <= 49) {
          return "Preocupação Moderada: Indicam um nível moderado de preocupação habitual. A pessoa pode ocasionalmente experimentar preocupações, mas elas não dominam sua vida.";
        } else if (totalResult >= 50 && totalResult <= 64) {
          return "Preocupação Moderadamente Elevada: Sugerem um nível moderadamente elevado de preocupação habitual. A pessoa pode ter uma tendência a se preocupar com frequência, o que pode causar desconforto, mas isso não necessariamente indica um distúrbio de ansiedade.";
        } else {
          return "Preocupação Significativamente Elevada: Indicam um nível significativamente elevado de preocupação habitual. A pessoa pode estar em maior risco de desenvolver um distúrbio de ansiedade generalizada. A preocupação crônica pode estar afetando negativamente sua qualidade de vida e funcionamento diário.";
        }
  
      case 'Ruminação':
        if (totalResult >= 10 && totalResult <= 20) {
          return "Baixa Ruminação: Pontuações nesta faixa indicam um baixo envolvimento em estratégias cognitivas ruminativas. Isso sugere que a pessoa tende a não se envolver muito em pensamentos repetitivos ou ruminação.";
        } else if (totalResult >= 21 && totalResult <= 30) {
          return "Ruminação Moderada: Pontuações nesta faixa indicam um envolvimento moderado em estratégias cognitivas ruminativas. A pessoa ocasionalmente pode se envolver em pensamentos repetitivos, mas não com muita frequência.";
        } else if (totalResult >= 31 && totalResult <= 40) {
          return "Ruminação Significativa: Pontuações nesta faixa indicam um envolvimento significativo em estratégias cognitivas ruminativas. A pessoa é mais propensa a se envolver em pensamentos repetitivos e pode ter dificuldade em parar de pensar em situações difíceis.";
        } else {
          return "Alta Ruminação: Pontuações nesta faixa indicam um alto envolvimento em estratégias cognitivas ruminativas. Isso sugere que a pessoa tende a se envolver frequentemente em pensamentos repetitivos e pode ter uma tendência mais pronunciada à ruminação.";
        }
  
      case 'Personalidade':
        if (totalResult >= 8 && totalResult <= 10) {
          return "Adaptável e Prestativo: Você é uma pessoa flexível e prestativa, que se adapta bem a diferentes situações e desafios. Ajudar os outros e contribuir para a comunidade são fontes de grande satisfação para você.";
        } else if (totalResult >= 11 && totalResult <= 18) {
          return "Reservado(a) e Criativo(a): Sua personalidade é marcada por uma reserva natural e uma forte veia criativa. Você prefere ambientes sociais mais íntimos, onde se sente mais à vontade para expressar suas ideias.";
        } else if (totalResult >= 19 && totalResult <= 26) {
          return "Social e Empático(a): Você se destaca por sua habilidade de se conectar com outras pessoas e entender suas emoções. Sua empatia e compaixão fazem de você um ótimo amigo(a) e colega de trabalho.";
        } else if (totalResult >= 27 && totalResult <= 34) {
          return "Observador(a) e Reflexivo(a): Você é uma pessoa introspectiva e pensativa, que prefere analisar situações profundamente antes de tomar decisões. Valorizando o conhecimento e a aprendizagem contínua, você encontra inspiração em experiências criativas e culturais.";
        } else {
          return "Orientado para a Ação: Você é uma pessoa prática e determinada, que gosta de enfrentar desafios de frente e buscar soluções rápidas e eficazes. A sua abordagem direta ajuda a resolver problemas com eficiência, e você se sente motivado(a) por metas claras e concretas.";
        }
  
      default:
        return "Tipo de teste não reconhecido.";
    }
  };

  
const sendEmail = async (userEmail: string, userName: string, testType: string, resultText: string) => {
  try {
    // Em desenvolvimento local, a URL da API será diferente da URL em produção
    // Para testes locais com vercel dev, use /api/send-email
    // Em produção na Vercel, também use /api/send-email
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        testType,
        resultText,
      }),
    });

    // Verificar se a resposta é JSON antes de tentar fazer o parse
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Falha ao enviar email');
      }
      
      return true;
    } else {
      // Se não for JSON, obter o texto da resposta para depuração
      const textResponse = await response.text();
      console.error('Resposta não-JSON do servidor:', textResponse);
      throw new Error('Resposta inesperada do servidor');
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const resultText = getResultText(type, result);

    try {
      // 1. Salvar no Supabase
      const { error } = await supabase
        .from('testes')
        .insert([
          { name, email, result: resultText }
        ]);

      if (error) throw error;
      
      // 2. Enviar email com o resultado
      const emailSent = await sendEmail(email, name, type, resultText);
      
      if (emailSent) {
        setEmailSent(true);
        setShowForm(false);
        toast.success('Resultado enviado para seu email com sucesso!');
      } else {
        toast.error('Não foi possível enviar o email. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao processar resultado:', error);
      toast.error('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        
        {showForm ? (
  <Form onSubmit={handleSubmit}>
    <FormTitle>Receba seu resultado por email</FormTitle>
    <FormDescription>
      Preencha os campos abaixo para receber uma análise detalhada do seu teste.
    </FormDescription>
    
    <InputGroup>
      <InputLabel>Nome completo</InputLabel>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome completo"
        required
      />
    </InputGroup>
    
    <InputGroup>
      <InputLabel>Email</InputLabel>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="exemplo@email.com"
        required
      />
      <InputHint>Enviaremos o resultado para este email</InputHint>
    </InputGroup>
    
    <PrivacyNote>
      Seus dados estão seguros e não serão compartilhados com terceiros.
    </PrivacyNote>
    
    <ButtonContainer>
      <Button 
        text={buttonTitle} 
        onClick={handleSubmit} 
        bold 
        big 
        icon={<SendIcon />}
      />
    </ButtonContainer>
  </Form>
) : (
  <SuccessContainer>
    <SuccessIcon>✓</SuccessIcon>
    <SuccessTitle>Resultado enviado com sucesso!</SuccessTitle>
    <SuccessMessage>
      <p>Seu resultado detalhado foi enviado para:</p>
      <EmailHighlight>{email}</EmailHighlight>
      <p>Verifique sua caixa de entrada e pasta de spam.</p>
    </SuccessMessage>
    <ButtonContainer>
      <Button text="Fechar" onClick={onClick} bold big />
    </ButtonContainer>
  </SuccessContainer>
)}
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalWrapper;