import React from "react"
import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import fotoPerfil from '../../assets/images/hopeBlue.png'
import GridHexagons from "./components/GridHexagons"
import LineSvg from "./components/LineSvg"
import { useRef, useEffect, useState } from "react"
import './home.css'


const Home = () => {
  const myRef = useRef(null!);
  const [myTitleisVisible, setMyTitleisVisible] = useState(Boolean)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyTitleisVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current )
  }, [])
  
  return (

    <div className="home">
      <div className="linesvg">
        <LineSvg/>
      </div>
      <div className="about">
        <img src={fotoPerfil} alt="Obeth Torres Moreno" />
      </div>

      <div className="skills">
        <p>scrol </p>
        <h1 ref={myRef}>  
          <span className={`${myTitleisVisible ? 'visible' : '' }`} >
            Frontend Skills
          </span>
          
        </h1>
        <div className="gridOfHexagons">
          
          <div><GridHexagons skills="CSS " /></div>
          <div><GridHexagons skills="HTML" /></div>
          <div><GridHexagons skills="JS" /> </div>
        </div>
        <div className="gridOfHexagons last">
          <div><GridHexagons skills="React"  /></div>
          <div><GridHexagons skills="Angular"  /></div>
        </div>

        <h1  >
         
            <span className= {`${myTitleisVisible ? 'visible' : ''} `} >
              Design Skills
            </span>
          
        </h1>
        <p>Aplicaciones de Adobe</p>
        <div className="gridOfHexagons">
          
          <div><GridHexagons skills="Photoshop " /></div>
          <div><GridHexagons skills="Illustrator" /></div>
          <div><GridHexagons skills="Indesign" /> </div>
        </div>
        <div>
          <div className="contact">
            <h1>CONTACT</h1>
            <p>send me a mail</p>
          </div>          
        </div>        
      </div>
      
    </div>
  )
}

export default Home