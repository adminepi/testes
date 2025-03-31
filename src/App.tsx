import { ThemeProvider } from 'styled-components'

import Main from './components/Main'
import QuizProvider from './context/QuizProvider'
import { GlobalStyles } from './styles/Global'
import { themes } from './styles/Theme'
import { Toaster } from 'react-hot-toast'

function App() {
 
  return (
    <ThemeProvider theme={themes.light}>
      <Toaster
  position="top-center"
  reverseOrder={true}
/>

      <GlobalStyles />
      <QuizProvider>
        
        <Main />
      </QuizProvider>
    </ThemeProvider>
  )
}

export default App
