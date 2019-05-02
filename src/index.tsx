import * as React from 'react'
import { render } from 'react-dom'
import { FlexContainer, FlexItem } from './lib'

import './styles.css'

function App() {
  return (
    <div className="App">
      <FlexContainer tag="article" direction="row">
        <FlexItem grow={2} width="50%">
          <h1>Hello CodeSandbox</h1>
        </FlexItem>
        <h2>Start editing to see some magic happen!</h2>
      </FlexContainer>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
