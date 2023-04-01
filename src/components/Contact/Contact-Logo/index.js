import './index.scss'
import myPic from '../../../assets/logo/myPic.png'

const LogoContact = () => {
    return (
        <div className='logo-container-contact'>
                            

            <div class="outer-circle">
                <div class="inner-circle">
                    <img className='solid-logo' src={myPic} alt='Pic'/>
                </div>
        </div>
            
        </div>
    );
};

export default LogoContact;