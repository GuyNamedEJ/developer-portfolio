import Planets from "../assets/the-planets-preview.jpg";
import AroundTheWorld from "../assets/countries-preview.jpg";
import Splitter from "../assets/splitter-preview.jpg";
import ClockApp from "../assets/clock-preview.jpg";
import RPSPreview from "../assets/rps-preview.jpg";
export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <button className="btn">Contact Me</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Planets} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">The Planets</h3>
            <div className="tech">
              <span>Node.js</span>
              <span>EJS</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://all-about-the-planets.onrender.com/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/planets-fact-site"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={AroundTheWorld} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Around The World</h3>
            <div className="tech">
              <span>React</span>
              <span>Tailwind</span>
              <span>Material UI</span>
              <span>Countries REST API</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://country-data.onrender.com/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/WhereInTheWorld"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Splitter} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Splitter Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>Bootstrap 5</span>
              <span>Javascript</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://github.com/GuyNamedEJ/tip-calculator-app-main"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://tip-calculator-app-main-jade.vercel.app"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={ClockApp} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Clock App</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>REST APIs</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://github.com/GuyNamedEJ/tip-calculator-app-main"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/clock-app-main"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={RPSPreview} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Rock, Paper, Scissors</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://github.com/GuyNamedEJ/rock-paper-scissors-master"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://rock-paper-scissors-guynamedej.vercel.app/"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={RPSPreview} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Rock, Paper, Scissors</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <div className="card-btn">
            <a target="_blank" href="https://github.com/GuyNamedEJ/rock-paper-scissors-master"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://rock-paper-scissors-guynamedej.vercel.app/"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
