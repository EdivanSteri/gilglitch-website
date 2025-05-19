import "../../styles/Header/NavbarItem.css";

function NavbarLink({ linkText, classes, sectionLink = "" }) {
  const inspirationsList = [
    {
      linkText: "Music",
      sectionLink: "#section__3",
      classes: "btn navbar_item menu_link",
    },
    {
      linkText: "About Me",
      sectionLink: "#section__5",
      classes: "btn navbar_item menu_link",
    },
  ];

  const collaborationsList = [
    {
      linkText: "Highlights",
      sectionLink: "#section__4",
      classes: "btn navbar_item menu_link",
    },
    {
      linkText: "Sponsorships",
      sectionLink: "#section__7",
      classes: "btn navbar_item menu_link sponsorship_form",
    },
    {
      linkText: "Commissions",
      sectionLink: "#section__7",
      classes: "btn navbar_item menu_link commision_form",
    },
  ];

  return (
    <li>
      <a className={classes} href={`#${sectionLink}`}>
        {linkText}
      </a>
      {classes.includes("navbar_dropdown_trigger") && (
        <div className={`menu_${linkText.toLowerCase()}`}>
          <ul className={`${linkText.toLowerCase()}_list`}>
            {linkText.toLowerCase() === "inspirations"
              ? inspirationsList.map((el) => {
                  <NavbarLink
                    linkText={el.linkText}
                    classes={el.classes}
                    sectionLink={el.sectionLink}
                  />;
                })
              : collaborationsList.map((el) => {
                  <NavbarLink
                    linkText={el.linkText}
                    classes={el.classes}
                    sectionLink={el.sectionLink}
                  />;
                })}
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavbarLink;
