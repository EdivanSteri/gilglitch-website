import { useEffect, useRef } from "react";
import "../../styles/Gallery/ModalImgGallery.css";

function ModalImgGallery({ modalIsVisible, modalImage, hideModal }) {
  const overlayRef = useRef(null);

  // Ogni volta che apro il modal, forzo il focus sulla div
  useEffect(() => {
    if (modalIsVisible) {
      overlayRef.current?.focus();
    }
  }, [modalIsVisible]);

  const handleOnClickModal = (e) => {
    // se il click NON è sull’outer container, non facciamo nulla
    if (e.target !== e.currentTarget) return;

    hideModal();
  };

  const handleKeyDownModal = (e) => {
    if (e.key === "Escape") {
      hideModal();
    }
  };

  return (
    <>
      {modalIsVisible && (
        <div
          ref={overlayRef}
          tabIndex={0}
          onClick={handleOnClickModal}
          onKeyDown={handleKeyDownModal}
          className="img_gallery_modal"
        >
          <div className="modal_content">
            <div className="img_container">
              <img
                className="img_modal"
                src={modalImage.src}
                alt={modalImage.alt}
              />
            </div>
            <div className="details">
              <h3 className="modal_title">{modalImage.title}</h3>
              <p className="modal_description">{modalImage.description}</p>
              <span className="modal_date">{modalImage.date}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalImgGallery;
