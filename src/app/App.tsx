import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Routes } from './routes'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Routes />
  )
}

