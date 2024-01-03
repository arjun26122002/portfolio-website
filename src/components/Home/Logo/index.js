import "./index.scss";

// import LogoS from '../../../assets/images/prof_photo.png';
import LogoS from '../../../assets/images/prof_photo1.png'

const Logo = () => {
         
    return (
        <div className='Logo-container'>
          <img className='solid-logo' src={LogoS} style={{
                width:'75vh',display:"flex",paddingLeft:"24px"
            }} alt="$" />
</div> 
            
    )


}
export default Logo