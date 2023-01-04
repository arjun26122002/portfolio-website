import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo_s.png'
import LogoSubtitle from '../../assets/images/logo_update.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faProjectDiagram, faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
  const [showNav, setShowNav] = useState(false);
return (
  <div className="nav-bar">
    <Link className="logo" to="/"
    onClick={() => setShowNav(false)}>
      {/* <img src={LogoS} alt="Logo" /> */}

      <img className="sub-logo" src={LogoSubtitle} alt="Arjun Dey" style={{
        borderRadius:"10em"
      }}/>
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
      exact="true"
      activeclassname="active"
          to="/"
      onClick={() => setShowNav(false)}
       >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
      activeclassname="active"
      className="about-link"
      to="/about"
        onClick={() => setShowNav(false)}
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
activeclassname="active"
className="contact-link"
to="/contact"
        onClick={() => setShowNav(false)}
       >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="project-link"
        to="/project"
        onClick={() => setShowNav(false)}
         >
        <FontAwesomeIcon icon={ faProjectDiagram} color="#4d4d4e"
         />
      </NavLink>
      <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#c29b0c"
          size="3x"
          className='close-icon'
          cursor="pointer" />
    </nav>
    <ul>
      {/* Linkedin */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/arjun-dey-a49464211/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
      {/* Facebook */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100024957380620"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"className="anchor-icon" />
        </a>
      </li>
      {/* Github */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/arjun26122002"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
      {/* Twitter */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ArjunDe84845403"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"className="anchor-icon" />
        </a>
      </li>
    </ul>
    <FontAwesomeIcon 
    onClick={()=> setShowNav(true)}
    icon={faBars}
    color="#c29b0c"
    size='3x'
    className='hamburger-icon'
    cursor="pointer"/>
  </div>
)
}
export default Sidebar
