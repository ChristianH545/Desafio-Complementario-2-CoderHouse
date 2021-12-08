// class Usuario {
//   constructor(nombre, password) {
//     this.nombre = nombre;
//     this.password = password;
//   }
// }

// let usuario1 = new Usuario("christian", "123");
// let usuario2 = new Usuario("santiago", "1234");

// let listaUsuarios = [];
// listaUsuarios.push(usuario1);
// listaUsuarios.push(usuario2);

// let nombreEntrada = "christian";
// let passwordEntrada = "123";

// // forEach
// listaUsuarios.forEach((value) => {
//   if (value.nombre == nombreEntrada && value.password == passwordEntrada) {
//     console.log("Si esta registrado");
//     // ir a la pagina de cambio
//   } else {
//     console.log("No esta registrado");
//   }
// });
guardar_LocalStorage();

class Registros {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }
}
// variables Registro
const nameRegistro = document.querySelector("#nameRegistro");
const emailRegistro = document.querySelector("#emailRegistro");
const passRegistro = document.querySelector("#passRegistro");
const formulario_register = document.querySelector(".formulario__register");



// variables de Usuarios
let usuariosRegistrados1 = new Registros(
  "Christian Hernandez",
  "iverson_9000@hotmail.com",
  "1234"
);
let usuariosRegistrados2 = new Registros(
  nameRegistro.value,
  emailRegistro.value,
  passRegistro.value
);
// creo un array para el registro de usuario

let resgistroDeUsuarios = [];

// realizo un push para cargar mis usuarios registrado al array

resgistroDeUsuarios.push(usuariosRegistrados1, usuariosRegistrados2);



//vamos a crear una function para guardar en local storage

function guardar_LocalStorage() {
  let persona1 = "";
  localStorage.setItem("key1", JSON.stringify(persona1));
}

//posiblemente realice un evento con dicho elemento 
formulario_register.addEventListener("submit", (e) => {
  e.preventDefault();

  
  })