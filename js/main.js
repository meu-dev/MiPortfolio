

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
const btnSwitch = document.querySelector('#switch');
// creamos un evento de esa variable cuando se hace click y le decimos que añada la clase dark al body  //
btnSwitch.addEventListener('click', () => {
  console.log('cambio tema');
   document.body.classList.toggle('dark') 
});


// FUNCION VALIDACION FORMULARIO //

window.onload = inicializar;
function inicializar() {
  document.getElementById("btn-enviar").addEventListener("click", validarCampo, false);
}
function validarCampo() {
    // DECLARO CONSTANTE CAJA Para cojer el elemento en html donde después pintaré el resultado//
  let caja = document.getElementById("caja");
  caja.innerHTML = "";
  let camposTexto = document.getElementsByClassName("info-form");
  for (let i = 0; i < camposTexto.length; i++) {
    if (camposTexto[i].value == "") {
      caja.style.display = "block";
      caja.innerHTML += "El campo " + camposTexto[i].id + " no puede estar vacío.";
    }else{
      caja.style.display = "none";
    }
  }
}

// FUNCION SLIDER //



// MY CHART //

const ctx = document.getElementById('myChart')

const program = ['illustrator', 'photoshop', 'indesign', 'fontlab', 'web']
const percent = [35, 2, 13, 25, 15]

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: program,
    datasets: [{
      label: 'porcentaje',
      data: percent,
      backgroundColor: [
        'rgba(255, 99, 50, 0.2',
        'rgba(56, 99, 23, 0.2',
        'rgba(45, 56, 89, 0.2',
        'rgba(56, 56, 67, 0.2',
        'rgba(133, 45, 132, 0.2'
      ],
      borderwith: [
        'rgba(255, 99, 50, 1',
        'rgba(56, 99, 23, 1',
        'rgba(45, 56, 89, 1',
        'rgba(56, 56, 67, 1',
        'rgba(133, 45, 132, 1'
      ],
      borderWith: 1.5
    }]
  }


})




const slides = document.querySelectorAll(".carousel img");

let slideIndex = 0;
let intervalId =  null;


document.addEventListener("DOMContentLoaded", initializerSlider);

function initializerSlider(){
  if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;


  }
  else if(index < 0){
    slideIndex = slides.length -1;
  }

  slides.forEach(slide =>  {
    slide.classList.remove("displaySlide");

  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
  }

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
  
  }




