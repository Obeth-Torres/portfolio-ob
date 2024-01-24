import React from 'react'
import diagram from '../../../assets/images/awsProject.svg'
import './fullstackProject.css'

const FullstackProject = () => {
  return (
    <div className='projectBox'>
      <h3>Fullstack Project (React - Django - AWS)</h3>
      <p>Configuración en la que tenemos un frontend de React alojado en AWS S3 bucket, servido a través de CloudFront a través de Route-53. En el backend tenemos Django con Nginx y Gunicorn alojado en una instancias EC2 detrás de AWS Elastic Load Balancer.</p>
            <div className="linktopage">
              <a href="https://psicologia-y-psicoanalisis.org">click para conocer el sitio</a>
            </div>
            
        <div className="awsDiagram">
          <img src={diagram} alt="aws project" />
        </div>
    </div>
  )
}

export default FullstackProject
