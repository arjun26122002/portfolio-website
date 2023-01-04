import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import LogoS from '../../assets/images/con_photo.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mc6wqza',
        'template_lwnl9ap',
        form.current,
        'Lrpc5a16W87E1PZaX'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div style={{
            fontSize:"20px"
          }}>
          <p>
           My Name is Arjun Dey ,I an interested in new technologies work-especially ambitious or large projects.
          </p>
          <p>
          If you want to contact me,don't hesitate to contact me using below from either.
          </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div
          className="info-map"
          // style={{
          //   display: 'flex',
          //   justifyContent: 'space-between',
          // }}
        >
          <div>
            Arjun Dey.
            <br />
            india,
            <br />
            kolkata, Howrah <br />
            12/7 south santinagar,Nependrapally,Nischinda, howrah . pin-711206
            <br />
            <span>arjun.dey.2612@gmail.com </span>
            <div style={{
              color:"#c29b0c",cursor:"pointer"
            }}>8100014395</div>
          </div>
          <div>
            <img
              src={LogoS}
              style={{
                height:"50px",
                width:"50px",
                display: 'flex',
                borderRadius: '50%',
              }}
              alt="$"
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
