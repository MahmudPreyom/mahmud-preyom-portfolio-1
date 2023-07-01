import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import {AiFillYoutube,AiFillGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/> </a>
            <a href="https://github.com" target="_blank"><FaGithub/> </a> */}
            <a href="https://web.facebook.com/mahmud.preyom"><BsFacebook/></a>
                <a href="https://github.com/MahmudPreyom"><AiFillGithub/></a>
                <a href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"><AiFillYoutube/></a>
        </div>
    )
};

export default HeaderSocial;