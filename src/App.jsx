import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null); // ✅ Moved outside of JSX
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <Home ref={homeRef} aboutRef={aboutRef} />
            {/* <Home homeRef={homeRef} aboutRef={aboutRef} /> */}
            <About ref={aboutRef} />
            <Skill ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
        </>
    );
}

export default App;
