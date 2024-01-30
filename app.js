const inputCourses = document.querySelector('.course')
const courseButton = document.querySelector('.courseButton')
const ulDeTodoList = document.querySelector('.ulDeTodoList')
const ulListCompleted = document.querySelector('.ulListCompleted')
const ulListCancel = document.querySelector('.ulListCancel')
const completedList = document.querySelector('.completedList')
const cancelList = document.querySelector('.cancelList')


courseButton.addEventListener('click', () => {

    if (inputCourses.value === "") {
        alert("Veuillez insérer une tâche")

    } else {
        createElm(inputCourses.value)
    }
    inputCourses.value = ""
    console.log(inputCourses.value)
})

function createElm(text) {

    // creattion d'un "li" 
    const liDeTodoLIst = document.createElement('li')
    liDeTodoLIst.classList.add('liDeTodoLIst')


    // creation d'un input de type checkbox et ajout dans l'element "li" de la to Do list
    const checkboxDetoList = document.createElement('input')
    checkboxDetoList.type = 'checkbox'
    liDeTodoLIst.append(checkboxDetoList)
    // creation d'un label et ajout dans le "li" de la to Do list
    const labelDeTodoList = document.createElement('label')
    labelDeTodoList.classList.add('labelDeTodoList')

    labelDeTodoList.textContent = text


    //ajout du label dans la to Do List
    liDeTodoLIst.append(labelDeTodoList)
    //ajout du li dans le lu de la to do list 
    ulDeTodoList.append(liDeTodoLIst)
    listCochee(checkboxDetoList, liDeTodoLIst, ulListCompleted, labelDeTodoList.textContent)
    addElmToAnotherList(liDeTodoLIst, ulListCancel, labelDeTodoList.textContent)
    emptyTrashorBasket(completedList,ulListCompleted)
    emptyTrashorBasket(cancelList,ulListCancel)


}

function listCochee(checkbox, li, ul, label) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            setTimeout(()=>{
                li.classList.toggle('completed')
                li.textContent = label
                ul.append(li)
                label.textContent = ""
                
            },1000)
      

        } else {
            li.classList.remove('completed')
        }
    })

}


function addElmToAnotherList(li, ul, label) {

    li.querySelector('liDeTodoLIst')
    li.addEventListener('dblclick', () => {
        // const liDeListeSupprime = document.createElement('li')
        li.textContent = label
        ul.append(li)
        label.textContent = ""

    })

}



function emptyTrashorBasket(inputElm,ul){
    inputElm.addEventListener('click',()=>{
        ul.textContent=""
    })
    

}




