"use strict";

/////////////////////////////////////////////////////////////////////////////////////////////////////
// ***************************** dom elements ***************************** \\
/* body */
const wrapperScrollToTopBtn = document.querySelector(
  ".wrapper_scroll_to_top_btn"
);

/* sections */
const section1 = document.querySelector("#section__1");
const section2 = document.querySelector("#section__2");
const section3 = document.querySelector("#section__3");
const section4 = document.querySelector("#section__4");

const allSectionToFade = document.querySelectorAll(".section_to_fade");

/* header section*/
const scrollToGalleryCtaBtn = document.querySelector(".scroll_to_gallery");

// navbar
const navbarListEl = document.querySelector(".navbar_list");
const navbarResponseEl = document.querySelector(".navbar_response");
const navbarSmoothScrollLists = document.querySelectorAll(
  ".navbar_smooth_scroll_list"
);

const navbarIconEl = document.querySelectorAll(".nav_icon");
const hamburgherIconEl = document.querySelector(".hamburgher_icon");
const closeIconEl = document.querySelector(".close_icon");

const navbarDropdownTriggers = document.querySelectorAll(
  ".navbar_dropdown_trigger"
);
const inspirationsItemBtn = document.querySelector(".inspirations_item");
const collaborationsItemBtn = document.querySelector(".collaborations_item");
const menuInspirationsEl = document.querySelector(".menu_inspirations");
const menuCollaborations = document.querySelector(".menu_collaborations");

/* galley section*/
const containerGalleryImgs = document.querySelector(".gallery_imgs");
const containerGalleryContent = document.querySelector(".gallery_content");
const arrowDropDownIconPeriodEL = document.querySelector(
  ".arrow_drop_down_icon_date"
);
const arrowDropDownIconArtistEL = document.querySelector(
  ".arrow_drop_down_icon_artist"
);
const dateFilterWrapperEl = document.querySelector(".date_filter_wrapper");
const artistFilterWrapperEl = document.querySelector(".artist_filter_wrapper");
const filterByNewestEL = document.querySelector(".filter_by_newest");
const filterByOldestEL = document.querySelector(".filter_by_oldest");
const dateFilterActiveEl = document.querySelector(".date_filter_active");
const artistFilterActiveEl = document.querySelector(".artist_filter_active");
const containerAtistFilterList = document.querySelector(".artist_filter_list");
const dateFilterList = document.querySelector(".date_filter_list");

// modal
const containerImgageGalleryModal =
  document.querySelector(".img_gallery_modal");
const modalContent = document.querySelector(".modal_content");
const imageModal = document.querySelector(".img_modal");
const titleModalEl = document.querySelector(".modal_title");
const descriptionModalEl = document.querySelector(".modal_description");
const dateModalEl = document.querySelector(".modal_date");

const filterIconEl = document.querySelector(".filter_icon");
const closeFilterMenuBtn = document.querySelector(".close_filter_menu_btn");
const containerFilterList = document.querySelector(".filter_list");

/* collab section */
const collabSliders = document.querySelectorAll(".slide");
const collabSlideBtnLeft = document.querySelector(".slide_left_btn");
const collabSlideBtnRight = document.querySelector(".slide_right_btn");

/* sklls section */
const barsEl = document.querySelectorAll(".bar");

/* work with me section */
const workWithMeContentEl = document.querySelector(".work_with_me_content");
const workMeContentLeftEl = document.querySelector(".work_me_content_left");
const collabSponsorContentLeft = document.querySelector(
  ".collab_sponsor_content_left"
);
const commissionContentLeft = document.querySelector(
  ".commission_content_left"
);
const collabSponsorContentRight = document.querySelector(
  ".collab_sponsor_content_right"
);
const commissionContentRight = document.querySelector(
  ".commission_content_right"
);
const slideEffectBtns = document.querySelectorAll(".btn_slide_effect");

/* footer section */
const footerEl = document.querySelector(".footer");

// Functions

// aprire il menu navbar in modalità responsiva
navbarIconEl.forEach((iconEl) => {
  iconEl.addEventListener("click", function (e) {
    e.preventDefault();

    navbarResponseEl.classList.toggle("u-hide");
    hamburgherIconEl.classList.toggle("u-hide");
  });
});

// Funzione che apre il modale
const openModal = function () {
  containerImgageGalleryModal.classList.remove("u-hide");
  containerGalleryImgs.style.overflowY = "hidden";
  document.body.style.overflow = "hidden";
  containerGalleryContent.style.filter = "blur(.35rem)";
};

// Funzione che chiude il modale
const closeModal = function () {
  containerImgageGalleryModal.classList.add("u-hide");
  containerGalleryContent.style.filter = "none";
  containerGalleryImgs.style.overflowY = "scroll";
  document.body.style.overflow = "auto";
};

// Funzione che crea il modale
const createModalContainer = function (idImage) {
  const objImage = artPieces.find((art) => art.id === +idImage);

  // Forza il caricamento dell'immagine nel modale
  if (!loadedImages.includes(artPieces.includes(objImage))) {
    console.log("lazy image on modal");
    console.log(objImage.src);
    objImage.src = objImage.dataSrc;
    console.log(objImage.src);

    imageModal.classList.remove("lazy_image");
  }

  imageModal.src = `${objImage.src}`;
  titleModalEl.textContent = `${objImage.title}`;
  descriptionModalEl.textContent = `${objImage.description}`;
  dateModalEl.textContent = `${objImage.date}`;
};

