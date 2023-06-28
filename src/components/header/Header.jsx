import CTA from './CTA';
import './Header.css';
import ME from "../../assets/IMG_20230628_192803_adobe_express.png"
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mahmud Preyom</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>
                <div className='me'>
                    <img style={{height: "665px"}} src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
};

export default Header;