import Socials from "./Socials";
import MobileHeroImg from "../assets/image-profile-mobile.webp";
import TabletHeroImg from "../assets/image-profile-tablet.webp";
import DesktopHeroImg from "../assets/image-profile-desktop.webp";
export default function Hero() {
  return (
    <section className="hero">
      <Socials />
      <img className="mobile-hero-img" src={MobileHeroImg} alt="" />
      <img className="tablet-hero-img" src={TabletHeroImg} alt="" />
      <img className="desktop-hero-img" src={DesktopHeroImg} alt="" />

      <div className="hero-content">
        <div className="hero-title">
          <p>Nice to meet you! I'm <span className="underline">Emmanuel Milord</span>.
          </p>
        </div>

        <p className="hero-text">
          Based in the Silver Spring, MD, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        
      </div>
      <button className="btn">Contact Me</button>
    </section>
  );
}
