const fileSystem = require('fs')
const tareasIniciales = JSON.parse(fileSystem.readFileSync('./tareas.json'))
const escribirJSON = arrayDeTareas => {
    let arrayDeTareasJSON = JSON.stringify(arrayDeTareas)
    fileSystem.writeFileSync('./tareas.json', arrayDeTareasJSON)
}
const filtrarPorEstado = estadoDeLaTarea => {
    let tareasFiltradas = tareasIniciales.filter(function(tareasParaFiltrar){
    return tareasParaFiltrar.estado == estadoDeLaTarea
    })
    console.log('Tus tareas en estado ' + '"' + estadoDeLaTarea + '"' + ' son:')
    tareasFiltradas.map(function(tareasParaLoguear){
        return console.log(tareasParaLoguear.titulo) 
    }) 
    
}
const ordenDelUsuario = (orden) => {
    if (orden == undefined){
        return tareasIniciales
    }else if (orden == 'pendiente' || orden == 'en proceso' || orden == 'terminada'){
        filtrarPorEstado(orden)
    }else{
    let todasTareas = [...tareasIniciales, ...orden]
    escribirJSON(todasTareas)
    return todasTareas
    }
}

module.exports = ordenDelUsuario 
