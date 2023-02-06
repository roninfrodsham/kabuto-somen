import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelmetBack } from './components/helmetback'
import { HelmetFront } from './components/helmetfront'
import { MaskOne, MaskTwo, MaskThree, MaskFour } from './components/masks'
import './App.css'

type ComponentProps = {
  [key: string]: any
}

function App() {
  const Components: ComponentProps = {
    "MaskOne": MaskOne,
    "MaskTwo": MaskTwo,
    "MaskThree": MaskThree,
    "MaskFour": MaskFour,
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

  function getRandomMask() {
    const filterKeys = keys.filter((key) => {
      return key !== currentMask
    })
    console.log("FILTER KEYS: ", filterKeys);
    const prop = filterKeys[Math.floor(Math.random() * filterKeys.length)]
    console.log("NEXT MASK: ", prop);
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
        onClick={() => getRandomMask()}
        whileHover={{
          scale: 1.2,
          textShadow: '0 0 10px #EEABCE',
        }}
      >
        Change Mask
      </motion.button>
    </div>
  )
}

export default App
