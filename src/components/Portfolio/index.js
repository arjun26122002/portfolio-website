import React from "react";
import { useState } from 'react'
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const Portfolio=()=>{
     const [letterClass, setLetterClass] = useState('text-animate');

    return(
        <>
        <div className='container portfolio-page'>
           <div>
            <div className="text-zone">
            <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={"portfolio".split("")}
              idx={15}
            />
            </h1>
            {/* <div>
                {renderPortfolio(Portfolio)}
            </div> */}
            </div>
           </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Portfolio