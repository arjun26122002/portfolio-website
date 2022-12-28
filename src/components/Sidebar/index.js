import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo_s.png'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="./">
      <img src={LogoS} alt="Logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Arjun Dey" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={ faBriefcase} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      {/* Linkedin */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/arjun-dey-a49464211/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      {/* Facebook */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100024957380620"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      {/* Github */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/arjun26122002"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      {/* Twitter */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ArjunDe84845403"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
