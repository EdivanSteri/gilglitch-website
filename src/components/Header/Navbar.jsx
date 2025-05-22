import "../../styles/Header/Navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const handHover = function (e, number) {
    e.preventDefault();
    if (e.target.classList.contains("navbar_item")) {
      const link = e.target;
      const allLinks = link.closest(".navbar").querySelectorAll(".navbar_item");

      console.log(link.classList);
      allLinks.forEach((l) => {
        // le classi “speciali” da gestire diversamente
        const specialClasses = ["inspirations_item", "collaborations_item"];
        // qual è (se c’è) la classe speciale applicata al link corrente
        const currentSpecial = specialClasses.find((c) =>
          link.classList.contains(c)
        );

        if (l !== link) {
          if (currentSpecial) {
            // se siamo su un link “speciale”, escludi menu_link e gli altri con la stessa classe
            if (
              !l.classList.contains("menu_link") &&
              !l.classList.contains(currentSpecial)
            ) {
              l.style.opacity = number;
            }
          } else {
            // altrimenti (link normale), applica l’opacità a tutti gli altri
            l.style.opacity = number;
          }
        }
      });
    }
  };

  return (
    <nav className="navbar">
      <ul
        onMouseOver={(e) => handHover(e, 0.5)}
        onMouseOut={(e) => handHover(e, 1)}
        className="navbar_list navbar_smooth_scroll_list"
      >
        <NavbarItem
          id={0}
          linkText="Home"
          classes="btn navbar_item"
          sectionLink="section__1"
        />
        <NavbarItem
          id={1}
          linkText="Gallery"
          classes="btn navbar_item"
          sectionLink="section__2"
        />
        <NavbarItem
          id={2}
          linkText="Inspirations"
          classes="btn navbar_item inspirations_item navbar_dropdown_trigger"
        />
        <NavbarItem
          id={3}
          linkText="Collaborations"
          classes="btn navbar_item collaborations_item navbar_dropdown_trigger"
        />
        <NavbarItem
          id={4}
          linkText="Instgram"
          classes="btn navbar_item"
          sectionLink="section__8"
        />
      </ul>
    </nav>
  );
}

export default Navbar;
