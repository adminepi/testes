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
      <InnerContainer>
        <ResultOverview result={result} type={quizTopic} />        
      </InnerContainer>
      <Flex flxEnd>
        <Button
          text="Refazer"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </Flex>
    </ResultScreenContainer>
  )
}

export default ResultScreen
