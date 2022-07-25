import React from 'react'
import './circle.css'

type Skill = {
    name: string, 
    level: number  
}
const Circle = ({name, level}: Skill) => {
  return (
    <div className='circleSkill'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
             width="180px"
             height="180px" viewBox="0 0 220 220"  >
            <g id="Capa_1">
                <g>
                    
                    <circle fill="none" stroke="#618c7c" stroke-width="7" stroke-miterlimit="10" stroke-dasharray="14.7539,2.9508" cx="101" cy="92" r="62"/>
                </g>
            </g>
            <g id="Capa_3">
                <rect x="60.445" y="80.592" fill="none" width="80.586" height="20.075"/>
                <text transform="matrix(1 0 0 1 69.0054 95.6279)" fill="#b4d4ed" font-family="'ArialMT'" font-size="21" letter-spacing="2"> {name} </text>
            </g>
            <g id="Capa_2">
                <g>
                    <path fill="none" stroke="#b4d4ed" stroke-width="7" stroke-miterlimit="10" stroke-dasharray={`${level}, 400`} d="
                        M100.559,30.003c34.24-0.244,62.196,27.315,62.44,61.558c0.242,34.242-27.319,62.195-61.561,62.437
                        C67.198,154.241,39.247,126.684,39,92.441C38.759,58.199,66.318,30.247,100.559,30.003z"/>
                </g>
            </g>
        </svg>
    </div>
  )
}

export default Circle