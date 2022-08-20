const input = document.querySelector('.inputs')
const button = document.querySelector('button')
const filter = document.querySelector('.filter')
const output = document.querySelector('.outputs')
const testBtn = document.querySelector('.test-btn')

button.addEventListener('click', addTodo)

// testBtn.addEventListener('click', filterOutput)


function addTodo(e) {
    //Adding new div
    const newDiv = document.createElement('div')
    const divTwo = document.createElement('div')
    //Adding new li
    const newLi = document.createElement('li')

    //take the value that is added to input box
    newLi.innerText = input.value

    //move li under newDiv
    newDiv.appendChild(newLi)
    output.appendChild(newDiv)

    // create delete button
    const trashButton = document.createElement('button')
    trashButton.classList.add('trashBtn')
    trashButton.innerText = 'delete'
    divTwo.appendChild(trashButton) 

    //create check button
    const checkButton = document.createElement('button')
    checkButton.classList.add('checkBtn')
    checkButton.innerText = 'check'
    divTwo.appendChild(checkButton)

    //move div two under new div
    newDiv.appendChild(divTwo)

    //Save local
    saveLocalTodos()

    //clear input
    input.value = ''
}

//when the todo output is clicked, it will be delete, but only for the one with exact class
output.addEventListener('click', deleteTodo)

function deleteTodo(e) {
    // target = choose which button is clicked
    const singleTodo = e.target
    
    if (singleTodo.classList[0] === 'trashBtn') {
        e.target.parentElement.remove()
    }

    

    if (singleTodo.classList[0] === 'checkBtn') {
        console.log("hello")
        e.target.parentElement.classList.toggle('lineThrough')
    }
}

// function filterOutput(e) {
//     const todos = output.childNodes
// }

function saveLocalTodos(todo) {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    localStorage.setItem('localtodo', todos)
}


input.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        addTodo(e)
    }
})









