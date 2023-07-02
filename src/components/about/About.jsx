import './About.css'
import about from "../../assets/IMG_20230630_212737.jpg"
import { VscProject } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { SiCompilerexplorer } from "react-icons/si";
// import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { motion } from "framer-motion"


const About = () => {

    // const { scrollYProgress } = useViewportScroll()
    // const scale = useTransform(scrollYProgress, [0, 0.1], [0.1, 2]);

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            {/* <motion.div style={{ scale }}>
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}> */}
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image" data-aos="zoom-in">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                            <img src={about} alt="About Image" />
                        </motion.div>
                    </div>

                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card' data-aos="fade-up">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <CgWebsite className='about__icon' />
                                <h5>Interest</h5>
                                <small>For Advance Web Development</small>
                            </motion.div>
                        </article>

                        <article className='about__card' data-aos="zoom-in">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <SiCompilerexplorer className='about__icon' />
                                <h5>Explore</h5>
                                <small>Updated React Components</small>
                            </motion.div>
                        </article>

                        <article className='about__card' data-aos="fade-up">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <VscProject className='about__icon' />
                                <h5>Project</h5>
                                <small>5+ projects</small>
                            </motion.div>
                        </article>
                    </div>
                    <p data-aos="zoom-in">
                        Hello I am Mohammad Abdullah Al Mahmud Preyom. I used as a short name Mahmud Preyom. I am from Feni in Bangladesh. I am a junior frontend developer. I have Done developing many Project with my experience and I enjoy it to making. My passionate is about creating beautiful and user-friendly interfaces. I believe that front-end development is more than just coding, it is about creating experiences that people will love. As my passionate, I obtained with a strong foundation in front-end development. I have experience with a variety of technologies, including Node.js, MongoDB, React.js, Firebase, Tailwind CSS, Daisy UI, and React-Bootstrap. I am also familiar with the latest trends in front-end development, such as responsive design and accessibility.
                    </p>
                    <a href="#contact" className='btn btn-primary' data-aos="zoom-in">Let's Talk</a>
                </div>
            </div>
            {/* </motion.div>
            </motion.div> */}
        </section>
    );
};

export default About;