import React from 'react'
import ReactDOM from 'react-dom'
import './styles/base/global.scss'
import './styles/base/typography.scss'
import Home from './pages/Home/index'
// import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
