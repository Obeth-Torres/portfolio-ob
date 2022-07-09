import React from 'react'
import './hexagon.css'

type Skills = {
    skils: string[];
}
const Hexagon = ({skils}: Skills ) => {
  return (
    <div className='hexagon'>
        <div>
        
            <div className="hex-row">
                <div className="hex">
                    <h2> {skils[0]} </h2>
                </div>
                <div className="hex">
                    <h2> {skils[1]} </h2>
                </div>
                <div className="hex">
                    <h2> {skils[2]} </h2>
                </div>
            </div>
            <div className="hex-row dos">
                <div className="hex">
                    <h2> {skils[3]} </h2>
                </div>
                <div className="hex">
                    <h2> {skils[4]} </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hexagon