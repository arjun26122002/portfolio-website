import React, { useEffect,useState} from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projectData from '../../data/project.json'
// import { get Docs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Project = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(projectData);
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    const renderProject = (project) => {
         return (
            <div className="images-container">
                {
                    project.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="project-image"
                                alt="project" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                    </div>
                                    </div>
                            
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container project-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Project".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProject(projectData.project)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;