//////////////////////////////////////////
// Event listner

// Galery Filter by dates
arrowDropDownIconPeriodEL.addEventListener("click", function () {
  if (!artistFilterWrapperEl.classList.contains("u-hide")) {
    artistFilterWrapperEl.classList.add("u-hide");
  }
  dateFilterWrapperEl.classList.toggle("u-hide");
});

// Delegazione eventi
dateFilterList.addEventListener("click", function (e) {
  e.preventDefault();
  if ([...e.target.classList].some((cl) => cl.startsWith("filter_by_"))) {
    let artPiecesFilteredByDate;
    if (e.target.className.includes("newest")) {
      artPiecesFilteredByDate = artPieces
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (e.target.className.includes("oldest")) {
      artPiecesFilteredByDate = artPieces
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    artPiecesFilteredByDate.forEach((artFiltered) => {
      // Cambia il src per corrispondere a dataSrc
      artFiltered.src = artFiltered.dataSrc;
    });

    dateFilterWrapperEl.classList.add("u-hide");
    dateFilterActiveEl.textContent = e.target.textContent;
    displayGalleryImgs(artPiecesFilteredByDate, true);
  }
});

// Gallery filter by artist
arrowDropDownIconArtistEL.addEventListener("click", function () {
  if (!dateFilterWrapperEl.classList.contains("u-hide")) {
    dateFilterWrapperEl.classList.add("u-hide");
  }
  artistFilterWrapperEl.classList.toggle("u-hide");
});

// Delegazione degli eventi
containerAtistFilterList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("artist_link")) {
    if (e.target.textContent !== "All Artists") {
      const artPiecesFilteredByArtist = artPieces
        .slice()
        .filter((art) => art.artist.includes(`${e.target.textContent}`));

      artPiecesFilteredByArtist.forEach((artFiltered) => {
        // Cambia il src per corrispondere a dataSrc
        artFiltered.src = artFiltered.dataSrc;
      });
      displayGalleryImgs(artPiecesFilteredByArtist, true);
    } else {
      const tmp = artPieces.slice().map((artFiltered) => {
        return {
          ...artFiltered,
          src: artFiltered.dataSrc,
        };
      });
      displayGalleryImgs(tmp, true);
    }
    artistFilterWrapperEl.classList.add("u-hide");
    artistFilterActiveEl.textContent = `${e.target.textContent}`;
  }
});

// Check largheza viewport per chiudere automaticamente un menu se si scende sotto quella larghezza
// e chiuderne un altro se si supera invece
//(1376px -> 1376px/16 = 86em)
const mq = window.matchMedia("(max-width: 86em)");

// Funzione per forzare la chiusura del menu
const closeMenu = (
  elToClose,
  isResponsiveGalleryMenu = false,
  filertIcon = undefined,
  closeFilterMenuBtn = undefined
) => {
  // se il menu è aperto (non ha già la classe u-hide), nascondilo
  if (!elToClose.classList.contains("u-hide")) {
    elToClose.classList.add("u-hide");

    if (
      isResponsiveGalleryMenu &&
      filertIcon !== undefined &&
      closeFilterMenuBtn !== undefined
    ) {
      filertIcon.classList.toggle("u-hide");
      closeFilterMenuBtn.classList.toggle("u-hide");
    }
  }
};

// 4. Listener che scatta quando lo stato della media query cambia
mq.addEventListener("change", (e) => {
  if (e.matches) {
    // viewport sotto 86em
    closeMenu(artistFilterWrapperEl);
    closeMenu(dateFilterWrapperEl);
  } else {
    // viewport sopra 86em
    closeMenu(containerFilterList, true, filterIconEl, closeFilterMenuBtn);
  }
});

// Controllo iniziale al caricamento della pagina,
// così se l'utente apre direttamente in mobilità il menu corrispettivo parte già chiuso
if (mq.matches) {
  closeMenu(artistFilterWrapperEl);
  closeMenu(dateFilterWrapperEl);
  closeMenu(containerFilterList, true, filterIconEl, closeFilterMenuBtn);
}

// funziona sia per la galleria impostata di default e anche quando viene applicato un filtro su di essa
// delegazione eventi
containerGalleryContent.addEventListener("click", function (e) {
  // controllo se la classe dell'elemento inizia con quella stringa, cioè se è una immagine della galleria
  if ([...e.target.classList].some((c) => c.startsWith("image_"))) {
    const img = e.target;
    createModalContainer(img.id);

    wrapperScrollToTopBtn.style.opacity = 0;
    openModal();
  }
});

// Quando clicchi fuori dal modale (cioè sul container che fa da overlay)
containerImgageGalleryModal.addEventListener("click", (e) => {
  // Se il click è proprio sull'overlay e NON dentro il modale
  if (!modalContent.contains(e.target)) {
    closeModal();
    wrapperScrollToTopBtn.style.opacity = 1;
  }
});

