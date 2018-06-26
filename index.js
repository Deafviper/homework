const button = document.querySelector('button')

const changeText = function(){
    const toChange = document.querySelector('#unique')
    toChange.textContent ='Is so much FUN!'
}
button.addEventListener('click', changeText)