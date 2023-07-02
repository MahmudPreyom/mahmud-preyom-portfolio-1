import Resume from "../../assets/mahmud.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <a data-aos="zoom-in" href={Resume} download className="btn">Resume</a>
            <a data-aos="zoom-in" href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
    );
};

export default CTA;