const input = document.querySelector('.inputs')
const button = document.querySelector('button')
const filter = document.querySelector('.filter')
const output = document.querySelector('.outputs')

button.addEventListener('click', addTodo)

filter.addEventListener('change', filterOutput)

document.addEventListener('DOMContentLoaded', autoLoad)

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

    saveTodo(input.value)

    //clear input
    input.value = ''
}

//when the todo output is clicked, it will be delete, but only for the one with exact class
output.addEventListener('click', deleteTodo)

function deleteTodo(e) {
    const target = e.target
    const todo = target.parentNode.parentNode
    
    if (target.classList[0] === 'trashBtn') {
        todo.remove()

        deleteLocalStorage(todo)
    }

    if (target.classList[0] === 'checkBtn') {
        todo.children[0].classList.toggle('lineThrough')
    }
}

function filterOutput(todo) {
    const filterTodo = output.childNodes
    filterTodo.forEach(singleTodo => {
        if (singleTodo.childNodes[0].classList('lineThrough')) {
            console.log(hello)
        }
    })
}


input.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        addTodo(e)
    }
})

function saveTodo(todo) {
    let task
    if (localStorage.getItem('task') === null) {
        task =[] 
    }
    else {
        task =JSON.parse(localStorage.getItem('task'))
    }
    task.push(todo)
    localStorage.setItem('task',JSON.stringify(task))
    // console.log(task)
}

//remove local todo
function deleteLocalStorage(todo) {
    let task
    if (localStorage.getItem('task') === null) {
        task =[] 
    }
    else {
        task =JSON.parse(localStorage.getItem('task'))
    }
    task.splice(task.indexOf(todo.children[0].innerText), 1)
    localStorage.setItem('task', JSON.stringify(task))
}


function autoLoad() {
    let task
    if (localStorage.getItem('task') === null) {
        task =[] 
    }
    else {
        task = JSON.parse(localStorage.getItem('task'))
    }
    task.forEach(singleTask => {
        //Adding new div
    const newDiv = document.createElement('div')
    const divTwo = document.createElement('div')
    //Adding new li
    const newLi = document.createElement('li')

    //take the value that is added to input box
    newLi.innerText = singleTask

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

    //clear input
    input.value = ''
    })
            
}













