const tareas = require('./funcionesDeTareas')
let ordenDelUsuario = process.argv[2]
let orden = process.argv[3]
switch(ordenDelUsuario){
     
    case 'listar' :
        console.log('Tus tareas son:')
        tareas().forEach(function(tarea, indice){
        console.log((indice+1) +'. ' + tarea.titulo + ': ' + tarea.estado)
        })
    break 
    case 'cargar' : 
    if (orden == undefined){
        console.log('Escriba el nombre de la tarea que desea cargar')
    }else {
        let tareaNueva = [{titulo : orden, estado : 'pendiente'}]
        tareas(tareaNueva)
        console.log('Nueva tarea cargada: ')
        console.log(tareaNueva[0].titulo + ': ' + tareaNueva[0].estado)
    }
    break 
    case 'filtrar' : 
    if (orden == 'pendiente' || orden == 'en proceso' || orden == 'terminada'){
       tareas(process.argv[3])
    }else {
        console.log('Debe ingresar alguno de estos estados disponibles:')
        console.log('terminada')
        console.log('en proceso')
        console.log('pendiente')
    }
    break 
    case undefined :
        console.log('Atención-debes pasar una acción')
    break
    default : 
        console.log('No entiendo qué quieres hacer')
}
