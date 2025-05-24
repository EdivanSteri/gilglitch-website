import "../../styles/Gallery/GalleryImgWrapper.css";

function GalleryImgWrapper({ art, showModal }) {
  return (
    <div onClick={showModal} className="img_wrapper">
      <img
        className={`image_${art.id}`}
        id={`${art.id}`}
        src={`${art.src}`}
        data-src={`${art.dataSrc}`}
        alt={`${art.songName}--${art.artist.join("-")}`}
      />
    </div>
  );
}
export default GalleryImgWrapper;
