import { useState } from 'react'
import './App.css'
import { HelmetBack } from './components/helmetback'
import { HelmetFront } from './components/helmetfront'
import { MaskOne } from './components/maskone'

function App() {

  const helmetVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "easeInOut",
        when: "beforeChildren",
      }
    },
  }

  return (
    <div className="App">
      <svg
        baseProfile="tiny"
        overflow="visible"
        viewBox="0 0 332.6 275.1"
        className="kabuto"
      >
        <HelmetBack helmetVariants={helmetVariants} />
        <MaskOne />
        <HelmetFront />
      </svg>
    </div>
  )
}

export default App
