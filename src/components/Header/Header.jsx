import "../../styles/Header/Header.css";
import Navbar from "./Navbar";
import NavbarIcon from "./NavbarIcon";
import NavbarResponse from "./NavbarResponse";

function Header() {
  return (
    <header className="hero_section u-mb-1-9-6" id="section__1">
      <NavbarResponse />
      <div className="left_hero_section">
        <div className="hero_header">
          <h1 className="primary_heading">GILGLITCH</h1>
          <p className="hero_slogan">Where Music Meets Art</p>
          <a
            className="btn explore_gallery_btn scroll_to_gallery"
            href="#section__2"
          >
            Explore the gallery
          </a>
        </div>
      </div>
      <div className="right_hero_section">
        <NavbarIcon iconName="menu" />
        <Navbar />
        <div>
          <img
            className="img_hero_section"
            src="/tha-supreme-sulla-luna-senza-sfondo.png"
            alt="sketch by Tha Supreme on the moon"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
