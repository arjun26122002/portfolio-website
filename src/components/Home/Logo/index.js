import "./index.scss";

import LogoS from '../../../assets/images/prof_photo.png';

const Logo = () => {
         
    return (
        <div className='Logo-container'>
          <img className='solid-logo' src={LogoS} style={{
                width:'70vh',display:"flex"
            }} alt="$" />
</div> 
            
    )


}
export default Logo