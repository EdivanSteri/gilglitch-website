import { useState } from "react";

import "../../styles/Gallery/GalleryFilter.css";

import GalleryMenuFilters from "./GalleryMenuFilters";
import GalleryFilterItem from "./GalleryFilterItem";

function GalleryFilter({
  allArtPieces,
  filteredArtPieces,
  setFilteredArtPieces,
}) {
  const [artistMenuFilterIsVisible, setArtistMenuFilterIsVisible] =
    useState(false);
  const [dateMenuFilterIsVisible, setDateMenuFilterIsVisible] = useState(false);
  const [activeFilterDate, setActiveFilterDate] = useState("Newest");
  const [activeFilterArtist, setActiveFilterArtist] = useState("All Artists");

  const toogleMenuFilters = (setMenu) => {
    setMenu((prev) => !prev);
  };

  /**
   * funzione che restituisce l'elenco dei cantanti univoci dall'array iniziale
   * @param {*} arr array da cui prendere i nomi corrispondenti ai cantanti
   * @returns restituisce l'elenco dei cantanti univoci da arr
   */
  const getArtistsFromArtPiecesArray = (arr) => [
    ["All Artists"],
    ...new Set(arr.flatMap((el) => el.artist)),
  ];

  const artistsList = getArtistsFromArtPiecesArray(allArtPieces);
  const datesListFilters = ["Newest", "Oldest"];

  return (
    <div className="gallery_filter">
      <div className="filter_icon_item u-hide">
        <span className="material-symbols-outlined filter_icon">
          keyboard_arrow_down
        </span>
        <span className="material-symbols-outlined close_filter_menu_btn u-hide">
          close
        </span>
      </div>
      <GalleryFilterItem
        activeFilterText={activeFilterDate}
        toogleMenuFilters={toogleMenuFilters}
        setDateMenuFilterIsVisible={setDateMenuFilterIsVisible}
        setArtistMenuFilterIsVisible={setArtistMenuFilterIsVisible}
        isFilterItemByDate={true}
      />
      <GalleryFilterItem
        activeFilterText={activeFilterArtist}
        toogleMenuFilters={toogleMenuFilters}
        setDateMenuFilterIsVisible={setDateMenuFilterIsVisible}
        setArtistMenuFilterIsVisible={setArtistMenuFilterIsVisible}
        isFilterItemByDate={false}
      />
      <GalleryMenuFilters
        allArtPieces={allArtPieces}
        filteredArtPieces={filteredArtPieces}
        setFilteredArtPieces={setFilteredArtPieces}
        menuFilterIsVisible={dateMenuFilterIsVisible}
        setMenuIsVisible={setDateMenuFilterIsVisible}
        menuList={datesListFilters}
        toogleMenuFilters={toogleMenuFilters}
        setActiveFilter={setActiveFilterDate}
        isArtistMenu={false}
      />
      <GalleryMenuFilters
        allArtPieces={allArtPieces}
        filteredArtPieces={filteredArtPieces}
        setFilteredArtPieces={setFilteredArtPieces}
        menuFilterIsVisible={artistMenuFilterIsVisible}
        setMenuIsVisible={setArtistMenuFilterIsVisible}
        menuList={artistsList}
        toogleMenuFilters={toogleMenuFilters}
        setActiveFilter={setActiveFilterArtist}
        isArtistMenu={true}
      />
    </div>
  );
}

export default GalleryFilter;
