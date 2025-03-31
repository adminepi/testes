import { FC } from 'react'
import styled from 'styled-components'

import { device } from '../../../styles/BreakPoints'
import { Result } from '../../../types'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    margin-bottom: 75px;
    font-weight: 500;
    font-size: 18px;
  }
  span {
    color: #666;
    font-size: 12px
  }
`

interface ResultOverviewProps {
  result: Result[]
  type: String;
}

const ResultOverview: FC<ResultOverviewProps> = ({ result, type }) => {
  const totalResult = result.reduce((acc, object) => {
    return Number(acc) + Number(Object.values(object)[0]) as any
  }, 0);



  if (type === 'Ansiedade') {
    return (
      <ResultOverviewStyle>
        {totalResult <= 5 && (
          <>
            <h3>Ausência ou Mínima Ansiedade</h3>
            <p>Sugere que você está se sentindo bastante calmo e tranquilo no momento. Você não está experimentando ansiedade significativa neste momento. Isso é positivo e indica um estado emocional mais relaxado. A ausência de ansiedade é benéfica para sua saúde mental e bem-estar geral.</p>
          </>
        )}
        {totalResult >= 6 && totalResult <= 10 && (
          <>
            <h3>Ansiedade Leve a Moderada</h3>
            <p>Sugere que você está experimentando algum grau de ansiedade, mas ainda consegue lidar com isso de maneira razoável. Pode ser que você esteja enfrentando situações que o deixem um pouco nervoso, mas isso não está fora de controle. A ansiedade leve a moderada é comum e, em muitos casos, pode ser gerenciada com estratégias simples, como a prática de técnicas de relaxamento e o estabelecimento de hábitos saudáveis.</p>
          </>
        )}
        {totalResult >= 11 && totalResult <= 15 && (
          <>
            <h3>Ansiedade Moderada a Alta</h3>
            <p> Você está enfrentando um nível moderado a alto de ansiedade. Isso significa que você pode estar se sentindo significativamente ansioso em relação a várias situações. A ansiedade moderada a alta pode afetar sua qualidade de vida, causando desconforto e preocupação. É importante explorar maneiras de reduzir o estresse e a ansiedade em sua vida diária, como a prática de exercícios físicos e a busca de apoio social.
              .</p>
          </>
        )}
        {totalResult >= 16 && totalResult <= 25 && (
          <>
            <h3>Ansiedade Alta ou Intensa.</h3>
            <p> Indica que você está experimentando ansiedade em um nível alto ou intenso. Isso pode indicar uma ansiedade significativa que está afetando sua vida diária e bem-estar emocional. A ansiedade intensa pode se manifestar em sintomas físicos e emocionais, como tensão muscular, insônia e preocupação constante. É crucial buscar apoio de um profissional de saúde mental para ajudar a gerenciar a ansiedade e desenvolver estratégias de enfrentamento eficazes</p>
          </>
        )}
      </ResultOverviewStyle>
    )
  }

  if (type === 'Depressão') {
    return (
      <ResultOverviewStyle>
        {totalResult <= 4 && (
          <>
            <p>Isso geralmente significa que você não está experimentando sintomas significativos de depressão. Isso é uma boa notícia! No entanto, é importante lembrar que todos têm momentos em que se sentem tristes ou preocupados, e isso é uma parte normal da vida. Ter conhecimento sobre o que é a depressão pode ajudar a diferenciar entre tristeza ocasional e um problema mais sério de saúde mental. A depressão é uma condição médica complexa que afeta não apenas o humor, mas também o pensamento, o comportamento e o funcionamento físico. Educar-se sobre os sintomas e as causas da depressão pode ser útil para identificar quando é apropriado procurar ajuda</p>
            <span className='font-thin text-[#666]'>
              Lembre-se de que o PHQ-9 é uma ferramenta de triagem inicial e não um diagnóstico definitivo. Se você tiver preocupações com base em sua pontuação, é fundamental compartilhá-las com um profissional de saúde. Eles podem fornecer suporte, diagnóstico e um plano de tratamento, se necessário, para ajudar a melhorar sua saúde mental. Não hesite em buscar ajuda; muitas pessoas se recuperam com o tratamento adequado.
            </span>
          </>
        )}
        {totalResult >= 5 && totalResult <= 9 && (
          <>
            <p>Você pode estar passando por um período de tristeza ou preocupação, mas não necessariamente uma depressão grave. É importante reconhecer que a depressão não é apenas uma questão de "ficar triste"; é uma condição de saúde mental que pode ser causada por uma combinação de fatores, incluindo predisposição genética, desequilíbrios químicos no cérebro, estresse, trauma e eventos de vida significativos. Educar-se sobre a depressão pode ajudar a compreender melhor esses fatores e a importância de buscar apoio emocional ou profissional quando necessário.</p>
            <span className='font-thin text-[#666] text-sm mt-12'>
              Lembre-se de que o PHQ-9 é uma ferramenta de triagem inicial e não um diagnóstico definitivo. Se você tiver preocupações com base em sua pontuação, é fundamental compartilhá-las com um profissional de saúde. Eles podem fornecer suporte, diagnóstico e um plano de tratamento, se necessário, para ajudar a melhorar sua saúde mental. Não hesite em buscar ajuda; muitas pessoas se recuperam com o tratamento adequado.
            </span>
          </>

        )}
        {totalResult >= 10 && totalResult <= 14 && (
          <>
            <p>Isso sugere que você está experimentando sintomas moderados de depressão. É importante entender que a depressão é uma condição tratável e que o tratamento pode melhorar significativamente a qualidade de vida. A educação desempenha um papel vital no processo de busca de ajuda. Saber que a depressão não é sinal de fraqueza ou falta de força de vontade, mas sim uma condição médica legítima, é fundamental para reduzir o estigma em torno da saúde mental. Além disso, conhecer os recursos disponíveis, como terapeutas, psiquiatras e grupos de apoio, pode ajudar a orientar as pessoas na direção certa para obter ajuda e tratamento
              .</p>
            <span className='font-thin text-[#666]'>
              Lembre-se de que o PHQ-9 é uma ferramenta de triagem inicial e não um diagnóstico definitivo. Se você tiver preocupações com base em sua pontuação, é fundamental compartilhá-las com um profissional de saúde. Eles podem fornecer suporte, diagnóstico e um plano de tratamento, se necessário, para ajudar a melhorar sua saúde mental. Não hesite em buscar ajuda; muitas pessoas se recuperam com o tratamento adequado.
            </span>
          </>
        )}
        {totalResult >= 15 && (
          <>
            <p> Isso indica sintomas graves de depressão. A depressão grave é uma condição médica séria que requer intervenção imediata. Educar-se sobre os riscos associados à depressão, como o aumento do risco de suicídio, é essencial. A depressão é tratável, mas o tratamento adequado é urgente nessas situações. É fundamental que indivíduos com sintomas graves de depressão procurem ajuda profissional, pois o tratamento pode envolver terapia, medicação ou uma combinação de ambos. A conscientização sobre a depressão é crucial não apenas para aqueles que a enfrentam, mas também para amigos, familiares e colegas, a fim de oferecer o apoio necessário.</p>
            <span className='font-thin text-[#666]'>
              Lembre-se de que o PHQ-9 é uma ferramenta de triagem inicial e não um diagnóstico definitivo. Se você tiver preocupações com base em sua pontuação, é fundamental compartilhá-las com um profissional de saúde. Eles podem fornecer suporte, diagnóstico e um plano de tratamento, se necessário, para ajudar a melhorar sua saúde mental. Não hesite em buscar ajuda; muitas pessoas se recuperam com o tratamento adequado.
            </span>
          </>
        )}
      </ResultOverviewStyle>
    )
  }

  if (type === 'Stress') {
    return (
      <ResultOverviewStyle>
        {totalResult <= 13 && (
          <>
            <p>Isso sugere que, em geral, você está se sentindo relativamente bem e lidando bem com o estresse. É normal enfrentar desafios ocasionais na vida, mas parece que o estresse não está tendo um impacto significativo em sua vida cotidiana. Isso é uma boa notícia! Lembre-se de que o estresse é uma parte natural da vida, e lidar bem com ele pode ajudar a fortalecer sua resiliência e saúde mental</p>
          </>
        )}
        {totalResult >= 14 && totalResult <= 26 && (
          <>
            <p>Se você obteve uma pontuação nesta faixa, isso indica que você pode estar enfrentando um nível moderado a alto de estresse em sua vida. É importante prestar atenção a isso e considerar estratégias para gerenciar o estresse. O estresse, quando persistente, pode afetar sua saúde física e emocional, por isso é essencial buscar maneiras de enfrentá-lo. Isso pode incluir atividades como exercícios, técnicas de relaxamento, meditação ou até mesmo conversar com alguém de confiança sobre suas preocupações. A busca de apoio social e o autocuidado desempenham um papel crucial nesta fase.</p>
          </>

        )}
        {totalResult >= 27 && totalResult <= 40 && (
          <>
            <p>Uma pontuação nesta faixa sugere que você está enfrentando um nível significativamente alto de estresse em várias áreas de sua vida. É fundamental reconhecer que o estresse crônico pode ter sérias consequências para sua saúde física e mental. Nesse ponto, é altamente recomendável buscar apoio e orientação de um profissional de saúde mental ou terapeuta. Eles são especializados em ajudar as pessoas a desenvolver estratégias personalizadas para lidar com o estresse e melhorar seu bem-estar emocional. Não hesite em procurar ajuda, pois isso pode ser um passo importante em direção a uma vida mais equilibrada e saudável.

              Lembre-se de que o Questionário de Stress Percebido mede como você percebe o estresse, mas não é um diagnóstico médico. Se você estiver preocupado com seus níveis de estresse ou sentir que isso está afetando sua vida de maneira negativa, não hesite em buscar ajuda. Profissionais de saúde estão disponíveis para fornecer o apoio necessário e ajudar você a se sentir melhor.
            </p>

          </>
        )}

      </ResultOverviewStyle>
    )
  }


  if (type === 'Inteligencia_Emocional') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 15 && totalResult <= 30 && (
          <>
            <h1>Baixo nível de inteligência emocional</h1>
            <p>Se a sua pontuação total está nessa faixa, isso sugere que você pode ter desafios significativos na área de inteligência emocional. Você pode ter dificuldades em reconhecer e gerenciar suas próprias emoções, bem como em entender e lidar com as emoções dos outros. Isso pode afetar negativamente suas interações interpessoais e seu bem-estar emocional. No entanto, é importante lembrar que a inteligência emocional pode ser desenvolvida e aprimorada com esforço e prática.
            </p>
          </>
        )}
        {totalResult >= 31 && totalResult <= 45 && (
          <>
            <h1>Nível em desenvolvimento de inteligência emocional</h1>
            <p>Se sua pontuação está nessa faixa, isso indica que você está em um estágio intermediário em termos de inteligência emocional. Você pode ter alguma consciência de suas próprias emoções e ser capaz de gerenciá-las de forma razoável. No entanto, ainda há espaço para crescimento, especialmente no que diz respeito à compreensão das emoções dos outros e à empatia. Continuar a desenvolver suas habilidades emocionais pode levar a relacionamentos mais saudáveis e bem-estar emocional.</p>
          </>
        )}
        {totalResult >= 46 && totalResult <= 60 && (
          <>
            <h1>Nível intermediário de inteligência emocional</h1>
            <p>Se sua pontuação se encaixa nessa faixa, você demonstra habilidades sólidas em várias áreas da inteligência emocional. Você provavelmente tem uma boa compreensão de suas próprias emoções e é capaz de gerenciá-las de maneira eficaz. Além disso, você pode ser capaz de demonstrar empatia e compreender as emoções dos outros. No entanto, ainda há espaço para aprimoramento e crescimento em algumas áreas específicas</p>
          </>
        )}
        {totalResult >= 61 && totalResult <= 75 && (
          <>
            <h1>Alto nível de inteligência emocional</h1>
            <p>Se sua pontuação está dentro dessa faixa, isso indica um alto nível de inteligência emocional. Você é altamente consciente de suas próprias emoções e capaz de gerenciá-las eficazmente. Além disso, você demonstra uma compreensão profunda das emoções dos outros e é capaz de criar relacionamentos interpessoais saudáveis e gratificantes. Ter um alto nível de inteligência emocional pode ser uma vantagem significativa em termos de sucesso pessoal e profissional.</p>
          </>
        )}


      </ResultOverviewStyle>
    )
  }




  if (type === 'Solidão') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 10 && totalResult <= 20 && (
          <>
            <h1>Solidão Leve</h1>
            <p>Se suas respostas indicarem principalmente "Raramente" ou "Às vezes" nas questões, isso sugere que você pode experimentar um nível leve de solidão e isolamento social. Você provavelmente faz muitas atividades sozinho ocasionalmente, mas, no geral, tem algumas conexões sociais que o ajudam a evitar a solidão constante. No entanto, é importante continuar a cuidar de sua saúde emocional e mental para evitar que essa solidão aumente.</p>
          </>
        )}
        {totalResult >= 21 && totalResult <= 30 && (
          <>
            <h1>Isolamento Social Moderado</h1>
            <p>Se suas respostas tiverem muitos "Às vezes" e algumas "Raramente", isso pode indicar que você está enfrentando um isolamento social moderado. Você sente a falta de interações sociais em sua vida, experimentando momentos frequentes de solidão. Isso pode afetar seu bem-estar emocional e, potencialmente, sua saúde física. É aconselhável procurar oportunidades para se conectar com outras pessoas e fortalecer seus laços sociais.</p>
          </>
        )}
        {totalResult >= 31 && totalResult <= 40 && (
          <>
            <h1>Solidão Significativa</h1>
            <p>Se a maioria das suas respostas for "Às vezes" ou "Frequentemente", isso pode ser um sinal de solidão significativa e isolamento social. Você provavelmente sente uma falta constante de conexões sociais e pode se sentir incompreendido e excluído com frequência. A solidão nesse nível pode ter um impacto substancial na sua saúde mental e emocional, bem como na sua saúde física. É fundamental buscar apoio, seja por meio de terapia, grupos sociais ou atividades que possam ajudar a reduzir essa sensação de isolamento.</p>
          </>
        )}
        {totalResult >= 41 && totalResult <= 50 && (
          <>
            <h1>Isolamento Extremo</h1>
            <p>Se a maioria de suas respostas for "Frequentemente" ou "Sempre", isso sugere um nível extremo de isolamento social. A solidão é uma parte constante de sua vida, e você pode se sentir incapaz de estabelecer conexões significativas com outras pessoas. Esse nível de isolamento é preocupante e pode ter sérias repercussões para sua saúde mental, emocional e física. É crucial procurar ajuda profissional, como um terapeuta, e explorar maneiras de se conectar com os outros e construir relacionamentos saudáveis.</p>
          </>
        )}

        {totalResult >= 51 && totalResult <= 60 && (
          <>
            <h1>Isolamento Crítico</h1>
            <p>Se todas ou quase todas as suas respostas foram "Sempre", isso indica um nível crítico de isolamento social. Você está vivenciando uma solidão profunda e contínua, com poucas ou nenhuma interação social significativa. Esse estado é extremamente preocupante e pode ter consequências graves para sua saúde mental e física. Procurar ajuda imediata de profissionais de saúde mental e encontrar maneiras de reestabelecer conexões sociais é essencial.
              Independentemente do seu resultado, lembre-se de que a solidão e o isolamento social são desafios comuns que muitas pessoas enfrentam em algum momento da vida. Não hesite em buscar apoio e se envolver em atividades que possam melhorar sua qualidade de vida e bem-estar.
            </p>
          </>
        )}


      </ResultOverviewStyle>
    )
  }


  if (type === 'Auto_Eficácia') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 10 && totalResult <= 20 && (
          <>
            <p>Sua autoeficácia percebida é baixa. Isso pode indicar que você pode ter dificuldade em acreditar em sua capacidade de lidar com desafios e adversidades. Considere trabalhar em estratégias para aumentar sua confiança e autoestima.</p>
          </>
        )}
        {totalResult >= 21 && totalResult <= 30 && (
          <>
            <p>Sua autoeficácia percebida é moderada. Você acredita em sua capacidade de enfrentar alguns desafios, mas pode haver áreas onde você sente menos confiança. Trabalhar na construção de habilidades e autoconfiança nessas áreas específicas pode ser benéfico.</p>
          </>
        )}

        {totalResult >= 31 && totalResult <= 40 && (
          <>
            <p>Sua autoeficácia percebida é razoavelmente alta. Você tem uma crença saudável em sua capacidade de enfrentar desafios e superar obstáculos na vida. Continue a nutrir essa confiança e aplique-a em várias áreas da sua vida.</p>
          </>
        )}
        {totalResult >= 41 && totalResult <= 50 && (
          <>
            <p> Sua autoeficácia percebida é muito alta. Você acredita fortemente em sua capacidade de lidar com uma ampla variedade de situações. Isso é um ótimo sinal de confiança e resiliência. Continue a aplicar essa atitude positiva em todas as áreas da vida.
            </p>
          </>
        )}


      </ResultOverviewStyle>
    )
  }


  if (type === 'Preocupação') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 16 && totalResult <= 32 && (
          <>
            <p>Indicam um nível mínimo de preocupação habitual.
              A pessoa pode não ser propensa a preocupações excessivas ou crônicas.
            </p>
          </>
        )}
        {totalResult >= 33 && totalResult <= 49 && (
          <>
            <p>Indicam um nível moderado de preocupação habitual.
              A pessoa pode ocasionalmente experimentar preocupações, mas elas não dominam sua vida.
            </p>
          </>
        )}

        {totalResult >= 50 && totalResult <= 64 && (
          <>
            <p>Sugerem um nível moderadamente elevado de preocupação habitual.
              A pessoa pode ter uma tendência a se preocupar com frequência, o que pode causar desconforto, mas isso não necessariamente indica um distúrbio de ansiedade.
            </p>
          </>
        )}
        {totalResult >= 65 && totalResult <= 80 && (
          <>
            <p>Indicam um nível significativamente elevado de preocupação habitual.
              A pessoa pode estar em maior risco de desenvolver um distúrbio de ansiedade generalizada.
              A preocupação crônica pode estar afetando negativamente sua qualidade de vida e funcionamento diário.
            </p>
          </>
        )}


      </ResultOverviewStyle>
    )
  }

  if (type === 'Ruminação') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 10 && totalResult <= 20 && (
          <>
            <p>Pontuações nesta faixa indicam um baixo envolvimento em estratégias cognitivas ruminativas. Isso sugere que a pessoa tende a não se envolver muito em pensamentos repetitivos ou ruminação
            </p>
          </>
        )}
        {totalResult >= 21 && totalResult <= 30 && (
          <>
            <p>Pontuações nesta faixa indicam um envolvimento moderado em estratégias cognitivas ruminativas. A pessoa ocasionalmente pode se envolver em pensamentos repetitivos, mas não com muita frequência.
            </p>
          </>
        )}

        {totalResult >= 31 && totalResult <= 40 && (
          <>
            <p>Pontuações nesta faixa indicam um envolvimento significativo em estratégias cognitivas ruminativas. A pessoa é mais propensa a se envolver em pensamentos repetitivos e pode ter dificuldade em parar de pensar em situações difíceis.
            </p>
          </>
        )}
        {totalResult >= 41 && totalResult <= 50 && (
          <>
            <p>Pontuações nesta faixa indicam um alto envolvimento em estratégias cognitivas ruminativas. Isso sugere que a pessoa tende a se envolver frequentemente em pensamentos repetitivos e pode ter uma tendência mais pronunciada à ruminação.
            </p>

          </>
        )}


      </ResultOverviewStyle>
    )
  }


  if (type === 'Personalidade') {
    return (
      <ResultOverviewStyle>
        {totalResult >= 8 && totalResult <= 10 && (
          <>
            <h1>Adaptável e Prestativo</h1>
            <p>Você é uma pessoa flexível e prestativa, que se adapta bem a diferentes situações e desafios. Ajudar os outros e contribuir para a comunidade são fontes de grande satisfação para você. Em ambientes sociais, embora possa sentir alguma ansiedade, você se esforça para estar presente e apoiar quem precisa. No trabalho, sua adaptabilidade permite que você lide bem com mudanças e mantenha uma rotina estruturada que promove a eficiência. No lazer, você integra atividades relaxantes ao seu cotidiano, evitando o desgaste e garantindo um equilíbrio saudável entre trabalho e vida pessoal.
            </p>
          </>
        )}
        {totalResult >= 11 && totalResult <= 18 && (
          <>
            <h1>Reservado(a) e Criativo(a)</h1>
            <p>Sua personalidade é marcada por uma reserva natural e uma forte veia criativa. Você prefere ambientes sociais mais íntimos, onde se sente mais à vontade para expressar suas ideias. Evitando estresse desnecessário, você busca equilíbrio emocional e bem-estar em seu dia a dia. Sua criatividade se manifesta em projetos pessoais, onde você pode explorar suas paixões sem pressões externas. No trabalho, você é inovador(a) e aprecia a liberdade para desenvolver suas próprias soluções. No lazer, você dedica tempo a hobbies que permitem expressar sua originalidade e talento artístico.</p>

          </>
        )}
        {totalResult >= 19 && totalResult <= 26 && (
          <>
            <h1>Social e Empático(a)</h1>
            <p>Você se destaca por sua habilidade de se conectar com outras pessoas e entender suas emoções. Sua empatia e compaixão fazem de você um ótimo amigo(a) e colega de trabalho. Em ambientes sociais, você é um participante ativo, sempre buscando entender e valorizar as perspectivas dos outros. Conflitos são resolvidos com um olhar conciliador, buscando sempre o consenso. No trabalho, você é colaborativo(a) e valoriza a interação e o apoio mútuo. No lazer, você prefere atividades que envolvam outras pessoas, como encontros sociais ou projetos colaborativos, onde possa expressar e compartilhar seus sentimentos</p>

          </>
        )}
        {totalResult >= 27 && totalResult <= 34 && (
          <>
            <h1>Observador(a) e Reflexivo(a)</h1>
            <p>Você é uma pessoa introspectiva e pensativa, que prefere analisar situações profundamente antes de tomar decisões. Valorizando o conhecimento e a aprendizagem contínua, você encontra inspiração em experiências criativas e culturais. Seu comportamento reservado não significa falta de participação, mas sim uma preferência por pensar antes de agir. Em ambientes sociais, você observa e reflete, preferindo manter-se nos bastidores. No trabalho, você é detalhista e cuidadoso(a), garantindo que suas decisões sejam bem fundamentadas e precisas. No lazer, você valoriza atividades que estimulam a mente e a criatividade.
            </p>

          </>
        )}

        {totalResult >= 35 && totalResult <= 40 && (
          <>
            <h1> Orientado para a Ação</h1>
            <p>Você é uma pessoa prática e determinada, que gosta de enfrentar desafios de frente e buscar soluções rápidas e eficazes. A sua abordagem direta ajuda a resolver problemas com eficiência, e você se sente motivado(a) por metas claras e concretas. Sua coragem e determinação são qualidades que você valoriza tanto em si mesmo(a) quanto nos outros. No trabalho, você tende a ser uma pessoa proativa e focada, capaz de inspirar e liderar pelo exemplo. No lazer, você é alguém que gosta de aproveitar o tempo livre de forma organizada, garantindo que cada momento seja bem aproveitado.
            </p>


          </>
        )}



      </ResultOverviewStyle>
    )
  }

  return <></>
}

export default ResultOverview


