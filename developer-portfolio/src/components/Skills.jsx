import BgImage from "../assets/pattern-rings.svg";
export default function Skills() {
  return (
    <section className="skills">
      <img className="skills-bg" src={BgImage} alt="" />
      <div className="skill">
        <h1 className="skill-name">HTML</h1>
        <p className="experience">4 Years Experience</p>
      </div>

      <div className="skill">
        <h1 className="skill-name">CSS</h1>
        <p className="experience">4 Years Experience</p>
      </div>

      <div className="skill">
        <h1 className="skill-name">Javascript</h1>
        <p className="experience">4 Years Experience</p>
      </div>

      <div className="skill">
        <h1 className="skill-name">Accessibility</h1>
        <p className="experience">4 Years Experience</p>
      </div>

      <div className="skill">
        <h1 className="skill-name">React</h1>
        <p className="experience">3 Years Experience</p>
      </div>

      <div className="skill">
        <h1 className="skill-name">Sass</h1>
        <p className="experience">3 Years Experience</p>
      </div>
    </section>
  );
}
