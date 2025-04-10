"use strict";

/* Navbar */
const inspirationsItemBtn = document.querySelector(".inspirations_item");
console.log(inspirationsItemBtn);
const menuInspirationsEl = document.querySelector(".menu_inspirations");
console.log(menuInspirationsEl);
const collaborationsItemBtn = document.querySelector(".collaborations_item");
console.log(inspirationsItemBtn);
const menuCollaborations = document.querySelector(".menu_collaborations");
console.log(menuCollaborations);

// Functions

// Variabile per gestire il timer
let hideTimer;

// Funzione per mostrare il menu
const showMenu = function (menu) {
  clearTimeout(hideTimer);
  menu.classList.remove("hide");
};

// Funzione che verifica se il mouse esce sia dal link che dal menu e nasconde il menu dopo un breve ritardo
function hideMenu(link, menu) {
  hideTimer = setTimeout(() => {
    if (!link.matches(":hover") && !menu.matches(":hover")) {
      menu.classList.add("hide");
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
