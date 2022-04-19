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
    //clear input
    input.value = ''
    // create delet button
    const trashButton = document.createElement('button')
    trashButton.classList.add('trashBtn')
    trashButton.innerText = 'delete'
    newDiv.appendChild(trashButton) 
    //create check button
    const checkButton = document.createElement('button')
    checkButton.classList.add('checkBtn')
    checkButton.innerText = 'check'
    newDiv.appendChild(checkButton)
}

output.addEventListener('click', deleteTodo)

function deleteTodo(e) {
    // target = choose which delete button is clicked
    const singleTodo = e.target
    if (singleTodo.classList[0] === 'trashBtn') {
        e.target.parentElement.remove()
    }

    

    if (singleTodo.classList[0] === 'checkBtn') {
        console.log("hello")
        e.target.parentElement.classList.add('lineThrough')
    }
}



input.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        addTodo(e)
    }
})







