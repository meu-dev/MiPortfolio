// const nav = document.querySelector("#nav");
// const abrir = document.querySelector("#open");
// const cerrar = document.querySelector("#close");

// abrir.addEventListener("click", () => {
//     nav.classList.add("visible");
// })

// cerrar.addEventListener("click", () => {
//     nav.classList.remove("visible");
// })

// FUNCION CAMBIO DARK MODE  //

// Creamos una variable cogiendo el elemento de html  //
const btnSwitch = document.querySelector("#switch");
// creamos un evento de esa variable cuando se hace click y le decimos que añada la clase dark al body  //
btnSwitch.addEventListener("click", () => {
  console.log("cambio tema");
  document.body.classList.toggle("dark");
});

// FUNCION VALIDACION FORMULARIO //

window.onload = inicializar;
function inicializar() {
  document
    .getElementById("btn-enviar")
    .addEventListener("click", validarCampo, false);
}
function validarCampo() {
  // DECLARO CONSTANTE CAJA Para cojer el elemento en html donde después pintaré el resultado//
  let caja = document.getElementById("caja");
  caja.innerHTML = "";
  let camposTexto = document.getElementsByClassName("info-form");
  for (let i = 0; i < camposTexto.length; i++) {
    if (camposTexto[i].value == "") {
      caja.style.display = "block";
      caja.innerHTML +=
        "El campo " + camposTexto[i].id + " no puede estar vacío.";
    } else {
      caja.style.display = "none";
    }
  }
}

// FUNCION SLIDER //

// MY CHART //

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Diseño", "Investigación", "Desarrollo", "Producción"],
      datasets: [
        {
          label: "Horas dedicadas al proyecto",
          data: [40, 25, 35, 20],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

const slides = document.querySelectorAll(".carousel img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializerSlider);

function initializerSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
