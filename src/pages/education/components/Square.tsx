import React from 'react'
import './square.css'

type DesignS = {
    name: string
}
const Square = ({name}: DesignS) => {
  return (
    <div className='designSkill'>
        <h3>{name}</h3>        
    </div>
  )
}

export default Square