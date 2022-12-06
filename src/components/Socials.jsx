import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'

export default function Socials()
{
    return (
        <nav>
            <h1 className="logo">adamkeyes</h1>
            <div className="socials">
                <a href="#" className="social-item"><FaGithub /></a>
                <a href="#" className="social-item"><SiFrontendmentor /></a>
                <a href="#" className="social-item"><FaLinkedin /></a>
                <a href="#" className="social-item"><FaTwitter /></a>
            </div>
        </nav>
    )
}