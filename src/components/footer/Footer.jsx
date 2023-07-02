import './Footer.css'
import {AiFillYoutube,AiFillGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Mahmud Preyom</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://web.facebook.com/mahmud.preyom"><BsFacebook/></a>
                <a href="https://github.com/MahmudPreyom"><AiFillGithub/></a>
                <a href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"><AiFillYoutube/></a>
            </div>
            <div className="footer__copyright">
                <h5>&copy; Mahmud Preyom. All Rights Reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;