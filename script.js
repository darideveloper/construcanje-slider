const slides = [
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
    title: "Caños y Conexiones para Gas",
    image: "https://placehold.co/800x600",
    logos: [
      "Fv",
      "Piazza Grefería",
      "Hidromet"
    ],
  },

]

const swiperWrapper = document.querySelector(".swiper-wrapper")

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
                <img src="${logo}" alt="Logo" class="logo">
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
                <img src="${logo}" alt="Logo" class="logo">
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
                        <img src="${logo}" alt="Logo" class="logo">
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
