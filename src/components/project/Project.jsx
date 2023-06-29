import './Project.css'
import img1 from "../../assets/Screenshot 2023-06-29 133450.png"
import { FaGithub } from "react-icons/fa"

const Project = () => {
    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>Project</h2>

            <div className="container project__container">
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Music Instruments Learning</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/summer-camp-client" className='btn'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/summer-camp-server-side" className='btn'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://summer-camp-e2784.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Chef Recipie Hunter</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/chef-recipe-hunter-client-side" className='btn'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/chefs-corner-server" className='btn'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://chef-recipie-assignment10.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Toy Planet Car Market</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/MahmudPreyom/toy-marketplace-client-side" className='btn'>Frontend <FaGithub /></a>
                        <a href="https://github.com/MahmudPreyom/toy-marketplace-server-side" className='btn'>Backend <FaGithub /></a>
                    </div>
                    <div className="project__item-cta1">
                        <a href="https://toys-planet-client.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Project;