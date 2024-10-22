
document.addEventListener('DOMContentLoaded', function(){
    let todoList = JSON.parse(localStorage.getItem('todoList'))|| [];
    let doneList = JSON.parse(localStorage.getItem('doneList'))|| [];
    let taskId = localStorage.getItem('taskId') ? parseInt(localStorage.getItem('taskId')) : 1;

    const taskInput = document.getElementById('opg_input');
    const todoListElement = document.getElementById('todo_list');
    const doneListElement = document.getElementById('done_list');
    const addTaskBtn = document.getElementById('add_task_btn');

    //Opret ny opgave
    addTaskBtn.addEventListener("click", function(){
        const taskText = taskInput.value.trim();

        if(taskText){
            const task = {
                id: taskId++,
                task: taskText,
                done: false
            };
            todoList.push(task);
            updateLocalStorage();
            renderTask(task, todoListElement, false);
            taskInput.value = '';
        }
    });

    //Renders opgaver til todo- eller doneliste
    function renderTask(task, parentElement, isDone) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.task}</span>
            <div>
                <button class="done-btn">${isDone ? 'Fortryd' : 'Færdig'}</button>
                <button class="delete-btn">Slet</button>
            </div>
        `;

        const doneBtn = li.querySelector('.done-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        //Markere opgaven som done

        doneBtn.addEventListener("click", function(){
            if(isDone){
                undoTask(task);
            } else{
                completeTask(task);
            }
        });

        //Sletter opgave
        deleteBtn.addEventListener("click", function(){
            deleteTask(task, isDone);
        });

        parentElement.appendChild(li);

        //Færdiggør en opgave

        function completeTask(task){
            task.done = true;
            //Denne linje nedenunder fjerner en specifik opgave fra todoList ved at filtrere opgaverne, så kun dem med et andet ID end den aktuelle opgave bevares.
            todoList = todoList.filter(t => t.id !== task.id);
            doneList.push(task);
            updateLocalStorage();
            updateLists();
        }

        //Fortryder færdigørelsen af en knap
        function undoTask(task){
            task.done = false;
            doneList = doneList.filter(t => t.id !== task.id);
            todoList.push(task);
            updateLocalStorage();
            updateLists();
        }

        //Sletter opgave
        function deleteTask(task, isDone){
            if(isDone){
                doneList = doneList.filter(t => t.id !== task.id);
            } else {
                todoList = todoList.filter(t => t.id !== task.id);
            }
            updateLocalStorage();
            updateLists();
        }

        //Opdatere begge lister
        function updateLists(){
            todoListElement.innerHTML =  '';
            doneListElement.innerHTML =  '';

            todoList.forEach(task =>{
                renderTask(task, todoListElement, false);
            });

            doneList.forEach(task =>{
                renderTask(task, doneListElement, true);
            });
        }

    }

    //Opdatere localStorage

    function updateLocalStorage(){
        localStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.setItem('doneList', JSON.stringify(doneList));
        localStorage.setItem('taskId', taskId,toString());
    }

    //Initial rendering af indlæsning af side
    updateLists();

});