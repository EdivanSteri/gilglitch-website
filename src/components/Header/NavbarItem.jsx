import "../../styles/Header/NavbarItem.css";
import DropDownMenu from "./DropDownMenu.jsx";

function NavbarItem({ id, linkText, classes, sectionLink = "" }) {
  // Variabile per gestire il timer dell'hover sui link della navbar
  let hideTimer;

  const show = (menu) => {
    clearTimeout(hideTimer);
    menu.style.display = "block";
  };

  const scheduleHide = (trigger, menu) => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!trigger.matches(":hover") && !menu.matches(":hover")) {
        menu.style.display = "none";
      }
    }, 100);
  };

  return (
    <li key={id}>
      <a
        onMouseEnter={(e) => {
          const menu = e.target.nextElementSibling;
          if (
            e.target.textContent.toLowerCase() === "inspirations" ||
            e.target.textContent.toLowerCase() === "collaborations"
          )
            show(menu);
        }}
        onMouseLeave={(e) => {
          const trigger = e.currentTarget;
          const menu = e.target.nextElementSibling;
          if (
            e.target.textContent.toLowerCase() === "inspirations" ||
            e.target.textContent.toLowerCase() === "collaborations"
          )
            scheduleHide(trigger, menu);
        }}
        className={classes}
        href={`#${sectionLink}`}
      >
        {linkText}
      </a>
      <DropDownMenu
        linkText={linkText}
        classes={classes}
        hideTimer={hideTimer}
        scheduleHide={scheduleHide}
      />
    </li>
  );
}

export default NavbarItem;
