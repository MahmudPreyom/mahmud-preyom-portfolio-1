import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { BiLogoCss3 } from 'react-icons/bi'
import { SiMongodb } from 'react-icons/si'
import { FaReact, FaBootstrap,FaNodeJs } from 'react-icons/fa'
import { TbBrandVite,TbBrandTailwind,TbBrandFirebase,TbBrandJavascript,TbBrandHtml5,TbBrandFigma } from 'react-icons/tb'
import Marquee from "react-fast-marquee";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            
            <Marquee style={{marginBottom: "50px", color: "var(--color-light)"}}>
                <FaReact style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandVite style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandTailwind style={{fontSize: "4rem", marginRight: "100px"}}/>
                <FaBootstrap style={{fontSize: "4rem", marginRight: "100px"}}/>
                <SiMongodb style={{fontSize: "4rem", marginRight: "100px"}}/>
                <FaNodeJs style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandFirebase style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandJavascript style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandHtml5 style={{fontSize: "4rem", marginRight: "100px"}}/>
                <BiLogoCss3 style={{fontSize: "4rem", marginRight: "100px"}}/>
                <TbBrandFigma style={{fontSize: "4rem", marginRight: "100px"}}/>
            </Marquee>
            
            <div className="container experience__container" data-aos="zoom-in">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content" data-aos="fade-up">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="experience__backend" data-aos="fade-down">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Experience;