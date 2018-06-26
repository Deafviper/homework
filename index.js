const button = document.querySelector('.button')


const changeText = function(){
    const myText =  document.querySelector('.input').value
    const toChange = document.querySelector('#unique')
    toChange.textContent = myText
}
button.addEventListener('click', changeText)