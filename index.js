
const userInput = document.querySelector('.favDinosaur') 


const addDinoToList = function(ev){
    ev.preventDefault()
    const form = ev.target 
    const list = document.querySelector('.dinoList')
    
    const dinosaur = {
        species: form.dinoName.value,
        diet: form.dinoDiet.value
    }
    
    const dinoEntry = createDino(dinosaur)
    debugger
    list.appendChild(dinoEntry)

    form.reset()

}


const createDino = function(dinosaur){
    const entry = document.createElement('li') 
    const properties = Object.keys(dinosaur)
    properties.forEach((propertyName) =>{
        const span = spanBuilder(propertyName, dinosaur[propertyName])
        entry.appendChild(span)
    })
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

userInput.addEventListener('submit',addDinoToList)
