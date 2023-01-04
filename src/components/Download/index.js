import './index.css'
import Loader from 'react-loaders'
// import LogoM from "../../assets/images/cv.png"

const Download = () => {
  return (
    <>
      <div className="container">
        <div className="left_side"></div>
        <div className ="profiletext">
            <div>
            {/* <img src={LogoM} */}
            {/* style={{
                // height:"50px"
            }}
              alt="photo"
            /> */}
            </div>
            <h2>
            Arjun dey
            </h2>
            <br/>
            <span>Student,Web devaloper</span>

        </div>
        <div className="right_side"></div>








        <Loader type="pacman" />
      </div>
    </>
  )
}
export default Download
