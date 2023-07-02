/* eslint-disable react/no-unescaped-entities */
import './Service.css';
// import {AiOutlineCheck} from 'react-icons/ai'


const Service = () => {
    return (
        <section id='service'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container" data-aos="zoom-in">
                <article className='service' data-aos="fade-up">
                    <div className="service__head">
                        <h3>Website Design</h3>
                    </div>
                    <ul className='service__list' data-aos="fade-down">
                        <li>* <p>Attractive design that aligns with brand and engages visitors.</p></li>
                        <li>* <p>Intuitive navigation, clear content, responsive design for different devices.</p></li>
                        <li>* <p>Optimize for fast loading, minimize file sizes, monitor performance.</p></li>
                        <li>* <p>Ensure the website functions properly across different web browsers to reach a wider audience.</p></li>
                    </ul>
                </article>

                {/* end of design */}

                <article className='service' data-aos="fade-up">
                    <div className="service__head">
                        <h3>Frontend Developments</h3>
                    </div>
                    <ul className='service__list' data-aos="fade-down">
                        <li>*<p>HTML: Markup language for structuring web content.</p></li>
                        <li>*<p>CSS: Stylesheet language for website styling.</p></li>
                        <li>*<p>JavaScript: Programming language for interactive web elements.</p></li>
                        <li>*<p>Frontend Testing: Implementing automated tests to ensure code quality and functionality.</p></li>
                        <li>*<p>Web Animation: Adding dynamic and interactive animations to enhance user experience.</p></li>
                    </ul>
                </article>

                {/* end of frontend evelopment */}

                <article className='service' data-aos="fade-up">
                    <div className="service__head">
                        <h3>Website Authentication</h3>
                    </div>
                    <ul className='service__list' data-aos="fade-down">
                        <li>*<p>Firebase: Google's development platform that provides various tools, including authentication services.</p></li>
                        <li>*<p>User Registration: Allowing users to create accounts with email/password or social media authentication.</p></li>
                        <li>*<p>Role-Based Access Control: Assigning different roles to users to control access to certain resources or features.</p></li>
                        <li>*<p>JWT Tokens: Using JSON Web Tokens for secure transmission of user authentication information.</p></li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Service;