import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Skills from './components/Skills'
import Projects from "./components/Projects";

export default function App()
{
    return(
        <div className="container">
            <Hero />
            <Skills />
            <Projects />
        </div>
    )
}