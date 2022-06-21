import { useState } from 'react'
import './App.css'
import { HelmetBack } from './components/helmetback'
import { HelmetFront } from './components/helmetfront'
import { MaskOne } from './components/maskone'

function App() {

  return (
    <div className="App">
      <svg
        baseProfile="tiny"
        overflow="visible"
        viewBox="0 0 332.6 275.1"
        className="kabuto"
      >
        <HelmetBack />
        <MaskOne />
        <HelmetFront />
      </svg>
    </div>
  )
}

export default App
