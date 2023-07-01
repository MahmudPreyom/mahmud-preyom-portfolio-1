import { useEffect, useRef } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import Header1 from "../components/header/Header1";
import Nav from "../components/nav/Nav";
import Project from "../components/project/Project";
import { motion, useAnimation, useInView } from "framer-motion"


const Main = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(()=>{
        if (isInView){
            mainControls.start("visible")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);
    return (
        <div ref={ref}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            >
            {/* <Header1></Header1> */}
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
            </motion.div>
        </div>
    );
};

export default Main;