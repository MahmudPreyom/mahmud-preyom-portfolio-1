import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Project from "../components/project/Project";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;