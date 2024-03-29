/* eslint-disable jsx-a11y/alt-text */
import AnimatedLetters from "../AnimatedLetters"
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'
import "./index.scss"

// import LogoS from "../../assets/images/Resume.pdf"
// import Resums from "../../assets/images/Resume.pdf"
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
          <div className="updateP">
            <p >
              I am from Howrah,West Bengal. currently pursuing Bachelor of Technology major in computer science and Engineering. I am a student of 4th year and passionate MERN devaloper.
            </p>
            <p align="LEFT">I'm a very ambitious MERN developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.</p>
            <p>I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.</p>
          </div>
          {/* <Link to="/download" className="flat-button">
            watch cv
          </Link> */}
          {/* <a download="Resume.pdf" href={Resums} className="flat-button">Download Resume</a> */}
          <a href="https://drive.google.com/drive/u/1/folders/182uFLsdPmlFdGoHBcLF_T4x-BTOI-vdY"className="flat-button" target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}>
           Click to see the Resume
                    </a>
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



      </div >



      <Loader type="pacman" />
    </>


  )
}


export default About

