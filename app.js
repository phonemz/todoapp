const input = document.querySelector('.inputs')
const button = document.querySelector('button')
const filter = document.querySelector('.filter')
const output = document.querySelector('.outputs')

button.addEventListener('click', addTodo)


function addTodo(e) {
    //Adding new div
    const newDiv = document.createElement('div')
    //Adding new li
    const newLi = document.createElement('li')
    //take the value that is added to input box
    newLi.innerText = input.value
    //move li under newDiv
    newDiv.appendChild(newLi)
    output.appendChild(newDiv)
}

function savetoLocal(e) {
    
}