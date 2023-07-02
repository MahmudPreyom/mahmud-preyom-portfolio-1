import { Link } from "react-router-dom";
// import Resume from "../../assets/mahmud.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <Link data-aos="zoom-in" to="https://drive.google.com/file/d/1-k5U101quRB7BEd2gY5Phm26mimkttQO/view?usp=drive_link" download className="btn">Resume</Link>
            <a data-aos="zoom-in" href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
    );
};

export default CTA;