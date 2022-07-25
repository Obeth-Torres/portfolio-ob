import React, { useEffect, useRef, useState } from 'react'
import './language.css'

const Language = () => {
    const lineRef = useRef(null!)
    const [dasharray, setDasharray] = useState(Boolean)
    useEffect(() => {
        const observeLine = new IntersectionObserver((entriesLine) => {
            const entriLine = entriesLine[0]
            setDasharray(entriLine.isIntersecting)
        })
        observeLine.observe(lineRef.current)
    }, [])

  return (
    <div ref={lineRef} className='language'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="500px"
            height="100px" viewBox="0 0 500 100" enable-background="new 0 0 500 100" >
            <g id="En">
                <g>                    
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" x1="58" y1="28.5" x2="64" y2="28.5"/>                    
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" stroke-dasharray="12,4" x1="68" y1="28.5" x2="465" y2="28.5"/>
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" x1="467" y1="28.5" x2="473" y2="28.5"/>
                </g>
                <line className={`${dasharray ? 'dasharrayLine' : ''}`} fill="none" stroke="#364559" stroke-width="7" stroke-miterlimit="10" x1="58" y1="28.5" x2="454" y2="28.5"/>
                <rect x="32.444" y="23.001" fill="none" width="19.556" height="11.333"/>
                <text fill="#364559" transform="matrix(1 0 0 1 32.4443 31.5928)" font-family="'Arial-BoldMT'" font-size="16">En</text>
            </g>
            <g id="Fr">               
                <g>
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" x1="58" y1="47.5" x2="64" y2="47.5"/>                    
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" stroke-dasharray="12,4" x1="68" y1="47.5" x2="465" y2="47.5"/>
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" x1="467" y1="47.5" x2="473" y2="47.5"/>
                </g>               
                <line className={`${dasharray ? 'dasharrayLine' : ''}`}  fill="none" stroke="#364559" stroke-width="7" stroke-miterlimit="10" x1="58" y1="47.5" x2="437" y2="47.5"/>
                <rect x="33.444" y="42.334" fill="none" width="17.333" height="13.666"/>
                <text fill="#364559" transform="matrix(1 0 0 1 33.4438 50.9258)" font-family="'Arial-BoldMT'" font-size="16">Fr</text>
            </g>
            <g id="es">                
                    <line fill="none" stroke="#ABB5C1" stroke-width="7" stroke-miterlimit="10" stroke-dasharray="12,4" x1="61" y1="68.5" x2="476" y2="68.5"/>
                <line className={`${dasharray ? 'dasharrayLine' : ''}`}  fill="none" stroke="#364559" stroke-width="7" stroke-miterlimit="10" x1="58" y1="68.5" x2="473" y2="68.5"/>
                <rect x="32.667" y="62.5" fill="none" width="18.667" height="12.333"/>
                <text fill="#364559" transform="matrix(1 0 0 1 32.667 71.0918)" font-family="'Arial-BoldMT'" font-size="16">Es</text>
            </g>
        </svg>
    </div>
  )
}

export default Language