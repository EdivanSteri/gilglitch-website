import "../../styles/Gallery/GalleryMenuFilters.css";

function GalleryMenuFilters({
  allArtPieces,
  filteredArtPieces,
  setFilteredArtPieces,
  menuFilterIsVisible,
  setMenuIsVisible,
  menuList,
  toogleMenuFilters,
  setActiveFilter,
  isArtistMenu,
}) {
  const filterGallery = (e) => {
    e.preventDefault();

    /* filter by dates */
    const label = e.target.textContent.trim();

    if (label.toLowerCase() === "newest" || label.toLowerCase() === "oldest") {
      const filteredByDate =
        label.toLowerCase() === "oldest"
          ? [...filteredArtPieces].sort(
              (a, b) => new Date(a.date) - new Date(b.date)
            )
          : [...filteredArtPieces].sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            );
      setFilteredArtPieces(filteredByDate);
      setActiveFilter(label);
      toogleMenuFilters(setMenuIsVisible);

      return filteredByDate;
    }

    /* filter by artists */
    if (label.toLowerCase() === "all artists") {
      setFilteredArtPieces(allArtPieces);
      setActiveFilter(label);
      return;
    }

    const filtered = allArtPieces.filter((el) => el.artist.includes(label));

    setFilteredArtPieces(filtered);
    setActiveFilter(label);
    toogleMenuFilters(setMenuIsVisible);

    return filtered;
  };

  const cls = isArtistMenu ? "artist_filter" : "date_filter";

  return (
    <>
      {menuFilterIsVisible && (
        <div className={`${cls}_wrapper`}>
          <ul className={`${cls}_list`}>
            {menuList.map((el, index) => {
              return (
                <li onClick={filterGallery} key={index}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default GalleryMenuFilters;
