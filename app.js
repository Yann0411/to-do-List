const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const myCheckbox = document.querySelector('.checkboxId')



addTaskButton.addEventListener('click', () => {
    
    const li = document.createElement('li')
    li.classList.add('task-list--li')

    const mycheckboxInput = document.createElement('input')
    mycheckboxInput.classList.add('checkboxId')
    mycheckboxInput.type = "checkbox"

    mycheckboxInput.addEventListener('change',checkbox)
    function checkbox(){

        if(mycheckboxInput.checked){
    
            li.classList.toggle('completed')
    
        }else{
            li.classList.remove('completed')
        }
    
    }
    
    // li.append(mycheckboxInput)

    const myLabel = document.createElement('label')
    // myLabel.htmlFor = "checkboxId"
    if(newTaskInput.value.trim() === ""){
        alert("renseigner le champs")
    }else{
        myLabel.textContent = newTaskInput.value
    }

  
    myLabel.appendChild(mycheckboxInput)
    li.append(myLabel)


    taskList.append(li)
    newTaskInput.value = " "

  

   

})


