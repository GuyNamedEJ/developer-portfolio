import Project1 from "../assets/thumbnail-project-1-small.webp";
export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <button className="btn">Contact Me</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Project1} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Design Portfolio</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="card-btn">
              <button className="btn">View Project</button>
              <button className="btn">View Code</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
