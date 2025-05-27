import { FC } from 'react'
import styled from 'styled-components'

import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { Flex, LogoContainer } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'

import Button from '../ui/Button'
import ResultOverview from './ResultOverview'

const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`

const OtherTestsMessage = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 20px;
  background-color: '#f0f7ff';
  border-radius: 8px;
  border-left: 5px solid '#4a90e2';
  max-width: 600px;
`

const MessageTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: '#4a90e2';
  margin-bottom: 10px;
`

const MessageText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: '#333';
  margin-bottom: 0;
`

const ButtonContainer = styled(Flex)`
  margin-top: 15px;
`

const ResultScreen: FC = () => {
  const { result, quizTopic } = useQuiz();

  const onClickRetry = () => {
    refreshPage()
  }

  return (
    <ResultScreenContainer>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
            
      <OtherTestsMessage>
        <MessageTitle>Descubra mais sobre você!</MessageTitle>
        <MessageText>
          Conheça nossa coleção de testes gratuitos para avaliar diferentes aspectos da sua saúde mental e bem-estar emocional. Cada teste oferece insights valiosos para seu autoconhecimento.
        </MessageText>
      </OtherTestsMessage>
      
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <Button
          text="Refazer Teste"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </ButtonContainer>
    </ResultScreenContainer>
  )
}

export default ResultScreen