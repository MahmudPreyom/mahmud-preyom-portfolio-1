import { useState } from 'react';
import './Project.css'
import { FaGithub } from "react-icons/fa"
import { TbListDetails } from "react-icons/tb"

const Project = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isCollapsed1, setIsCollapsed1] = useState(false);
    const [isCollapsed2, setIsCollapsed2] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleCollapse1 = () => {
        setIsCollapsed1(!isCollapsed1);
    };

    const toggleCollapse2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>Project</h2>

            <div className="container project__container" data-aos="zoom-in">
                <article className='project__item' data-aos="fade-in">
                    <div className="project__item-image">
                        {/* <img src={img1} alt="" /> */}
                        <div className='box box1'></div>
                    </div>
                    <h3>Music Instruments Learning</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/summer-camp-client" className='btn cta2'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/summer-camp-server-side" className='btn btn-primary cta2'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://summer-camp-e2784.web.app/" className='btn btn-primary cta2'>Live Demo</a>
                        <p className='btn cta2' onClick={toggleCollapse}>
                            {isCollapsed ? 'Hide Details' : <p>Details <TbListDetails /> </p>}
                        </p>
                    </div>
                    {isCollapsed && (
                        <div className="project__item-details">
                            <h3 style={{color: "aqua"}}>Technologies: VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router | Axios | JWT | Node.js</h3>
                            <p>1. This is a Full Stack Website With 3 role as like admin, Instructor, students.</p>
                            <p>2. Admin can make user to instructor or admin and also remove anyone user.</p>
                            <p>3. Instructor can add class and the class will can approved or deny only Admin.</p>
                        </div>
                    )}
                </article>
                <article className='project__item' data-aos="fade-up">
                    <div className="project__item-image">
                        {/* <img src={img1} alt="" /> */}
                        <div className='box box2'></div>
                    </div>
                    <h3>Chef Recipie Hunter</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/chef-recipe-hunter-client-side" className='btn cta2'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/chefs-corner-server" className='btn btn-primary cta2'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://chef-recipie-assignment10.web.app/" className='btn btn-primary cta2'>Live Demo</a>
                        <p className='btn cta2' onClick={toggleCollapse1}>
                            {isCollapsed1 ? 'Hide Details' : <p>Details <TbListDetails /> </p>}
                        </p>
                    </div>
                    {isCollapsed1 && (
                        <div className="project__item-details">
                            <h3 style={{color: "aqua"}}>Technologies: VS Code | Firebase | MongoDB | Vercel | GitHub | React-Bootstrap | React-Router</h3>
                            <p>1. This is an authentication website user can sign up 3ways such as GitHub or Google or Email-Password.</p>
                            <p>2. Without sign-up user can not see inside the website without home and blog page.</p>
                            <p>3. When user log in they can see the chefs recipe item.</p>
                        </div>
                    )}
                </article>
                <article className='project__item' data-aos="fade-in">
                    <div className="project__item-image">
                        {/* <img src={img1} alt="" /> */}
                        <div className='box box3'></div>
                    </div>
                    <h3>Toy Planet Car Market</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/toy-marketplace-client-side" className='btn cta2'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/toy-marketplace-server-side" className='btn btn-primary cta2'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://toys-planet-client.web.app/" className='btn btn-primary cta2'>Live Demo</a>
                        <p className='btn cta2' onClick={toggleCollapse2}>
                            {isCollapsed2 ? 'Hide Details' : <p>Details <TbListDetails /> </p>}
                        </p>
                    </div>
                    {isCollapsed2 && (
                        <div className="project__item-details">
                            <h3 style={{color: "aqua"}}>Technologies: VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router</h3>
                            <p>1. This is another authentication website so user can sign-up in 2 ways (Email-Password, Google)</p>
                            <p>2. When user can log in they can update toy data.</p>
                            <p>3. When user log in they see all toys page, my toys page.</p>
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
};

export default Project;