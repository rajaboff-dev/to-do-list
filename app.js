let input = document.getElementById("input");
let taskAdder = document.getElementById("taskAdderBtn");
let taskList = document.querySelector('.tasks')
let forErrors = document.querySelector('.forErrors');

taskAdder.addEventListener("click", () => {
    let taskIsExist = false;
    for(let i = 0; i < taskList.children.length; i++) {
        if(taskList.children[i].textContent === input.value.trim()) {
            taskIsExist = true;
            break;
        }
    }
    if(!taskIsExist && input.value.trim() !== '') {
        let listItem = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = input.value.trim();
        listItem.appendChild(span);
        taskList.appendChild(listItem);
        input.value = "";
        forErrors.innerHTML = ''
    }else {
        forErrors.innerHTML = 'This task is exist or input is empty.';
        forErrors.style.color = 'red';
    }
})

