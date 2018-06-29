
class App{
    constructor(){
    const userInput = document.querySelector('.favDinosaur') 
    this.dinoArray = []
    this.load()
    userInput.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.addDinoToList(ev)
    
    })
   
 }


save(){
    localStorage.setItem('dinoArray', JSON.stringify(this.dinoArray))
}
load(){
   const dinoArray = JSON.parse(localStorage.getItem('dinoArray'))
   
   if   (dinoArray){
   dinoArray.forEach(dinosaur => this.createDino(dinosaur))
}
}

 addDinoToList(ev){
    const form = ev.target 
   
    
    const dinosaur = {
        species: form.dinoName.value,
        diet: form.dinoDiet.value,
        favorite: false,
    }
    this.dinoArray.push(dinosaur)
    this.createDino(dinosaur)
 

    form.reset()
    this.save()
}


createDino(dinosaur){
    const entry = document.createElement('li') 
    const btn = document.createElement('button')
    const list = document.querySelector('.dinoList')
    entry.classList.add(dinosaur.species)
    btn.classList.add(dinosaur.species)
    const properties = Object.keys(dinosaur)
    properties.forEach((propertyName) =>{
        const span = this.spanBuilder(propertyName, dinosaur[propertyName])
        entry.appendChild(span)
    })
    btn.textContent = "Delete"
    btn.id = dinosaur.species
    btn.addEventListener('click',(e) =>{ 
        const f = e.target
        this.itemDelete(f)
    })
    entry.appendChild(btn)
    const favoriteBtn = document.createElement('button')
    favoriteBtn.textContent = "Favorite"
    favoriteBtn.classList.add('fav')
    favoriteBtn.addEventListener('click',() => this.toggleFavorite(dinosaur, entry))
    entry.appendChild(favoriteBtn)
    list.appendChild(entry)
}
toggleFavorite(dinosaur, entry) {
    dinosaur.favorite = entry.classList.toggle('fav')
    this.save()
  }

spanBuilder(name, value){
    const span = document.createElement('span')
    span.classList.add(name)
    if(name === "species"){
        span.textContent = value + " and it eats "
    }
    else{span.textContent = value}
    return span
}

delInput(event){
    event.preventDefault()
    idFetcher = event.target.classList.value
    userInput.removeChild(document.querySelector(idFetcher))
   this.save()
}

itemDelete(f){
    const element = f.closest('li')
    const parElment = element.closest('ol')
    parElment.removeChild(element)
    let eraser = 0
    this.dinoArray.forEach(function(element){
        if (element.species == f)
        eraser = dinoArray.findIndex(element)
    })
    this.dinoArray.splice (eraser, 1)
    this.save()
}




}
const app = new App()