// Quando clicchi sul tast ESC chiudi il modale
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    wrapperScrollToTopBtn.style.opacity = 1;
  }
});

/////////////////////////////////////////////////////////////////
/* smooth scroll*/
const scrollToSection = function (e) {
  const link = e.target.closest(`.${this}`);

  if (!link) return;

  let href = link.getAttribute("href");
  console.log(href);

  if (href && href !== "#" && href.startsWith("#")) {
    e.preventDefault();
    const sectionToScroll = document.querySelector(href);
    if (!sectionToScroll) return;

    /* Disattivo l'effetto fade-in per permettere allo smooth scroll di posizionare la sezione esattamente all'inizio, senza offset */
    sectionToScroll.style.transform = "translateY(0)";
    sectionToScroll.style.transition = "none";
    sectionToScroll.style.opacity = 1;

    sectionToScroll?.scrollIntoView({ behavior: "smooth" });

    // la navbar response deve sparire appena viene cliccato su un link
    if (!navbarResponseEl.classList.contains("u-hide")) {
      navbarResponseEl.classList.add("u-hide");
      hamburgherIconEl.classList.remove("u-hide");
    }
  }
};

// scrool smooth per i link della navbar e del footer, delegazione degli eventi
navbarSmoothScrollLists.forEach((el) => {
  el.addEventListener("click", scrollToSection.bind("navbar_item"));
});
footerEl.addEventListener("click", scrollToSection.bind("link_ft_to-sc"));

scrollToGalleryCtaBtn.addEventListener("click", function (e) {
  e.preventDefault();

  /* Disattivo l'effetto fade-in per permettere allo smooth scroll di posizionare la sezione esattamente all'inizio, senza offset */
  section2.style.transition = "none";
  section2.style.transform = "translateY(0)";
  section2.style.opacity = 1;

  // Scrolling with smooth effect modern version
  section2.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////////////////////////////
// smoth scroll to top btn
wrapperScrollToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Scrolling with smooth effect modern version
  section1.scrollIntoView({ behavior: "smooth" });
});

// 1. Riferimenti e variabili
let sec1Height, sec1MB, headerObserver;

// 2. Calcola height e margin-bottom
function updateHeaderMeasurements() {
  sec1Height = section1.getBoundingClientRect().height;
  sec1MB = parseFloat(window.getComputedStyle(section1).marginBottom);
}

// 3. (Ri)crea l’IntersectionObserver con il rootMargin corretto
function setupHeaderObserver() {
  // Scollega il vecchio observer, se esiste
  if (headerObserver) headerObserver.disconnect();

  // Offset in px
  const offset = sec1Height - sec1MB;

  headerObserver = new IntersectionObserver(scroollToTopBtnVisibility, {
    root: null,
    threshold: 0,
    rootMargin: `-${offset}px 0px 0px 0px`,
  });
  headerObserver.observe(section1);
}

// 4. Callback di visibilità
function scroollToTopBtnVisibility(entries) {
  const entry = entries[0];
  wrapperScrollToTopBtn.style.opacity = entry.isIntersecting ? 0 : 1;
}

// 5. Inizializza e aggiorna al resize
window.addEventListener("DOMContentLoaded", () => {
  updateHeaderMeasurements();
  setupHeaderObserver();
});
window.addEventListener("resize", () => {
  updateHeaderMeasurements();
  setupHeaderObserver();
});

// Smooth scroll to section
const ctaToFormBtn = document.querySelector(".cta_to_form");
ctaToFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
});

