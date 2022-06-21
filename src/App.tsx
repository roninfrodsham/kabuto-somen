import { motion } from 'framer-motion'
import { HelmetBack } from './components/helmetback'
import { HelmetFront } from './components/helmetfront'
import { MaskOne } from './components/maskone'
import { MaskTwo } from './components/masktwo'
import './App.css'
import { useState } from 'react'

type ComponentProps = {
  [key: string]: any
}

function App() {
  const Components: ComponentProps = {
    "MaskOne": MaskOne,
    "MaskTwo": MaskTwo,
  }
  const keys = Object.keys(Components)
  const [currentMask, setMask] = useState("MaskOne")
  let Component = Components[currentMask];


  const helmetVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut',
        when: 'beforeChildren',
      }
    },
  }

  function switchMask() {
    // filter out current mask so not selected again
    const filterKeys = keys.filter((key) => {
      return key !== currentMask
    })
    const prop = filterKeys[Math.floor(Math.random() * filterKeys.length)]
    setMask(prop);
  }

  return (
    <div className='App'>
      <motion.svg
        baseProfile='tiny'
        overflow='visible'
        viewBox='0 0 332.6 275.1'
        className='kabuto' 
        variants={helmetVariants}
        initial='hidden'
        animate={'visible'}
      >
        <HelmetBack />
        <Component maskVariants={{
          hidden: {
            opacity: 0,
            y: -50
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 160,
              damping: 12,
            },
            default: {
              duration: 0.5,
            }
          }
        }} />
        <HelmetFront />
      </motion.svg>
      <motion.button
        onClick={() => switchMask()}
        whileHover={{
          scale: 1.2,
          textShadow: '0 0 10px #EEABCE',
        }}
      >
        Switch Mask
      </motion.button>
    </div>
  )
}

export default App
