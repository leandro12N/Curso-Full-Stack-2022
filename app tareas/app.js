const funcionesTareas = require("./FuncionesDeTareas");
const argumento = process.argv[2];

switch (argumento) {
  case 'listar': {
    funcionesTareas.listar();
    break;
  }
  case "crear": {
    let titulo = process.argv[3];
    let tareaNueva = {
      titulo: titulo,
      estado: "pendiente"
    }
    funcionesTareas.guardarTarea(tareaNueva);
  }
  case "milanesa": {
    console.log("Hola , me gusta las milanesas");
    break;
  }
  case undefined: {
    console.log("Atención tienes que pasar una acción");
    break;
  }
  default: {
    console.log("no entiendo que queres hacer");
  }
}