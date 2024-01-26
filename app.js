const inputVal = document.querySelector('.inputValider')
const ul = document.querySelector('.ulList')
const ulListCompleted = document.querySelector('.ulListCompleted')
const ulListCancel = document.querySelector('.ulListCancel')
const button = document.querySelector('button')

let monStockage = []
button.addEventListener('click', (label) => {

    if (inputVal.value.trim() === "") {
        alert('renseigner le champs')
    } else {

        const li = document.createElement('li')


        const checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = "checkbox"
        li.append(checkbox)

        const label = document.createElement('label')
        label.htmlFor = 'label'

        label.textContent = inputVal.value
        monStockage.push(inputVal.value)
        localStorage.setItem("ToDo--List", JSON.stringify(monStockage))

        li.append(label)

        ul.append(li)

        inputVal.value = ""

        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                // li.classList.toggle('completed')
                const liCompleted = document.createElement('li')
                ulListCompleted.append(liCompleted)
                liCompleted.textContent = label.textContent


            } 


        })

        li.addEventListener('dblclick', () => {
            console.log(li)
            const liCancelled = document.createElement('li');
            ulListCancel.append(liCancelled); // Assurez-vous que ulListCancel est correctement sélectionné
            liCancelled.textContent = label.textContent;
        
            // Supprimer l'élément de liste de la liste actuelle
             li.remove();
        });

    }

})





// const animal = {
//     monChien : "Berger",
// }


// function saveInStorage(){
//     localStoragestorage.setItem("animal", JSON.stringify(animal));
// }

// saveInStorage()