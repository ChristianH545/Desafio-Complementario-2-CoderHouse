// creo una class registro para la creacion de Usuarios
class Registros {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }
}

// variables de Usuarios

// variables de registro llamado del html
const nameRegistro = document.querySelector("#nameRegistro");
const emailRegistro = document.querySelector("#emailRegistro");
const passRegistro = document.querySelector("#passRegistro");

//evento click del boton del form registrarse
const botonRegistro = document.querySelector("#botonRegistro");
botonRegistro.addEventListener("click", registroUsuarios);

// creo un array para el registro de usuario

let listaUsuarios = [];

//vamos a crear una function para guardar en local storage los usuarios dentro del array

function registroUsuarios() {
  //creamos una condicional para que no pise el usuario creado
  if (!localStorage.getItem("keyUsuarios")) {
    const usuarios = new Registros(
      nameRegistro.value,
      emailRegistro.value,
      passRegistro.value
    );
    //realiza una carga a nuestro array

    listaUsuarios.push(usuarios);

    //imprimimos modo prueba en la consola el Array
    console.log(listaUsuarios);
  } else {
    listaUsuarios = JSON.parse(localStorage.getItem("keyUsuarios"));

    const usuarios = new Registros(
      nameRegistro.value,
      emailRegistro.value,
      passRegistro.value
    );
    //realiza una carga a nuestro array

    listaUsuarios.push(usuarios);

    //imprimimos modo prueba en la consola el Array
    console.log(listaUsuarios);

    //enviamos nuestro objeto para almacenar el localStorage

    localStorage.setItem("keyUsuarios", JSON.stringify(listaUsuarios));
  }
}

//un funcion para obtener los datos de los usuarios en localStorage
function obtenerUsuarios() {
  const usuariosAlmacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
  console.log(usuariosAlmacenados);
}
