let info = {};
const descripcion = document.getElementById("descripcion");
const botonES = document.getElementsByClassName("boton-container")

const pedirInfo = () => {
  fetch("./json/data.json")
    .then((data) => {
      //   console.log(data);
      return data.json();
      //   console.log(data.json())
    })
    .then((data) => {
      info = data;
      console.log(info);
      descripcion.innerText = info.bio
    });

};



botonES.addEventListener("click", pedirInfo)