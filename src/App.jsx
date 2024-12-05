import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 text-zinc-600 font-semibold text-xl'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App