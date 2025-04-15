"use strict";

/* Navbar */
const inspirationsItemBtn = document.querySelector(".inspirations_item");
const menuInspirationsEl = document.querySelector(".menu_inspirations");
const collaborationsItemBtn = document.querySelector(".collaborations_item");
const menuCollaborations = document.querySelector(".menu_collaborations");

// Functions

// Variabile per gestire il timer
let hideTimer;

// Funzione per mostrare il menu
const showMenu = function (menu) {
  clearTimeout(hideTimer);
  menu.classList.remove("u-hide");
};

// Funzione che verifica se il mouse esce sia dal link che dal menu e nasconde il menu dopo un breve ritardo
function hideMenu(link, menu) {
  hideTimer = setTimeout(() => {
    if (!link.matches(":hover") && !menu.matches(":hover")) {
      menu.classList.add("u-hide");
    }
  }, 10);
}

// Event listner
// --- Gestione per il menu Inspirations ---
inspirationsItemBtn.addEventListener("mouseenter", () =>
  showMenu(menuInspirationsEl)
);
inspirationsItemBtn.addEventListener("mouseleave", () =>
  hideMenu(inspirationsItemBtn, menuInspirationsEl)
);

menuInspirationsEl.addEventListener("mouseenter", () =>
  showMenu(menuInspirationsEl)
);
menuInspirationsEl.addEventListener("mouseleave", () =>
  hideMenu(inspirationsItemBtn, menuInspirationsEl)
);

// --- Gestione per il menu Collaborations ---
collaborationsItemBtn.addEventListener("mouseenter", () =>
  showMenu(menuCollaborations)
);
collaborationsItemBtn.addEventListener("mouseleave", () =>
  hideMenu(collaborationsItemBtn, menuCollaborations)
);

menuCollaborations.addEventListener("mouseenter", () =>
  showMenu(menuCollaborations)
);
menuCollaborations.addEventListener("mouseleave", () =>
  hideMenu(collaborationsItemBtn, menuCollaborations)
);

////////////////////////////////////////////////////////////////////////////
/* gallery */

// dom elements
const containerGalleryImgs = document.querySelector(".gallery_imgs");
const containerGalleryContent = document.querySelector(".gallery_content");
const arrowDropDownIconPeriodEL = document.querySelector(
  ".arrow_drop_down_icon_date"
);
const arrowDropDownIconArtistEL = document.querySelector(
  ".arrow_drop_down_icon_artist"
);
const periodFilterWrapperEl = document.querySelector(".date_filter_wrapper");
const artistFilterWrapperEl = document.querySelector(".artist_filter_wrapper");
const filterByNewestEL = document.querySelector(".filter_by_newest");
const filterByOldestEL = document.querySelector(".filter_by_oldest");
const dateFilterActiveEl = document.querySelector(".date_filter_active");
const artistFilterActiveEl = document.querySelector(".artist_filter_active");
const containerAtistFilterList = document.querySelector(".artist_filter_list");

