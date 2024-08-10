import React from 'react'
import './tfm.css'

const ConsultaOnline = () => {
  return (
    <div className='consulta'>
        <a href="https://consultapsicoanalitica.netlify.app/" target='_blank' rel="noopener noreferrer">  
        <h2>CONSULTA PSICOANALÍTICA ONLINE</h2>
        <div className="btns">
            <div >
                <p>Consulta como</p>
                <h4 className="btn">Analizante</h4>
            </div>
            <div >
                <p>Consulta como</p>
                <h4 className="btn">Analista</h4>
            </div>
        </div>
        </a>
    </div>
  )
}

export default ConsultaOnline