const button = document.querySelector('.target')
const toChange = document.querySelector('#unique')
const changeText = function(){
    const myText =  document.querySelector('.input').value
    
    toChange.textContent = myText
}
button.addEventListener('click', changeText)
const fourm = document.querySelector('.fourm')
fourm.addEventListener('submit', changeText)