import Resume from "../../assets/mahmud.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <a href={Resume} download className="btn">Resume</a>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
    );
};

export default CTA;