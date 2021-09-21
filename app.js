const bdJson = require("./tareas.json");
const tareas = require("./tareas");
let palabra = process.argv[2];

function listar (palabra) {
    switch (palabra) {
        case "listar":
            bdJson.forEach(function (tarea) {
                console.log(tarea);
            });
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción");
            break;
        case "crear":
            let nuevaTarea = {
                titulo: process.argv[3],
                estado: "pendiente",
            };
            tareas.guardarTarea(nuevaTarea);
            break;
        case "filtrar":
            let estadoAFiltrar = process.argv[3]
            let tareasFiltradas = tareas.filtrarPorEstado(estadoAFiltrar);
            tareasFiltradas.forEach(function (tarea) {
                console.log(tarea);
            });
            break;
        default:
            console.log("No entiendo qué quieres hacer");
            break;
    }
}

listar(palabra);


