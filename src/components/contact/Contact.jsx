import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qemrzwr', 'template_w4k4avb', form.current, 'Z_mUev9W9x5mtXq3e')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your message has been sent',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options" data-aos="zoom-in">
                    <article className='contact__option' data-aos="fade-right">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>preyom5076@gmail.com</h5>
                        <a href="mailto:preyom5076@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option' data-aos="fade-up-left">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Mahmud Preyom</h5>
                        <a href="https://m.me/mahmud.preyom" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option' data-aos="fade-left">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801580-367168</h5>
                        <a href="https://api.whatsapp.com/send?phone=+8801580367168" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* END OF THE CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input data-aos="fade-in" type="text" name="name" placeholder='Your Full Name' id="" required />
                    <input data-aos="fade-up" type="email" name='email' placeholder='Your Email' required />
                    <textarea data-aos="zoom-in" name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button  data-aos="zoom-in" type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;