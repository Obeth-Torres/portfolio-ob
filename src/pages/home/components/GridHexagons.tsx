import React from 'react'
import './gridHexagons.css'

type Hexagon = {
    skills: string
}
const GridHexagons = ({skills}:Hexagon) => {
  return (
    <div className='svgHexagon'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="175px"
            height="175px" viewBox="0 0 400 400" enable-background="new 0 0 400 400" >
            <g id="Capa_1">
                <polygon opacity="0.7" fill="#1F2C3A" points="111.08,349 20.627,192.5 111.08,36 291.982,36 382.436,192.5 291.982,349 	"/>
            </g>
            <g id="Capa_3">
                <g>
                    <rect x="27.198" y="149.931" fill="none" width="327.928" height="47.177"/>
                    <text textAnchor='middle' transform="matrix(1 0 0 1 174.3062 194.5259)" fill="#DEE9F5" font-family="'ArialMT'" font-size="48">{skills }</text>
                </g>
            </g>
            <g id="Capa_2">
                <polygon fill="none" stroke="#1F2C3A" stroke-width="15" stroke-miterlimit="10" points="111.25,36.5 291.75,36 382.25,192.5 
                    291.75,348.75 111,349 20.625,192.625 	"/>
            </g>
        </svg>
    </div>
  )
}

export default GridHexagons