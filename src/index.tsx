import * as React from 'react'
import { render } from 'react-dom'
import { FlexContainer } from './lib'

import './styles.css'

function App() {
  return (
    <div className="App">
      <FlexContainer tag="article" direction="row">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </FlexContainer>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
