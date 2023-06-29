import CTA from './CTA';
import './Header.css';
import ME from "../../assets/IMG_20230628_192803_adobe_express.png"
import HeaderSocial from './HeaderSocial';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h2>Hello, This is</h2>
                <h1>Mahmud Preyom</h1>
                <h2 className="text-light">I am <br />
                    <span style={{ color: 'Highlight', fontWeight: 'bold',fontStyle: "italic" }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['A MARN Stack Web Developer', 'A Website Designer', 'Passionate for Codding']}
                            loop={15}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>
                <div className='me'>
                    <img style={{ height: "665px" }} src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
};

export default Header;