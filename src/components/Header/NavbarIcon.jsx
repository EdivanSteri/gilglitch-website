import "../../styles/Header/NavbarIcon.css";

function NavbarIcon({ iconName }) {
  const navbarResponseEl = document.querySelector(".navbar_response");
  const hamburgherIconEl = document.querySelector(".hamburgher_icon");

  const initOpeningNavbarIResponsiveMode = function (e) {
    e.preventDefault();

    document.querySelector("");

    navbarResponseEl.classList.toggle("u-hide");
    hamburgherIconEl.classList.toggle("u-hide");
  };

  return (
    <div
      onClick={(e) => initOpeningNavbarIResponsiveMode(e)}
      className={`icon_wrapper ${iconName === "menu" ? "u-hide" : ""}`}
    >
      <span className="material-symbols-outlined icon">{iconName}</span>
    </div>
  );
}

export default NavbarIcon;
