import './About.css'
import about from "../../assets/_ALO9557-01.jpeg"
import { VscProject } from "react-icons/vsc";
import { SiExpensify, SiCompilerexplorer } from "react-icons/si";

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={about} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <SiExpensify className='about__icon'/>
                            <h5>Experience</h5>
                            <small>6+ month Learning</small>
                        </article>

                        <article className='about__card'>
                            <SiCompilerexplorer className='about__icon'/>
                            <h5>Explore</h5>
                            <small>Updated React Components</small>
                        </article>

                        <article className='about__card'>
                            <VscProject className='about__icon'/>
                            <h5>Project</h5>
                            <small>5+ projects</small>
                        </article>
                    </div>
                    <p>
                        Hello my passionate is about creating beautiful and user-friendly interfaces. I believe that front-end development is more than just coding, it is about creating experiences that people will love. As my passionate, I obtained with a strong foundation in front-end development. I have experience with a variety of technologies, including Node.js, MongoDB, React.js, Firebase, Tailwind CSS, Daisy UI, and React-Bootstrap. I am also familiar with the latest trends in front-end development, such as responsive design and accessibility.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;