const fs = require("fs")

const funcionesTareas = {
    archivoJson: "./tareas.json",
    leerArchivo: function(){
        const tareasJson = fs.readFileSync(this.archivoJson);
        const tareas = JSON.parse(tareasJson);
        return tareas;
    },
    listar: function(){
        const tareas = this.leerArchivo();
        tareas.forEach(function(tarea, index){
            console.log((index+1)+ " - la tarea: " + tarea.titulo)
        })
    },
    escribirJson: function(arrayTareas){
        const tareas = JSON.stringify(arrayTareas);
        fs.writeFileSync(this.archivoJson, tareas)
    },
    guardarTarea: function(objetoTarea){
        let tareas = this.leerArchivo()
        tareas.push(objetoTarea)
        this.escribirJson(tareas)
    }
}
module.exports = funcionesTareas;


