import DropDownMenuItems from "./DropdownMenuItems";
import NavbarItem from "./NavbarItem";

function DropDownMenu({ linkText, classes, hideTimer, scheduleHide }) {
  const inspirationsList = [
    {
      key: 5,
      linkText: "Music",
      sectionLink: "#section__3",
      classes: "btn navbar_item menu_link",
    },
    {
      key: 6,
      linkText: "About Me",
      sectionLink: "#section__5",
      classes: "btn navbar_item menu_link",
    },
  ];

  const collaborationsList = [
    {
      key: 7,
      linkText: "Highlights",
      sectionLink: "#section__4",
      classes: "btn navbar_item menu_link",
    },
    {
      key: 8,
      linkText: "Sponsorships",
      sectionLink: "#section__7",
      classes: "btn navbar_item menu_link sponsorship_form",
    },
    {
      key: 9,
      linkText: "Commissions",
      sectionLink: "#section__7",
      classes: "btn navbar_item menu_link commision_form",
    },
  ];

  return (
    <>
      {classes.includes("navbar_dropdown_trigger") && (
        <div
          onMouseEnter={() => {
            clearTimeout(hideTimer);
          }}
          onMouseLeave={(e) => {
            scheduleHide(e.currentTarget, e.currentTarget);
          }}
          className={`menu_${linkText.toLowerCase()}`}
        >
          <ul className={`${linkText.toLowerCase()}_list`}>
            {linkText.toLowerCase() === "inspirations" ? (
              <DropDownMenuItems menu={inspirationsList} />
            ) : (
              <DropDownMenuItems menu={collaborationsList} />
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default DropDownMenu;
