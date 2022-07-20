import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const randomX = gsap.utils.random(-300, 300, 1, true);

function Box({children, endX}) {
  const boxRef = useRef();

  // run when  `endX ` changes
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: endX
    });
  }, [endX]);
  return <div className="box" ref={boxRef} > {children} </div>
}

const Animation = () => {
  const [endX, setEndX] = useState(0)

  return (
    <div className='animationGsap'>
        <h1>GSAP Animation</h1>
      <div className="gsapBox" >
        <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>
        <Box endX={endX}> {endX} </Box>
      </div>
    </div>
  )
}

export default Animation