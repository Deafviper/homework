const button = document.querySelector('button')

const changeText = function(){
    const toChange = document.querySelector('h1')
    toChange.textContent ='Is so much FUN!'
}
button.addEventListener('click', changeText)