import "../../styles/Header/Navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar_list navbar_smooth_scroll_list">
        <NavbarItem
          linkText="Home"
          classes="btn navbar_item"
          sectionLink="section__1"
        />
        <NavbarItem
          linkText="Gallery"
          classes="btn navbar_item"
          sectionLink="section__2"
        />
        <NavbarItem
          linkText="Inspirations"
          classes="btn navbar_item inspirations_item navbar_dropdown_trigger"
        />
        <NavbarItem
          linkText="Collaborations"
          classes="btn navbar_item collaborations_item navbar_dropdown_trigger"
        />
        <NavbarItem
          linkText="Instgram"
          classes="btn navbar_item"
          sectionLink="section__8"
        />
      </ul>
    </nav>
  );
}

export default Navbar;
