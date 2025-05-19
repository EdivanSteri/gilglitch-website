import "../../styles/Header/NavbarResponse.css";
import NavbarIcon from "./NavbarIcon";
import NavbarItem from "./NavbarItem";

function NavbarResponse() {
  return (
    <nav className="navbar_response u-hide">
      <NavbarIcon iconName="close" />
      <ul className="navbar_list_response navbar_smooth_scroll_list">
        <NavbarItem
          linkText="Gallery"
          classes="btn navbar_item menu_link"
          sectionLink="section__2"
        />
        <NavbarItem
          linkText="Music"
          classes="btn navbar_item menu_link"
          sectionLink="section__3"
        />
        <NavbarItem
          linkText="About Me"
          classes="btn navbar_item menu_link"
          sectionLink="section__5"
        />
        <NavbarItem
          linkText="Highlights"
          classes="btn navbar_item menu_link"
          sectionLink="section__4"
        />
        <NavbarItem
          linkText="Sponsorships"
          classes="btn navbar_item menu_link sponsorship_form"
          sectionLink="section__7"
        />
        <NavbarItem
          linkText="Commissions"
          classes="btn navbar_item menu_link commision_form"
          sectionLink="section__7"
        />
        <NavbarItem
          linkText="Instgram"
          classes="btn navbar_item menu_link"
          sectionLink="section__8"
        />
      </ul>
    </nav>
  );
}

export default NavbarResponse;
