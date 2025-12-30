import Hero from '../components/sections/Hero';
import WorkHistory from '../components/sections/WorkHistory';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

function Home() {
    return (
        <>
            <Hero />
            <WorkHistory />
            <Projects />
            <Skills />
            <Experience />
            <Certifications />
            <Contact />
        </>
    );
}

export default Home;

