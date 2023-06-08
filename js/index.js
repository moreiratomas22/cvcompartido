// let info = {};
// const descripcion = document.getElementById("descripcion");
// const botonES = document.getElementsByClassName("boton-container")

// const pedirInfo = () => {
//   fetch("./json/data.json")
//     .then((data) => {

//       return data.json();

//     })
//     .then((data) => {
//       info = data;
//       console.log(info);
//       descripcion.innerText = info.bio
//     });

// };

// const changeButton = () => {
//     pedirInfo()
//     botonES[0].innerHTML= "<h3 id='ingles'>EN</h3>";
//     const botonEN = document.getElementById("ingles");
// console.log(botonEN)
//     botonEN.addEventListener("click", () => {
//         location.reload();
//     })
// }

// const reloadButton = () => {

// }

// botonES[0].addEventListener("click", changeButton)

// INTERRUPTOR DARK-LIGHT MODE

const interruptor = document.querySelector(".interruptor");
const body = document.body;
let modo_nocturno = false;

interruptor.addEventListener("change", (event) => {
// event.preventDefault();
// console.log("hola")
  if (!modo_nocturno) {
    body.classList.add("modo-nocturno");
    modo_nocturno = true;
// console.log("holis")
  } else {
    body.classList.remove("modo-nocturno");
    modo_nocturno = false;
// console.log("holus")
  }
});
