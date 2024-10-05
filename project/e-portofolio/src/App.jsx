import { useState } from 'react'
import './index.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <div className='divider'/>
      <Hero />
      <div className='divider'/>
      <Main />
    </div>
  )
}

export default App;
