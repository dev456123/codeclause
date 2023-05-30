const inputd = document.querySelector('.textarea')
const buttond = document.querySelector('.buttoninput')
const listd = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}


function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputd.value
    itemall.appendChild(item)

    if (inputd.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listd.appendChild(itemall)
    inputd.value = ''
}


function del(e) {
    const item = e.target

 
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttond.addEventListener('click', clickButton)
listd.addEventListener('click', del)