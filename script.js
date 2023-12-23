import { capitan, ironman, hulk,  nick } from "./personajes.js"

let enlaces = document.querySelectorAll('a')
let imagenElemento = document.getElementById('imagen')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')


enlaces.forEach(function(enlace){
    
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
       
    this.classList.add('active')
    let contenido = getContenido(this.textContent)
    imagenElemento.src = contenido.imagen
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    })
})


function getContenido(enlace){
    let contenido = {
        'Capitan America' : capitan,
        'Iron Man' : ironman,
        'Bruce Banner' : hulk,
        'Nick Fury' : nick
    }
    return contenido[enlace]
}