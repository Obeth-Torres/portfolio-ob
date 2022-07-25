import React from "react"
import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import fotoPerfil from '../../assets/images/hopeBlue.png'
import GridHexagons from "./components/GridHexagons"
import LineSvg from "./components/LineSvg"
import { useRef, useEffect, useState } from "react"
import './home.css'


const Home = () => {
  const myRef = useRef(null!);
  const myRef2 = useRef(null!)
  const contactRef = useRef(null!)

  const [myTitleisVisible, setMyTitleisVisible] = useState(Boolean)
  const [myTitle2, setMyTitle2] = useState(Boolean)
  const [contactIsVisible, setContactIsVisible] = useState(Boolean)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyTitleisVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current )

    const observer2 = new IntersectionObserver((entries) => {
      const entry2 = entries[0];
      setMyTitle2(entry2.isIntersecting)      
    })
    observer2.observe(myRef2.current)

    const observer3 = new IntersectionObserver((entries) => {
      const entry3 = entries[0];
      setContactIsVisible(entry3.isIntersecting)
    })
    observer3.observe(contactRef.current)
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
        <div  className={`${myTitleisVisible ? 'gridOfHexagons visibleH' : 'gridOfHexagons' }`}>
          
          <div ><GridHexagons skills="CSS " /></div>
          <div><GridHexagons skills="HTML" /></div>
          <div><GridHexagons skills="JS" /> </div>
        </div>
        <div className={`${myTitleisVisible ? 'gridOfHexagons last visibleH' : 'gridOfHexagons last' }`}>
          <div><GridHexagons skills="React"  /></div>
          <div><GridHexagons skills="Angular"  /></div>
        </div>

        <h1  ref={myRef2}>
         
            <span  className={`${myTitle2 ? 'visible' : ''}`}>
              Design Skills
            </span>
          
        </h1>
        <p>Aplicaciones de Adobe</p>
        <div className= {`${myTitle2 ? "gridOfHexagons visibleH" : "gridOfHexagons"}`} >
          
          <div><GridHexagons skills="Photoshop " /></div>
          <div><GridHexagons skills="Illustrator" /></div>
          <div><GridHexagons skills="Indesign" /> </div>
        </div>
        <div>
          <div ref={contactRef}
           className= {`${contactIsVisible ? "contact visibleH" : "contact"}`} >
            <h1 className= {`${contactIsVisible ? "visible" : ""}`}>CONTACT</h1>
            <p>send me a mail</p>
          </div>          
        </div>        
      </div>
      
    </div>
  )
}

export default Home