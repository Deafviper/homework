
const userInput = document.querySelector('.favDinosaur') 
let dinoArray = []
dinoArray.forEach((object) =>{
    tempBtn = document.querySelector('.'+ object.species)
    tempBtn.addEventListener("click", delInput)
})
userInput.addEventListener('submit',addDinoToList)

const addDinoToList = function(ev){
    ev.preventDefault()
    const form = ev.target 
    const list = document.querySelector('.dinoList')
    
    const dinosaur = {
        species: form.dinoName.value,
        diet: form.dinoDiet.value
    }
    dinoArray.push(dinosaur)
    const dinoEntry = createDino(dinosaur)
    list.appendChild(dinoEntry)

    form.reset()

}


const createDino = function(dinosaur){
    const entry = document.createElement('li') 
    const btn = document.createElement('button')

    entry.classList.add(dinosaur.species)
    btn.classList.add(dinosaur.species)
    const properties = Object.keys(dinosaur)
    properties.forEach((propertyName) =>{
        const span = spanBuilder(propertyName, dinosaur[propertyName])
        entry.appendChild(span)
    })
    btn.textContent = "Delete"
    btn.id = dinosaur.species
    entry.appendChild(btn)
    return entry
}

const spanBuilder = function(name, value){
    const span = document.createElement('span')
    span.classList.add(name)
    if(name === "species"){
        span.textContent = value + " and it eats "
    }
    else{span.textContent = value}
    return span
}

const delInput = function(event){
    event.preventDefault()
    idFetcher = event.target.classList.value
    userInput.removeChild(document.querySelector(idFetcher))
}

const itemDelete = function(f){
    const element = f.closest('li')
    const parElment = element.closest('ol')
    parElment.removeChild(element)
    let eraser = 0
    dinoArray.forEach(function(element){
        if (element.species == f)
        eraser = dinoArray.findIndex(element)
    })
    dinoArray.splice (eraser, 1)
}