//gallery response
filterIconEl.addEventListener("click", function () {
  // Costruisco il contenuto HTML da inserire nel container
  const html = `
          <div class="filter_content">
          <h3>Filter By Date</h3>
          ${dateFilterWrapperEl.getElementsByTagName("ul")[0].outerHTML}
          <h3>Filter By Artists</h3>
          ${artistFilterWrapperEl.getElementsByTagName("ul")[0].outerHTML}
        </div>
      `;

  console.log(html);

  // Imposto il contenuto (puoi decidere se ogni volta reinserirlo o solo la prima volta)
  containerFilterList.innerHTML = html;
  console.log(containerFilterList);

  // Alterna la visibilità del container: se è visibile, lo nasconde, altrimenti lo mostra
  containerFilterList.classList.toggle("u-hide");
  filterIconEl.classList.toggle("u-hide");
  closeFilterMenuBtn.classList.toggle("u-hide");

  // Delegazione degli eventi
  containerFilterList.addEventListener("click", function (e) {
    e.preventDefault();

    let artPiecesFiltered;
    if (e.target.classList.contains("artist_link")) {
      if (e.target.textContent !== "All Artists") {
        artPiecesFiltered = artPieces
          .slice()
          .filter((art) => art.artist.includes(`${e.target.textContent}`));

        artPiecesFiltered.forEach((artFiltered) => {
          // Cambia il src per corrispondere a dataSrc
          artFiltered.src = artFiltered.dataSrc;
        });

        displayGalleryImgs(artPiecesFiltered, true);
      } else {
        const tmp = artPieces.slice().map((artFiltered) => {
          return {
            ...artFiltered,
            src: artFiltered.dataSrc,
          };
        });
        displayGalleryImgs(tmp, true);
      }

      artistFilterActiveEl.textContent = `${e.target.textContent}`;
    } else if (
      [...e.target.classList].some((cl) => cl.startsWith("filter_by_"))
    ) {
      if (e.target.className.includes("newest")) {
        artPiecesFiltered = artPieces
          .slice()
          .sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (e.target.className.includes("oldest")) {
        artPiecesFiltered = artPieces
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      artPiecesFiltered.forEach((artFiltered) => {
        // Cambia il src per corrispondere a dataSrc
        artFiltered.src = artFiltered.dataSrc;
      });

      dateFilterActiveEl.textContent = e.target.textContent;
      displayGalleryImgs(artPiecesFiltered, true);
    }

    containerFilterList.classList.add("u-hide");
    filterIconEl.classList.remove("u-hide");
    closeFilterMenuBtn.classList.add("u-hide");
  });
});

closeFilterMenuBtn.addEventListener("click", function () {
  containerFilterList.classList.add("u-hide");
  filterIconEl.classList.remove("u-hide");
  closeFilterMenuBtn.classList.add("u-hide");
});

///////////////////////////////////////////////////////////////////////////////////
//Slider

let currentCollabSlide = 0;
const maxCollabSlides = collabSliders.length;

const goToSlide = function (slide) {
  collabSliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const goToNextSlide = function () {
  currentCollabSlide === maxCollabSlides - 1
    ? (currentCollabSlide = 0)
    : currentCollabSlide++;

  goToSlide(currentCollabSlide);
};

const goToPreviouslySlide = function () {
  currentCollabSlide === 0
    ? (currentCollabSlide = maxCollabSlides - 1)
    : currentCollabSlide--;

  goToSlide(currentCollabSlide);
};

collabSlideBtnRight.addEventListener("click", goToNextSlide);
collabSlideBtnLeft.addEventListener("click", goToPreviouslySlide);

// Slider effect with arros only if the section is on the viewport at least 25% visible
const arrowKeyHandler = function arrowKeyHandler(e) {
  if (e.key === "ArrowRight") goToNextSlide();
  if (e.key === "ArrowLeft") goToPreviouslySlide();
};

const slideWithArrwsKey = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // la sezione è dentro la viewport
      if (!arrowsSlideListenerActive) {
        document.addEventListener("keydown", arrowKeyHandler);
        arrowsSlideListenerActive = true;
        console.log("Listener frecce ATTIVATO");
      }
    } else {
      // la sezione è uscita dalla viewport
      if (arrowsSlideListenerActive) {
        document.removeEventListener("keydown", arrowKeyHandler);
        arrowsSlideListenerActive = false;
        console.log("Listener frecce DISATTIVATO");
      }
    }
  });
};

const slideObserver = new IntersectionObserver(slideWithArrwsKey, {
  root: null,
  threshold: 0.25,
});

slideObserver.observe(section4);

///////////////////////////////////////////////////////////////////////////////////
// skills bars
const setSkillsBarsWidthAndStyleTransition = function (
  transitionDuration,
  isIntersecting
) {
  barsEl.forEach((el) => {
    el.style.transitionDuration = `${transitionDuration}s`;
    el.style.width = `${isIntersecting ? el.dataset.width + "%" : 0}`;
  });
};

const setSkillsBarsAnimation = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      /* nella viewport */
      setSkillsBarsWidthAndStyleTransition(3, entry.isIntersecting);
    } else {
      /* non nella viewport */
      setSkillsBarsWidthAndStyleTransition(0.3, entry.isIntersecting);
    }
  });
};

const skillsObserver = new IntersectionObserver(setSkillsBarsAnimation, {
  root: null,
  threshold: 0,
});

const section5 = document.querySelector("#section__6");
skillsObserver.observe(section5);

///////////////////////////////////////////////////////////////////////////////////
/* work with me section */
const updateStyleToEffectSlideOnform = function () {
  // work with me content left
  workMeContentLeftEl.classList.toggle(
    "mode_collab_sponsor-work_me_content_left"
  );
  workMeContentLeftEl.classList.toggle("mode_commission-work_me_content_left");

  // wor with me content
  workWithMeContentEl.classList.toggle("mode_collab_sponsor-work_me_content");
  workWithMeContentEl.classList.toggle("mode_commission-work_me_content");

  commissionContentLeft.classList.toggle("u-hide");
  collabSponsorContentLeft.classList.toggle("u-hide");

  // collab sponsor content right
  collabSponsorContentRight.classList.toggle(
    "mode_collab_sponsor-collab_sponsor_content_right"
  );
  collabSponsorContentRight.classList.toggle(
    "mode_commission-collab_sponsor_content_right"
  );

  // commission content right
  commissionContentRight.classList.toggle(
    "mode_collab_sponsor-commission_content-right"
  );
  commissionContentRight.classList.toggle(
    "mode_commission-commission_content-right"
  );
};

const handleSlideEffect = function (e) {
  console.log(e.target);
  e.preventDefault();
  updateStyleToEffectSlideOnform();
};

