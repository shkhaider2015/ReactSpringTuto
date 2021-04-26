import React from 'react'
import { useSpring, animated } from 'react-spring';


export const ChainExample = () => {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#FFFFFF' },
        // { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: '#FFFFFF' },
    })
    // ...
    return <animated.div style={styles}>I will fade in and out</animated.div>
  }

