import NavbarItem from "./NavbarItem";

function DropDownMenuItems({ menu }) {
  return (
    <>
      {menu.map((el) => {
        return (
          <NavbarItem
            key={el.key}
            linkText={el.linkText}
            classes={el.classes}
            sectionLink={el.sectionLink}
          />
        );
      })}
    </>
  );
}

export default DropDownMenuItems;