slideEffectBtns.forEach((btn) => {
  btn.addEventListener("click", handleSlideEffect);
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
/**
 * funzione che restituisce l'elenco dei cantanti univoci dall'array iniziale
 * @param {*} arr array da cui prendere i nomi corrispondenti ai cantanti
 * @returns restituisce l'elenco dei cantanti univoci da arr
 */
const getArtistsFromArtPiecesArray = (arr) => [
  ...new Set(arr.flatMap((el) => el.artist)),
];

/**
 * funzione che ordina un array per data  in modo descrescente
 * @param {*} arr array da ordinare
 * @returns ritorna un array ordinato in modo decrescente
 */
const orderByDescendingDate = (arr) =>
  arr.sort((a, b) => new Date(b.date) - new Date(a.date));

/**
 * crea un observer
 * @param {*} funcitonEvent  funzione che l'observer dovrà eseguire
 * @param {*} threshold      soglia da passare all'observer
 * @param {*} root           root da passare all'observer, di solito è null
 * @returns
 */
const createObserver = (funcitonEvent, threshold, root = null) =>
  new IntersectionObserver(funcitonEvent, {
    root: root,
    threshold: threshold,
  });

/**
 * Inizializza l’array di opere aggiungendo a ciascun elemento l’immagine in formato lazy.
 * @param {Array<Object>} items Array di oggetti contenenti i dettagli delle opere (senza lazy-loading delle immagini).
 * @returns {Array<Object>} Nuovo array di oggetti con il campo immagine impostato in lazy format.
 */
const createArtPieces = function (items) {
  // aggiungo le immagini lazy all'array
  const artPiecesLazy = items.map((item) => {
    const originalSrc = item.src;
    // estraggo solo il file-name (anche se ci fossero '\' o '/')
    const fileName = originalSrc.replace(/^.*[\/\\]/, "");
    // trova l'ultimo punto dell'estensione
    const dotIndex = fileName.lastIndexOf(".");
    if (dotIndex < 0) {
      console.warn(`Attenzione: "${fileName}" non ha estensione, salto.`);
      return { ...item };
    }
    const name = fileName.substring(0, dotIndex);
    // estensione col punto
    const ext = fileName.substring(dotIndex);

    return {
      ...item,
      // nuova src punta alla folder "Media/sketches lazy"
      src: `./Media/sketches lazy/${name}-lazy${ext}`,
      // dataSrc conserva il path originale
      dataSrc: originalSrc,
    };
  });

  // ordino per data recente
  return orderByDescendingDate(artPiecesLazy);
};

/**
 * funzione per la gestione per il menu a tendina Inspirations e Collaborations della navbar
 * allega l'evento hover dei link della navbar per mostrare il menu a tendina
 *
 * @param {HTMLElement} trigger           Elemento che apre il menu al passaggio del mouse.
 * @param {HTMLElement} menu              Il menu a tendina da mostrare/nascondere.
 * @param {HTMLElement} menuToHide  L'altro menu da nascondere quando apri questo.
 * @param {number}     [delay=100]        Ritardo (ms) prima di nascondere.
 */
const attachNavbarDropdownHover = function (
  trigger,
  menu,
  menuToHide,
  delay = 100
) {
  // Variabile per gestire il timer dell'hover sui link della navbar
  let hideTimer;

  const show = () => {
    clearTimeout(hideTimer);
    menu.style.display = "block";
    menuToHide.style.display = "none";
  };

  const scheduleHide = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!trigger.matches(":hover") && !menu.matches(":hover")) {
        menu.style.display = "none";
      }
    }, delay);
  };

  // quando entri su trigger o menu → mostra / annulla chiusura
  [trigger, menu].forEach((el) => {
    el.addEventListener("mouseenter", show);
  });

  // quando esci da trigger o menu → avvia timer di chiusura
  [trigger, menu].forEach((el) => {
    el.addEventListener("mouseleave", scheduleHide);
  });
};

/**
 * Applica un effetto di dissolvenza ai link della navbar non attivi quando si passa il mouse su uno di essi.
 */
const fadeOtherNavLinksOnHover = function () {
  const handHover = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("navbar_item")) {
      const link = e.target;
      const allLinks = link.closest(".navbar").querySelectorAll(".navbar_item");

      console.log(link.classList);
      allLinks.forEach((l) => {
        // le classi “speciali” da gestire diversamente
        const specialClasses = ["inspirations_item", "collaborations_item"];
        // qual è (se c’è) la classe speciale applicata al link corrente
        const currentSpecial = specialClasses.find((c) =>
          link.classList.contains(c)
        );

        if (l !== link) {
          if (currentSpecial) {
            // se siamo su un link “speciale”, escludi menu_link e gli altri con la stessa classe
            if (
              !l.classList.contains("menu_link") &&
              !l.classList.contains(currentSpecial)
            ) {
              l.style.opacity = this;
            }
          } else {
            // altrimenti (link normale), applica l’opacità a tutti gli altri
            l.style.opacity = this;
          }
        }
      });
    }
  };

  // passo sopra il link col mouse
  navbarListEl.addEventListener("mouseover", handHover.bind(0.5));
  // tolgo il mouse da sopra il link
  navbarListEl.addEventListener("mouseout", handHover.bind(1));
};

