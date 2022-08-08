import React from 'react'
import fotoPortfolio from '../../../assets/images/portfolio.png'
import './tfm.css'

const Tfm = () => {
  return (
    <div className='tfm'>
        <a href="https://my-tfm.netlify.app/">
        <div className="tfmNav">
            <div>
               <h4>La Noción de Sujeto:</h4>
                <h5>En el Campo de la Psicología Auténtica</h5> 
            </div>            
            <div className="logo">OTM</div>
            
        </div>      
        <img src={fotoPortfolio} alt="my - TFM"  />
        <div className="tfmNavB">
            <p>Proyecto de investigación &#169; 2020</p>
        </div>
        </a>
    </div>
  )
}

export default Tfm