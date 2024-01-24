import React from 'react'
import fotoPortfolio from '../../assets/images/portfolio.png'
import Agame from './components/Agame'
import ConsultaOnline from './components/ConsultaOnline'
import LittleSchop from './components/LittleSchop'
import Nudo from './components/Nudo'
import Pixelanimation from './components/Pixelanimation'
import Tfm from './components/Tfm'
import Wrodle from './components/Wrodle'
import './projects.css'
import FullstackProject from './components/FullstackProject'

const Proyects = () => {

  return (
    <div className="projectsPage">

      <h2>Proyectos desarrollados durante mi proceso de aprendizaje:</h2>

      <div className="lasProject">
         <FullstackProject/>
      </div>

      <div className="pageProjects">
        <div className='bigProject' >  
          <Tfm/>
        </div>
        <div className='bigProject'>
          <ConsultaOnline/>          
        </div>

      </div>  

      <h2>Small Projects</h2>
      <div className="smallProjects">        
        <div className="boxSmallProject">
          <a href="https://my-lettle-shop.netlify.app">
          <div className="textProject"><p>This is a little shop made with React-typescript and Redux </p></div>
          <div className='sPro'> <LittleSchop/> </div>
          </a>
        </div>
        <div className="boxSmallProject">
          <a href="https://codepen.io/obeth-torres/pen/vYRBMjW">
          <div className="textProject"><p>This is a canvas animation of Jaques Lacan's knot theory</p></div>
          <div className='sPro'> <Nudo/> </div>
          </a>
        </div>
        <div className="boxSmallProject">
          <a href="https://codepen.io/obeth-torres/pen/bGvbZgq">
          <div className="textProject"> <p>This es a spacial and logic game do id with arrays </p></div>
          <div className='sPro'> <Agame/> </div>
          </a>
        </div>
        <div className="boxSmallProject">
          <a href="https://codepen.io/obeth-torres/pen/poaONxd">
          <div className="textProject"><p>A little game inspired by the famous wrodle-game</p></div>
          <div className='sPro'> <Wrodle/></div>
          </a>
        </div>
        <div className="boxSmallProject">
          <a href="https://codepen.io/obeth-torres/pen/vYdMYvQ">
          <div className="textProject"><p>This is a pixel animation made with canvas </p></div>
          <div className='sPro'> <Pixelanimation/></div></a>
        </div>
        
      </div>
    </div>
  )
 }

export default Proyects