// variables
const artPieces = [
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

const artistsList = [...new Set(artPieces.flatMap((art) => art.artist))];

// functions
const displayGalleryImgs = function (artPieces) {
  containerGalleryImgs.innerHTML = "";

  const html = artPieces.map((art) => {
    return `<div class="img_wrapper">
    <img class="image_${art.id}" id="${art.id}" src="${art.src}" alt="${art.title}" />
  </div>`;
  });

  containerGalleryImgs.insertAdjacentHTML("afterbegin", [html.join("")]);
};

const displaArtistsFilterMenu = function () {
  containerAtistFilterList.innerHTML = '<li class="artist_0">All Artists</li>';

  let counter = 1;
  const html = artistsList.map((art) => {
    return `<li class=\"artist_${counter++}\">${art}</li>`;
  });

  containerAtistFilterList.insertAdjacentHTML("beforeend", [html.join("")]);
};

artPieces.sort((a, b) => new Date(a.date) - new Date(b.date));
displayGalleryImgs(artPieces);

displaArtistsFilterMenu();

// filter by date
arrowDropDownIconPeriodEL.addEventListener("click", function () {
  if (!artistFilterWrapperEl.classList.contains("u-hide")) {
    artistFilterWrapperEl.classList.add("u-hide");
  }
  periodFilterWrapperEl.classList.toggle("u-hide");
});

filterByNewestEL.addEventListener("click", function () {
  const artPiecesFilteredByLastAdded = artPieces
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  periodFilterWrapperEl.classList.add("u-hide");
  dateFilterActiveEl.textContent = filterByNewestEL.textContent;
  displayGalleryImgs(artPiecesFilteredByLastAdded);
});

filterByOldestEL.addEventListener("click", function () {
  const artPiecesFilteredByOlder = artPieces
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(artPiecesFilteredByOlder);

  periodFilterWrapperEl.classList.add("u-hide");
  dateFilterActiveEl.textContent = filterByOldestEL.textContent;
  displayGalleryImgs(artPiecesFilteredByOlder);
});

// filter by artist
arrowDropDownIconArtistEL.addEventListener("click", function () {
  if (!periodFilterWrapperEl.classList.contains("u-hide")) {
    periodFilterWrapperEl.classList.add("u-hide");
  }
  artistFilterWrapperEl.classList.toggle("u-hide");
});

// Seleziona tutti gli <li> con classi che iniziano con "artist-"
const artistItems = document.querySelectorAll('li[class^="artist_"]');

// Aggiungi un event listener a ciascun elemento
artistItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Qui inserisci il codice da eseguire all'evento click
    if (event.currentTarget.textContent !== "All Artists") {
      const artPiecesFilteredByArtist = artPieces
        .slice()
        .filter((art) =>
          art.artist.includes(`${event.currentTarget.textContent}`)
        );

      displayGalleryImgs(artPiecesFilteredByArtist);
    } else {
      displayGalleryImgs(artPieces);
    }

    artistFilterWrapperEl.classList.add("u-hide");
    artistFilterActiveEl.textContent = `${event.currentTarget.textContent}`;
  });
});

// image modal details
const containerImgageGalleryModal =
  document.querySelector(".img_gallery_modal");
const modalContent = document.querySelector(".modal_content");
const imageModal = document.querySelector(".img_modal");
const titleModalEl = document.querySelector(".modal_title");
const descriptionModalEl = document.querySelector(".modal_description");
const dateModalEl = document.querySelector(".modal_date");

// Seleziona tutti le immagini della galleria, hanno tutte una classe che inizia con "artist_"
const imagesItems = document.querySelectorAll('img[class^="image_"]');

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

const createModalContainer = function (idImage) {
  const objImage = artPieces.find((art) => art.id === +idImage);

  imageModal.src = `${objImage.src}`;
  titleModalEl.textContent = `${objImage.title}`;
  descriptionModalEl.textContent = `${objImage.description}`;
  dateModalEl.textContent = `${objImage.date}`;
};

// funziona sia per la galleria impostata di default e anche quando viene applicato un filtro su di essa
containerGalleryContent.addEventListener("click", function (e) {
  // controllo se la classe dell'elemento inizia con quella stringa, cioè se è una immagine della galleria
  if ([...e.target.classList].some((c) => c.startsWith("image_"))) {
    console.log(img);
    createModalContainer(img.id);

    openModal();
  }
});

// funziona solo per la galleria impostata di default, mentre quando viene applicato un filtro si di essa non funziona
// imagesItems.forEach((img) => {
//   img.addEventListener("click", function () {
//     console.log(img);
//     createModalContainer(img.id);

//     openModal();
//   });
// });

// Quando clicchi fuori dal modale (cioè sul container che fa da overlay)
containerImgageGalleryModal.addEventListener("click", (e) => {
  // Se il click è proprio sull'overlay e NON dentro il modale
  if (!modalContent.contains(e.target)) {
    closeModal();
  }
});

// Quando clicchi sul tast ESC chiudi il modale
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