/**
 * funzione che genra il markup per la visualizzazione della galleria dei disegni/immagini
 * @param {Array<Object>} artPieces  array di oggetti con i dati inerenti a un disegno come path img, id, title etc.
 * @param {boolean} removeLazy flag per capire se l'immagine è in modalità lazy o meno, inizialmente lo è
 */
const displayGalleryImgs = function (artPieces, removeLazy = false) {
  containerGalleryImgs.innerHTML = "";

  const lazyClass = removeLazy ? "" : "lazy_img";
  const html = artPieces.map((art) => {
    return `<div class="img_wrapper">
      <img
        class="image_${art.id} ${lazyClass}"
        id="${art.id}"
        src="${art.src}"
        data-src="${art.dataSrc}"
        alt="${art.title}"
      />
    </div>`;
  });

  containerGalleryImgs.insertAdjacentHTML("afterbegin", [html.join("")]);
};

/**
 * funzione che genera il markup del menu a tendina del filtro per artisti
 */
const displayArtistsFilterMenu = function () {
  containerAtistFilterList.innerHTML =
    '<li class="artist_link">All Artists</li>';

  const html = artistsList.map((art) => {
    return `<li class=\"artist_link\">${art}</li>`;
  });

  containerAtistFilterList.insertAdjacentHTML("beforeend", [html.join("")]);
};

/**
 * funciton to create lazy loading gallery images
 */
const lazyLoadingEvent = function () {
  window.addEventListener("DOMContentLoaded", () => {
    const imgaesLazy = document.querySelectorAll("img[data-src]");

    const lazyLoading = function (entries, observer) {
      const [entry] = entries;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const img = entry.target;

        // Sostituisci il src con data-src se l'immagine è visibile
        if (!loadedImages.includes(artPieces.find((a) => a.id === +img.id))) {
          // Replace src with data-src
          img.src = img.dataset.src;

          img.addEventListener("load", function () {
            img.classList.remove("lazy_img");

            img.addEventListener("mouseenter", function () {
              img.style.transform = "transform: scale(1.1)";
            });

            // Se l'immagine è già caricata (nel caso in cui sia già presente nel cache)
            if (img.complete) {
              // aggiungo l'hover all'immagine che la ingradisca: transform: scale(1.1)
              img.classList.add("loaded");
            }

            loadedImages.push(artPieces.find((a) => a.id === +img.id));
          });
        }
      });

      observer.unobserve(entry.target);
    };

    const lazyLoadingObserver = new IntersectionObserver(lazyLoading, {
      root: containerGalleryImgs,
      threshold: 0,
      rootMargin: "-50px",
    });

    // resto del codice qui dentro
    imgaesLazy.forEach((img) => {
      lazyLoadingObserver.observe(img);
    });
  });
};

/**
 * funzione che crea l'effeto in entrata in dissolvenza delle sezioni
 */
const createSectionFadeEntryEffect = function () {
  const sectionFadeAnimation = function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hide");
    });
  };

  const sectionObserver = createObserver(sectionFadeAnimation, 0.2);

  allSectionToFade.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hide");
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////
/* main */

