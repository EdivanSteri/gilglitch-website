import "../../styles/Header/NavbarIcon.css";

function NavbarIcon({ iconName }) {
  return (
    <div className={`icon_wrapper ${iconName === "menu" ? "u-hide" : ""}`}>
      <span className="material-symbols-outlined icon">{iconName}</span>
    </div>
  );
}

export default NavbarIcon;
