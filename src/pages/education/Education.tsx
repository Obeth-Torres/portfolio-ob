import React from 'react'
import Circle from './components/Circle'
import Language from './components/Language'
import Square from './components/Square'
import './education.css'
import uxProfile from '../../assets/images/uxProfile.png'
import cv from '../../assets/cv-obeth.pdf'
import { AiOutlineFilePdf } from "react-icons/ai";

const Education = () => {
  return (
    <div className='education'>
        <h1>Curriculum Vitae</h1>
                
        <div className="cv">
            <div className="profileBox">
                <div >
                    <div className="prifileImage">
                        <img src={uxProfile} alt="Obeth Torres Moreno" />
                    </div>
                    <p>Obeth Torres Moreno</p> 
                </div>
                              
            </div>
            

            <div className="columnRight">
                <div className="Fskills">
                    <h2>Habilidades Como Desarrollador </h2>
                    <div className='devSkills'>
                        <span><Circle name='HTML' level={375} /></span>
                        <span><Circle name=' CSS' level={375}/></span>
                        <span>  <Circle name='JS - TS'level={365} /></span>
                        <span><Circle name='Angular 'level={350} /></span>
                        <span><Circle name=' React'level={365} /> </span>          
                        <span><Circle name=' Django'level={365} /> </span>     
                        <span><Circle name=' AWS'level={340} /></span>   
                    </div> 
                    <div className="designSkills">
                        <h2>Habilidades de Edición y diseño</h2>
                        <div className="Dskills">                        
                            <Square name='Ps' /> <p>Photoshop</p>
                            <Square name='Ai' /> <p>Adobe Ilustrator</p>
                            <Square name='Id' /> <p>Indesign</p>
                        </div>
                    </div>
                    
                </div>
                <div className="education">
                    <h2>EDUCACIÓN</h2>

                    <div className="studies">
                        <div>
                        <p>Desarrollo WEB</p>
                        <p>2020  -  2024</p>
                        <h4>De forma Autodidacta</h4> 
                        </div>                    
                        <h3>EN LA WEB</h3>
                    </div>

                    <div className="studies">
                        <div>
                        <p>Master en Filosofía Téorica y Práctica</p>
                        <p>2014  -  2017</p>
                        <h4>Universidad Nacional de Educación a Distancia</h4> 
                        </div>                    
                        <h3>UNED</h3>
                    </div>
                    <div className="studies">
                        <div>
                        <p>Psicoanálisis de Orientación Lacaniana</p>
                        <p>2009  -  2014</p>
                        <h4>Nuevo Centro de Estudios Psicoanalíticos</h4> 
                        </div>                    
                        <h3>NUCEP</h3>
                    </div>
                    <div className="studies">
                        <div>
                        <p>Master en Psicoterapia Psicoanalítica</p>
                        <p>2009  -  2012</p>
                        <h4>Universidad Complutence de Madrid</h4> 
                        </div>                    
                        <h3>UCM</h3>
                    </div>
                    <div className="studies">
                        <div>
                        <p>Diplomado en Gestión de Personal</p>
                        <p>2004  -  2004</p>
                        <h4>Universidad Europea de Madrid</h4> 
                        </div>                    
                        <h3>ue</h3>
                    </div>
                    <div className="studies">
                        <div>
                        <p>Licenciado en Psicología Clínica</p>
                        2000  -  20004
                        <h4>Universidad del Valle de México</h4> 
                        </div>                    
                        <h3>UVM / UNED</h3>
                    </div> 
                </div>
                <div className="languageBox">
                    <h2>LANGUAJES</h2>
                    <Language/>
                    
                </div>
            </div>
            

            <div className="contactBox">   
                <div className="pdfLink">
                    <a href={cv} target='_blank' download >Descarga en pdf <AiOutlineFilePdf/></a>
                </div>      
                
            </div>  
            
        </div>
    </div>
  )
}

export default Education