// variabili
let artPiecesInitial = [
  {
    id: 1,
    src: "./Media/sketches/BHXP3462.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "03/12/2020",
    title: "",
    description: "Opera che sfida la percezione.",
    songName: "Melodia Infinita",
  },
  {
    id: 2,
    src: "./Media/sketches/BNQX3333.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "07/25/2021",
    title: "",
    description: "Visione onirica.",
    songName: "Ritmo Urbano",
  },
  {
    id: 3,
    src: "./Media/sketches/BPZD1936.JPG",
    artist: ["other", "tha-supreme"],
    italianSong: false,
    date: "11/03/2020",
    title: "",
    description: "Riflesso del subconscio.",
    songName: "Onda Sonora",
  },
  {
    id: 4,
    src: "./Media/sketches/CITE1837.JPG",
    artist: ["rose-villain", "other"],
    italianSong: false,
    date: "02/17/2022",
    title: "",
    description: "Esplorazione dell'infinito.",
    songName: "Eco di Vita",
  },
  {
    id: 5,
    src: "./Media/sketches/CJLC3545.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "09/06/2020",
    title: "",
    description: "Danza di colori.",
    songName: "Sogno Elettrico",
  },
  {
    id: 6,
    src: "./Media/sketches/CRFC1818.JPG",
    artist: ["other"],
    italianSong: false,
    date: "04/28/2021",
    title: "",
    description: "Armonia inaspettata.",
    songName: "Battito Nascosto",
  },
  {
    id: 7,
    src: "./Media/sketches/DOUI6761.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "01/15/2023",
    title: "",
    description: "Racconto silenzioso.",
    songName: "Risveglio",
  },
  {
    id: 8,
    src: "./Media/sketches/DSNX9207.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "05/09/2020",
    title: "",
    description: "Intensità emotiva.",
    songName: "Sfumature",
  },
  {
    id: 9,
    src: "./Media/sketches/EQYP1424.JPG",
    artist: ["other"],
    italianSong: false,
    date: "08/22/2021",
    title: "",
    description: "Sogno urbano.",
    songName: "Notte Stellata",
  },
  {
    id: 10,
    src: "./Media/sketches/ERQO3358.JPG",
    artist: ["tha-supreme", "other"],
    italianSong: false,
    date: "12/30/2020",
    title: "",
    description: "Ritratto del tempo.",
    songName: "Aria di Libertà",
  },
  {
    id: 11,
    src: "./Media/sketches/FBFH4847.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "03/07/2022",
    title: "",
    description: "Viaggio interstellare.",
    songName: "Vibrazione",
  },
  {
    id: 12,
    src: "./Media/sketches/FKNS0648.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "07/14/2021",
    title: "",
    description: "Melodia visiva.",
    songName: "Odissea",
  },
  {
    id: 13,
    src: "./Media/sketches/FKVK5005.JPG",
    artist: ["other", "rose-villain"],
    italianSong: false,
    date: "10/29/2020",
    title: "",
    description: "Incanto geometrico.",
    songName: "Sussurro",
  },
  {
    id: 14,
    src: "./Media/sketches/FXLR0871.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "06/11/2021",
    title: "",
    description: "Riflesso d'acqua.",
    songName: "Aura",
  },
  {
    id: 15,
    src: "./Media/sketches/GNQY6124.JPG",
    artist: ["other"],
    italianSong: false,
    date: "05/05/2022",
    title: "",
    description: "Trama della realtà.",
    songName: "Fuga",
  },
  {
    id: 16,
    src: "./Media/sketches/HCAN0173.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "08/18/2023",
    title: "",
    description: "Sospensione creativa.",
    songName: "Incanto",
  },
  {
    id: 17,
    src: "./Media/sketches/HOOW6277.JPG",
    artist: ["rose-villain", "other"],
    italianSong: false,
    date: "01/23/2020",
    title: "",
    description: "Fusione di mondi.",
    songName: "Riflessione",
  },
  {
    id: 18,
    src: "./Media/sketches/IAHA1176.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "04/10/2021",
    title: "",
    description: "Poesia in movimento.",
    songName: "Euforia",
  },
  {
    id: 19,
    src: "./Media/sketches/IGCS9328.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "09/19/2022",
    title: "",
    description: "Verità astratta.",
    songName: "Navigazione",
  },
  {
    id: 20,
    src: "./Media/sketches/IINJ0685.JPG",
    artist: ["other"],
    italianSong: false,
    date: "11/27/2020",
    title: "",
    description: "Eco di sensazioni.",
    songName: "Semplicità",
  },
  {
    id: 21,
    src: "./Media/sketches/KHAJ9471.JPG",
    artist: ["tha-supreme", "other"],
    italianSong: false,
    date: "02/04/2023",
    title: "",
    description: "Risonanza interiore.",
    songName: "Viaggio",
  },
  {
    id: 22,
    src: "./Media/sketches/Kid Yugi and featurings of I Diavoli Del Male album.png",
    artist: ["rose-villain"],
    italianSong: false,
    date: "08/08/2020",
    title: "",
    description: "Armonia dei contrasti.",
    songName: "Specchio",
  },
  {
    id: 23,
    src: "./Media/sketches/LTWV1703.JPG",
    artist: ["other", "tha-supreme"],
    italianSong: false,
    date: "12/16/2021",
    title: "",
    description: "Vibrazione contemporanea.",
    songName: "Armonia",
  },
  {
    id: 24,
    src: "./Media/sketches/MOPN1114.JPG",
    artist: ["rose-villain", "other"],
    italianSong: false,
    date: "07/21/2023",
    title: "",
    description: "Sinfonia di forme.",
    songName: "Contrasti",
  },
  {
    id: 25,
    src: "./Media/sketches/NEJC5049.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "03/31/2020",
    title: "",
    description: "Spirito ribelle.",
    songName: "Impronta",
  },
  {
    id: 26,
    src: "./Media/sketches/NIKE8692.JPG",
    artist: ["other"],
    italianSong: false,
    date: "09/13/2021",
    title: "",
    description: "Dimensione alternativa.",
    songName: "Fenomeno",
  },
  {
    id: 27,
    src: "./Media/sketches/NIOA5886.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "10/24/2022",
    title: "",
    description: "Mistero avvolgente.",
    songName: "Intreccio",
  },
  {
    id: 28,
    src: "./Media/sketches/OCHB6729.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "06/02/2020",
    title: "",
    description: "Magia del quotidiano.",
    songName: "Magia",
  },
  {
    id: 29,
    src: "./Media/sketches/OQMQ0348.JPG",
    artist: ["other"],
    italianSong: false,
    date: "04/26/2021",
    title: "",
    description: "Essenza del sogno.",
    songName: "Ombre",
  },
  {
    id: 30,
    src: "./Media/sketches/OQUS1839.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "11/12/2022",
    title: "",
    description: "Ritmo urbano.",
    songName: "Rinascita",
  },
  {
    id: 31,
    src: "./Media/sketches/PIKA5237.JPG",
    artist: ["rose-villain", "other"],
    italianSong: false,
    date: "05/05/2021",
    title: "",
    description: "Onda di emozioni.",
    songName: "Essenza",
  },
  {
    id: 32,
    src: "./Media/sketches/PIRC3235.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "09/09/2020",
    title: "",
    description: "Tramonto urbano.",
    songName: "Ambizione",
  },
  {
    id: 33,
    src: "./Media/sketches/PVIR4809.JPG",
    artist: ["other"],
    italianSong: false,
    date: "12/20/2021",
    title: "",
    description: "Vento creativo.",
    songName: "Aura di Sera",
  },
  {
    id: 34,
    src: "./Media/sketches/QDIW5520.JPG",
    artist: ["rose-villain", "tha-supreme"],
    italianSong: false,
    date: "08/02/2022",
    title: "",
    description: "Tempesta.",
    songName: "Tempesta",
  },
  {
    id: 35,
    src: "./Media/sketches/QFVH1418.JPG",
    artist: ["other"],
    italianSong: false,
    date: "03/15/2023",
    title: "",
    description: "Equilibrio.",
    songName: "Equilibrio",
  },
  {
    id: 36,
    src: "./Media/sketches/QUTJ4744.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "07/27/2020",
    title: "",
    description: "Fusione.",
    songName: "Fusione",
  },
  {
    id: 37,
    src: "./Media/sketches/QWFJ0522.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "02/08/2022",
    title: "",
    description: "Luce.",
    songName: "Luce",
  },
  {
    id: 38,
    src: "./Media/sketches/RGFU5150.JPG",
    artist: ["other", "tha-supreme"],
    italianSong: false,
    date: "06/19/2021",
    title: "",
    description: "Impronta del tempo.",
    songName: "Vento",
  },
  {
    id: 39,
    src: "./Media/sketches/RVRD7544.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "10/31/2020",
    title: "",
    description: "Forma in evoluzione.",
    songName: "Ritornello",
  },
  {
    id: 40,
    src: "./Media/sketches/SBBS9788.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "04/04/2022",
    title: "",
    description: "Spirale dell'arte.",
    songName: "Beat",
  },
  {
    id: 41,
    src: "./Media/sketches/SOJJ0828.JPG",
    artist: ["other"],
    italianSong: false,
    date: "01/16/2023",
    title: "",
    description: "Mistero del silenzio.",
    songName: "Sogno",
  },
  {
    id: 42,
    src: "./Media/sketches/SVIG8580.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "03/28/2021",
    title: "",
    description: "Festa della luce.",
    songName: "Inno",
  },
  {
    id: 43,
    src: "./Media/sketches/tha-supreme-sulla-luna.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "09/07/2020",
    title: "",
    description: "Eclettismo vibrante.",
    songName: "Vibrazioni",
  },
  {
    id: 44,
    src: "./Media/sketches/TWDW9166.JPG",
    artist: ["rose-villain", "other"],
    italianSong: false,
    date: "11/14/2022",
    title: "",
    description: "Ritmo vibrante.",
    songName: "Eclissi",
  },
  {
    id: 45,
    src: "./Media/sketches/UJXX4601.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "05/23/2021",
    title: "",
    description: "Universo in miniatura.",
    songName: "Onda",
  },
  {
    id: 46,
    src: "./Media/sketches/VCFR6377.JPG",
    artist: ["other"],
    italianSong: false,
    date: "07/30/2023",
    title: "",
    description: "Sguardo senza tempo.",
    songName: "Danze",
  },
  {
    id: 47,
    src: "./Media/sketches/VYEO1257.JPG",
    artist: ["tha-supreme", "rose-villain"],
    italianSong: false,
    date: "02/11/2022",
    title: "",
    description: "Battito creativo.",
    songName: "Riflessioni",
  },
  {
    id: 48,
    src: "./Media/sketches/WAKW3698.JPG",
    artist: ["other"],
    italianSong: false,
    date: "06/17/2021",
    title: "",
    description: "Sogno in fermento.",
    songName: "Miraggio",
  },
  {
    id: 49,
    src: "./Media/sketches/WCTL0854.JPG",
    artist: ["tha-supreme"],
    italianSong: false,
    date: "12/24/2020",
    title: "",
    description: "Incanto urbano.",
    songName: "Risonanza",
  },
  {
    id: 50,
    src: "./Media/sketches/WZWW7237.JPG",
    artist: ["rose-villain"],
    italianSong: false,
    date: "03/05/2023",
    title: "",
    description: "Eco visivo.",
    songName: "Sinfonia",
  },
];
const artPieces = createArtPieces(artPiecesInitial);
const artistsList = getArtistsFromArtPiecesArray(artPieces);

// Variabile che salva le immagini(gli oggetti corrispondenti dell'array artPieces) caricate e non più lazy
const loadedImages = [];
// flag per evitare di registrare più volte l'evento delle slider con le frecce della tastiera
let arrowsSlideListenerActive = false;

// chiamta delle funzioni
lazyLoadingEvent();

createSectionFadeEntryEffect();

attachNavbarDropdownHover(
  inspirationsItemBtn,
  menuInspirationsEl,
  menuCollaborations
);
attachNavbarDropdownHover(
  collaborationsItemBtn,
  menuCollaborations,
  menuInspirationsEl
);

fadeOtherNavLinksOnHover();

displayGalleryImgs(artPieces);
displayArtistsFilterMenu();

goToSlide(0);
