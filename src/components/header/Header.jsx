import CTA from './CTA';
import './Header.css';
// import ME from "../../assets/IMG_20230628_192803_adobe_express.png"
// import me2 from "../../assets/IMG_20230630_204830-removebg-preview.png"
import me3 from "../../assets/IMG_20230630_211356-removebg-preview.png"
import HeaderSocial from './HeaderSocial';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h2>Hello, This is</h2>
                <h1>Mahmud Preyom</h1>
                <h2 className="text-light">I am <br />
                    <span style={{ color: 'Highlight', fontWeight: 'bold', fontStyle: "italic" }}>
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
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
                    <img style={{ height: "665px" }} src={me3} alt="" />
                </motion.div>
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
};

export default Header;