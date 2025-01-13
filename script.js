// Slides data
let slides = [
  {
    title: "Caños y Conexiones para Agua",
    image: "https://placehold.co/800x600",
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
    image: "https://placehold.co/800x600",
    logos: [
      "Grupo Dema Sigas Thermofusion",
      "Tigre",
    ],
  },
  {
    title: "Greferías",
    image: "https://placehold.co/800x600",
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
    image: "https://placehold.co/800x600",
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
    title: "Piesos, Revestimientos y Cerámicos",
    image: "https://placehold.co/800x600",
    logos: [
      "Ilva",
      "Cerámica Cortines",
      "Moldumet",
      "Cerámica Salteña",
    ],
  },
  {
    title: "Sistemas de Climatización y Calefacción",
    image: "https://placehold.co/800x600",
    logos: [
      "Peisa",
      "Ferroli",
      "Ferroli Kanah",
    ],
  },
  {
    title: "Equipamiento de Cocina y Baño",
    image: "https://placehold.co/800x600",
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
    image: "https://placehold.co/800x600",
    logos: [
      "Motorarg",
      "Rowa",
    ],
  },
  {
    title: "Espejos y Vidrios",
    image: "https://placehold.co/800x600",
    logos: [
      "Reflejar"
    ],
  },
  {
    title: "Hierro",
    image: "https://placehold.co/800x600",
    logos: [
      "Acerbrag"
    ],
  },
  {
    title: "Estructuras Metálicas",
    image: "https://placehold.co/800x600",
    logos: [
      "Polimex"
    ],
  },
  {
    title: "Aberturas",
    image: "https://placehold.co/800x600",
    logos: [
      "Koning Group"
    ],
  },
  {
    title: "Cerraduras Electrónicas",
    image: "https://placehold.co/800x600",
    logos: [
      "BalingTech"
    ],
  },
  {
    title: "Pinturas",
    image: "https://placehold.co/800x600",
    logos: [
      "Pinturas Andina"
    ],
  },
  {
    title: "Maderas",
    image: "https://placehold.co/800x600",
    logos: [
      "Romano Maderera"
    ],
  },
  {
    title: "Aditivos para la Construcción",
    image: "https://placehold.co/800x600",
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

  const slideHTML = `
    <div class="swiper-slide">
        <div class="slide-content">
            <div class="left-section">
                <div class="background-image" style="background-image: url('${slide.image}')"></div>
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
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})