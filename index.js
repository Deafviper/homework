
const list = document.querySelector('.dinoList')
form.addEventListener('submit',addDinoToList)





const addDinoToList = function(ev){
    ev.preventDefault()
    const form = document.querySelector('.favDinosaur')
    const entry = document.createElement('li') 
    entry.appendChild(dinomaker())
    entry.appendChild(dinoFeeder())
    list.appendChild(entry)
    form.reset()
}

const dinomaker = function(){
    const name = document.querySelector('.dinoName').value
    const dinoEntry = document.createElement('span')
    dinoEntry.textContent = name 
    dinoEntry.classList.add('bold')
    return dinoEntry
}

const dinoFeeder = function(){
    const diet = document.querySelector('.dinoDiet').value
    let dinoFood = document.createElement('span')
    dinoFood.textContent =  " and it eats " + diet
    if(diet == "People" || diet === "people"){
        dinoFood.textContent += "! How scary."
    }
    else{
        dinoFood.textContent += "."
    }
    dinoFood.classList.add('fancy')
    return dinoFood
}


