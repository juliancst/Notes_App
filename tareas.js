const fs = require("fs");
const bdJson = require("./tareas.json");

function escribirJson (array) {
    let datos = JSON.stringify(array, null, 4);
    fs.writeFileSync("./tareas.json", datos);
}

// Se relaciona un if dentro de la función guardarTarea para asegurar que se ingrese un título en el nuevo registro

function guardarTarea (tareaNueva) {
    if(tareaNueva.titulo != undefined) {
        bdJson.push(tareaNueva);
        escribirJson(bdJson);
    } else {
        console.log("Atención - Tienes que pasar un título de tarea")
    }
}


function filtrarPorEstado (estado) {
    let bd = bdJson.filter(function (tarea) {
        return tarea.estado === estado;
    });
    return bd;
}

module.exports = {guardarTarea, filtrarPorEstado};

