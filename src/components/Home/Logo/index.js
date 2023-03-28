import './index.scss'
import myPic from '../../../assets/logo/myPic.png'

const Logo = () => {
    return (
        <div className='logo-container'>
                            

            <div class="outer-circle">
                <div class="inner-circle">
                    <img className='solid-logo' src={myPic} alt='Pic'/>
                </div>
        </div>
            
        </div>
    );
};

export default Logo;