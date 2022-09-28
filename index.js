
const input = document.querySelector('input')
const list = document.querySelector('ul')

//1.You started by grabing the button from the html file
//2.Eventes listener lisens for click on the button
//3.Preventing the user from submitting and empty arrey
//4.AddToDo is called
//5.input.value = "" is clearin out the input fild for something new is submitted
document.querySelector('button').addEventListener('click', () =>{
    
    if (!input.value) {alert ('You have not submitted any text'); return}
    
    addToDo()

    input.value = ""
})

//1. This eventelistnere is checking for keypress on the enter key 
//2. These if statements is also know by somthing called guard clause
document.querySelector('input').addEventListener('keydown', (e) =>{
    
    if(e.key === "Enter" && !input.value) { alert('No text given, please type something.')}

    if(e.key !== "Enter") return

    if(e.key === "Enter" && input.value==="" ) return

    addToDo()
    input.value = ""
})

//1. Creating two html elements 
//2. Give the list item class flex to style with flex
//2. Checks the input filed for text
//3. Adds the input text as an list element
//4. Adds the list item to the list
//5. Calles the deletebutton
function addToDo() {
    const li = document.createElement('li')
    li.classList.add('flex')
    const task = document.createElement('p')
    task.textContent = input.value
    li.append(task)
    list.append(li)
    addDeleteButton(li)
}

//1. Creats the button to the list elementes
//2. Adds the text remove to the button
//3. Gives the classes delete-btn and btn to the button to give the possibility to style the buttons
//4. Addes the delete button beside the list elementes
//5. Uses an eventlistener to check for click on the delete button that deletes the list elementes
function addDeleteButton(li) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'remove'
    deleteButton.classList.add('delete-btn', 'btn')
    li.append(deleteButton)

    deleteButton.addEventListener('click', (e) =>{
        e.target.parentNode.remove()
    })
}

