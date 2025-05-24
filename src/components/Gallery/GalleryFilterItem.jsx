import "../../styles/Gallery/GalleryFilterItem.css";

function GalleryFilterItem({
  activeFilterText,
  toogleMenuFilters,
  setDateMenuFilterIsVisible,
  setArtistMenuFilterIsVisible,
  isFilterItemByDate,
}) {
  return (
    <div className="filter_item">
      {isFilterItemByDate ? "Sort by Date" : "Filter by Artist"}:&nbsp;
      <span
        className={`${
          isFilterItemByDate ? "date_filter" : "artist_filter"
        }_active`}
      >
        {activeFilterText}
      </span>
      <span
        onClick={() =>
          toogleMenuFilters(
            isFilterItemByDate
              ? setDateMenuFilterIsVisible
              : setArtistMenuFilterIsVisible
          )
        }
        className="material-symbols-outlined arrow_drop_down_icon arrow_drop_down_icon_date"
      >
        arrow_drop_down
      </span>
    </div>
  );
}

export default GalleryFilterItem;
