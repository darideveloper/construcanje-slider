// Slides data
const imagesHost = "https://raw.githubusercontent.com/SilviaEera/Swiper-Slider-wp/refs/heads/master/img"
// const imagesHost = "./img"
let slides = [
  {
    title: "Caños y Conexiones para Agua",
    logos: [
      {
        "name": "Tigre",
        "href": "https://www.tigre.com.ar/",
      },
      {
        "name": "Industrias Saladillo",
        "href": "https://www.industriassaladillo.com.ar/",
      },
      {
        "name": "Grupo Dema Acqua System",
        "href": "https://grupodema.com.ar/productos/marcas/acqua-system",
      },
      {
        "name": "Latyn Conexiones",
        "href": "https://latynconexiones.com.ar/",
      },
      {
        "name": "Awaduct",
        "href": "https://awaduct.com.ar/",
      },
      {
        "name": "Waterplast",
        "href": "https://unikegroup.com.ar/waterplast/",
      }
    ],
  },
  {
    title: "Caños y Conexiones para Gas",
    logos: [
      {
        "name": "Grupo Dema Sigas Termofusión",
        "href": "https://grupodema.com.ar/productos/marcas/sigas-thermofusion",
      },
      {
        "name": "Tigre",
        "href": "https://www.tigre.com.ar/",
      }
    ],
  },
  {
    title: "Griferías",
    logos: [
      {
        "name": "Fv",
        "href": "https://fvsa.com/",
      },
      {
        "name": "Piazza Grifería",
        "href": "https://piazzagriferia.com/",
      },
      {
        "name": "Hidromet",
        "href": "https://www.hidromet.com.ar/",
      },
      {
        "name": "Aqualaf",
        "href": "https://aqualaf.com.ar/",
      },
      {
        "name": "iBath",
        "href": "https://ibath.com.ar/",
      }
    ],
  },
  {
    title: "Sanitarios y Accesorios de Baño",
    logos: [
      {
        "name": "Ferrum",
        "href": "https://www.ferrum.com/",
      },
      {
        "name": "Roca",
        "href": "https://www.roca.com.ar/",
      },
      {
        "name": "Prunus",
        "href": "https://prunus.com.ar/",
      },
      {
        "name": "Zedra",
        "href": "https://www.zedra.com.ar/",
      },
      {
        "name": "Bagnara",
        "href": "https://bagnara.com.ar/",
      },
      {
        "name": "iBath",
        "href": "https://ibath.com.ar/",
      }
    ],
  },
  {
    title: "Pisos, Revestimientos y Cerámicos",
    logos: [
      {
        "name": "Ilva",
        "href": "https://www.ilva.com.ar/",
      },
      {
        "name": "Cerámica Cortines",
        "href": "https://www.ceramicacortines.com/",
      },
      {
        "name": "Moldumet",
        "href": "https://www.moldumet.com/",
      },
      {
        "name": "Cerámica Salteña",
        "href": "https://www.ceramicasaltena.com.ar/",
      }
    ],
  },
  {
    title: "Sistemas de Climatización y Calefacción",
    logos: [
      {
        "name": "Peisa",
        "href": "https://peisa.com.ar/",
      },
      {
        "name": "Ferroli",
        "href": "https://ferroli.com.ar/",
      },
      {
        "name": "Ferroli Kanah",
        "href": "https://ferroli.com.ar/kanah/",
      }
    ],
  },
  {
    title: "Equipamiento de Cocina y Baño",
    logos: [
      {
        "name": "Johnson Acero",
        "href": "https://johnsonacero.com/",
      },
      {
        "name": "Morelli",
        "href": "https://morelli.com.ar/",
      },
      {
        "name": "TST",
        "href": "https://tst.com.ar/",
      },
      {
        "name": "Mi Pileta",
        "href": "https://mipileta.com.ar/",
      },
      {
        "name": "iBath",
        "href": "https://ibath.com.ar/",
      }
    ],
  },
  {
    title: "Bombas y Sistemas de Presurización",
    logos: [
      {
        "name": "Rowa",
        "href": "https://www.rowa.com.ar/",
      },
      {
        "name": "Motorarg",
        "href": "https://www.motorarg.com.ar/",
      },
    ],
  },
  {
    title: "Espejos y Vidrios",
    logos: [
      {
        "name": "Reflejar",
        "href": "https://reflejar.com.ar/es/",
      }
    ],
  },
  {
    title: "Hierro",
    logos: [
      {
        "name": "Acerbrag",
        "href": "https://acerbrag.com/",
      }
    ],
  },
  {
    title: "Estructuras Metálicas",
    logos: [
      {
        "name": "Polimex",
        "href": "https://www.polimex.com.ar/",
      }
    ],
  },
  {
    title: "Aberturas",
    logos: [
      {
        "name": "Koning Group",
        "href": "https://konig-group.com.ar/",
      }
    ],
  },
  {
    title: "Cerraduras Electrónicas",
    logos: [
      {
        "name": "BalingTech",
        "href": "https://www.balingtech.com.ar/"
      }
    ],
  },
  {
    title: "Pinturas",
    logos: [
      {
        "name": "Pinturas Andina",
        "href": "https://pinturasandina.com/",
      }
    ],
  },
  {
    title: "Maderas",
    logos: [
      {
        "name": "Romano Maderera",
        "href": "https://romanomaderera.com.ar/",
      }
    ],
  },
  {
    title: "Aditivos para la Construcción",
    logos: [
      {
        "name": "Sika",
        "href": "https://arg.sika.com/",
      }
    ],
  },
  {
    title: "Soluciones y Tecnologias Constructivas Sustentables",
    logos: [
      {
        "name": "Estisol Construcción",
        "href": "https://www.estisolconstruccion.com/",
      }
    ],
  }
]

// Calculate logos src and alt
for (let slide of slides) {
  slide.logos = slide.logos.map((logo) => {
    return {
      src: `${imagesHost}/logos/logo-${logo.name.toLowerCase().replaceAll(" ", "-")}.webp`,
      alt: "Logo de " + logo.name,
      href: logo.href,
      name: "Empresa asociada: " + logo.name
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
            <a class="logo-container" href="${logo.href}" target="_blank" title="${logo.name}">
                <img src="${logo.src}" alt="${logo.alt}" class="logo" loading="lazy">
            </a>
          `
        )
        .join("")}
      </div>
      <div class="bottom-row">
          ${bottomRowLogos
        .map(
          (logo) => `
            <a class="logo-container" href="${logo.href}" target="_blank" title="${logo.name}">
                <img src="${logo.src}" alt="${logo.alt}" class="logo" loading="lazy">
            </a>
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
          <a class="logo-container" href="${logo.href}" target="_blank" title="${logo.name}">
              <img src="${logo.src}" alt="${logo.alt}" class="logo" loading="lazy">
          </a>
        `
      )
      .join("")
  }

  const bgImageUrl = `${imagesHost}/bg/${slide.title.toLowerCase().replaceAll(" ", "-")}.webp`
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