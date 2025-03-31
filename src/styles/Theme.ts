import { Theme } from './styled'

export const themes: Record<string, Theme> = {
  light: {
    colors: {
      primaryText: '#3BBED0', // question text color
      secondaryText: '#666', // answer text color
      themeText: '#000000',
      themeColor: '#3BBED0',
      themeGradient: 'linear-gradient(to right,#3BBED0, #FFFFFF)',
      background: 'linear-gradient(to right,#3BBED0, #FFFFFF)',
      cardBackground: '#FFFFFF',
      selectTopicBg: '#FFFFFF',
      appLogo: '#000000',
      buttonText: '#FFFFFF',
      outlineButtonText: '#800080',
      buttonBackground: 'linear-gradient(90.04deg, #FEAB31 0.03%, #FEAB31 99.96%)',
      selectedAnswer: '',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: '#EAEAEA',
      answerBg: '#ffffff',
      disabledCard: '#fbf4ecbc',
      disabledButton: '#e7e8e9',
      success: '#12B40E',
      successLight: '#DDFFDC',
      danger: '#FF143E',
      dangerLight: '#FFD7DE',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
  dark: {
    colors: {
      primaryText: '#FFFFFF', // question text color
      secondaryText: '#FFFFFF', // answer text color
      themeText: '#FFFFFF',
      themeColor: '#C000C0',
      themeGradient: 'linear-gradient(90deg, #0e050e 0%, #281e20 100%)',
      background: 'linear-gradient(90deg, #0e050e 0%, #281e20 100%)',
      cardBackground: '#241a1a',
      selectTopicBg: '#21191C',
      appLogo: '#FFFFFF',
      buttonText: '#000000',
      outlineButtonText: '#ffffff',
      buttonBackground: 'linear-gradient(90.04deg, #800080 0.03%, #FFC0CB 99.96%)',
      selectedAnswer: '#151113',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: 'transparent',
      answerBg: '#151113',
      disabledCard: '#00000080',
      disabledButton: '#181214',
      success: '#12B40E',
      successLight: '#151113',
      danger: '#FF143E',
      dangerLight: '#151113',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
}
