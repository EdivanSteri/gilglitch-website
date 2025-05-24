import { useState } from "react";
import "../../styles/Gallery/Gallery.css";

import allArtPieces from "./GetGalleryImages";
import ModalImgGallery from "./modalImgGallery";
import GalleryImgWrapper from "./GalleryImgWrapper";
import GalleryFilter from "./GalleryFilter";

function Gallery() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [filteredArtPieces, setFilteredArtPieces] = useState(allArtPieces);
  const [modalImage, setModalImage] = useState({});

  const showModal = (e) => {
    const id = Number(e.target.id);
    const data = allArtPieces.find((art) => art.id === id);
    if (!data) {
      // nel caso non trovi nulla
      return;
    }
    data.alt = e.target.alt;

    setModalImage(data);
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalImage({});
    setModalIsVisible(false);
  };

  return (
    <section
      className="gallery_section section_to_fade u-mb-1-9-6"
      id="section__2"
    >
      <div className="gallery_heading">
        <h2 className="secondary_heading">
          Every stroke, a beat. Every color, a note.
        </h2>
        <p>Feel the energy of music through every artwork</p>
      </div>
      <div className="gallery_content">
        <GalleryFilter
          allArtPieces={allArtPieces}
          filteredArtPieces={filteredArtPieces}
          setFilteredArtPieces={setFilteredArtPieces}
        />
        <div className="gallery_imgs_wrapper">
          <div className="gallery_imgs">
            {filteredArtPieces.map((art, index) => {
              return (
                <GalleryImgWrapper
                  key={index}
                  showModal={showModal}
                  art={art}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ModalImgGallery
        modalIsVisible={modalIsVisible}
        modalImage={modalImage}
        hideModal={hideModal}
      />
    </section>
  );
}

export default Gallery;
