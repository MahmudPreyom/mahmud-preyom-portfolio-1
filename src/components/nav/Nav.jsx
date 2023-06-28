import './Nav.css'
import { AiOutlineHome,AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";
import { MdOutlineContacts } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/> </a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/> </a>
            <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><VscProject/> </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContacts/> </a>
        </nav>
    );
};

export default Nav;