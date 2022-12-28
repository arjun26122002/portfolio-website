import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'
import "./index.scss"
const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className='container about-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vel. Molestias alias temporibus aperiam unde sapiente, dolorum, rerum dicta perferendis molestiae minus debitis obcaecati quae neque aliquam architecto. Eum et numquam iure doloribus maxime!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quis. Doloremque, quidem iure. Tempore dignissimos, officia dolores odit quasi similique corporis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facilis?</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#8A2BE2" />
            </div>

          


          </div>

        </div>
           
        

      </div>


      
      <Loader type="pacman" />
    </>


  )
}


export default About

