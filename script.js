// Slides data
let slides = [
  {
    title: "Caños y Conexiones para Agua",
    logos: [
      "Tigre",
      "Industrias Saladillo",
      "Grupo Dema Acqua System",
      "Latyn Conexiones",
      "Awaduct",
      "Waterplast",
    ],
  },
  {
    title: "Caños y Conexiones para Gas",
    logos: [
      "Grupo Dema Sigas Thermofusion",
      "Tigre",
    ],
  },
  {
    title: "Griferías",
    logos: [
      "Fv",
      "Piazza Grifería",
      "Hidromet",
      "Aqualaf",
      "iBath",
    ],
  },
  {
    title: "Sanitarios y Accesorios de Baño",
    logos: [
      "Ferrum",
      "Roca",
      "Prunus",
      "Zedra",
      "Bagnara",
      "iBath",
    ],
  },
  {
    title: "Pisos, Revestimientos y Cerámicos",
    logos: [
      "Ilva",
      "Cerámica Cortines",
      "Moldumet",
      "Cerámica Salteña",
    ],
  },
  {
    title: "Sistemas de Climatización y Calefacción",
    logos: [
      "Peisa",
      "Ferroli",
      "Ferroli Kanah",
    ],
  },
  {
    title: "Equipamiento de Cocina y Baño",
    logos: [
      "Johnson Acero",
      "Morelli",
      "TST",
      "Mi Pileta",
      "iBath",
    ],
  },
  {
    title: "Bombas y Sistemas de Presurización",
    logos: [
      "Motorarg",
      "Rowa",
    ],
  },
  {
    title: "Espejos y Vidrios",
    logos: [
      "Reflejar"
    ],
  },
  {
    title: "Hierro",
    logos: [
      "Acerbrag"
    ],
  },
  {
    title: "Estructuras Metálicas",
    logos: [
      "Polimex"
    ],
  },
  {
    title: "Aberturas",
    logos: [
      "Koning Group"
    ],
  },
  {
    title: "Cerraduras Electrónicas",
    logos: [
      "BalingTech"
    ],
  },
  {
    title: "Pinturas",
    logos: [
      "Pinturas Andina"
    ],
  },
  {
    title: "Maderas",
    logos: [
      "Romano Maderera"
    ],
  },
  {
    title: "Aditivos para la Construcción",
    logos: [
      "Sika"
    ],
  },
]

// Calculate logos src and alt
for (let slide of slides) {
  slide.logos = slide.logos.map((logo) => {
    return {
      src: `./img/logos/logo-${logo.toLowerCase().replaceAll(" ", "-")}.webp`,
      alt: "Logo de " + logo,
    }
  })
}

const swiperWrapper = document.querySelector(".swiper-wrapper")

// Setup all logos in slides
slides.forEach((slide) => {

  let logosHTML

  if (slide.logos.length === 5) {
    // It is tricky to handle 5 logo system.
    const topRowLogos = slide.logos.slice(0, 3)
    const bottomRowLogos = slide.logos.slice(3)

    logosHTML = `
      <div class="top-row">
          ${topRowLogos
        .map(
          (logo) => `
            <div class="logo-container">
                <img src="${logo.src}" alt="${logo.alt}" class="logo">
            </div>
          `
        )
        .join("")}
      </div>
      <div class="bottom-row">
          ${bottomRowLogos
        .map(
          (logo) => `
            <div class="logo-container">
                <img src="${logo.src}" alt="${logo.alt}" class="logo">
            </div>
          `
        )
        .join("")}
      </div>
  `
  } else {
    // Normal handling for other logo counts
    logosHTML = slide.logos
      .map(
        (logo) => `
          <div class="logo-container">
              <img s src="${logo.src}" alt="${logo.alt}" class="logo">
          </div>
        `
      )
      .join("")
  }

  const bgImageUrl = `./img/bg/${slide.title.toLowerCase().replaceAll(" ", "-")}.webp`
  const slideHTML = `
    <div class="swiper-slide">
        <div class="slide-content">
            <div class="left-section">
                <div class="background-image" style="background-image: url('${bgImageUrl}')"></div>
                <h2 class="category-name">${slide.title}</h2>
            </div>
            <div class="right-section">
                <div class="logo-grid" data-count="${slide.logos.length}">
                    ${logosHTML}
                </div>
            </div>
        </div>
    </div>
  `
  swiperWrapper.insertAdjacentHTML("beforeend", slideHTML)
})

// Start swipper
new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})