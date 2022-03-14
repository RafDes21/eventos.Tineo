console.log(`eventos`)


const btn_agregar = document.getElementById(`btn-agregar`)


btn_agregar.addEventListener(`click`, () => {

    const input = document.getElementById(`input`)


    const nombres = input.value

    const lista = document.getElementById(`lista`)
    const nuevosNombres = document.createElement(`li`)
    nuevosNombres.innerText = nombres

    lista.appendChild(nuevosNombres)
    formulario.reset()

})