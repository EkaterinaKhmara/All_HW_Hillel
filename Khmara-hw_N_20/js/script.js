let todoItems = [];

const priority = {
    'low': 'Low',
    'medium': 'Medium',
    'high': 'High'
};
let statusS = {
    'open': 'Open',
    'inProgress': 'In progress',
    'done': 'Done'
};

function loadData() {
    return fetch('./data/data.json').then(res => res.json());
}

function main(){
    getTasks();
}

function getTasks(){
    const todo = localStorage.getItem('todoItems');
    if (todo) {
        todoItems = JSON.parse(todo);
        if (todoItems.length) {
            renderTodoItems(todoItems);
            return;
        }
    } 
    loadData().then(items => {
        todoItems = items;
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
        renderTodoItems(todoItems);
    });
}

function renderTodoItems(todoItems) {
    for(let item of todoItems) {
        renderCard(item);
    }
}

function renderCard(todoItems){
    const element = new NewElement(
        'div', 
        `<div class="titleText">
            <h3 contenteditable="false">${todoItems.title}</h3>
        </div>
        <div class="divSelects">
            <div class="priority" id="prior-${todoItems.id}">
                <p>Priority: </p><b>${todoItems.priority}</b>
            </div>
            <div class="status" id="stat-${todoItems.id}">
                <p>Status: </p><b>${todoItems.status}</b>
            </div>
        </div>
        <div class="descriptText">
            <p contenteditable="false">${todoItems.descript}</p>
        </div>
        <div class="buttons">
            <button class="btn btnEdit" onclick="editTask(event, '${todoItems.id}')">Edit</button>
            <button class="btn btnSave" onclick="saveTask(event, '${todoItems.id}')">Save</button>
            <button class="btn btnDel" onclick="deleteTask(event, '${todoItems.id}')">Delete</button>
        </div>`, 
        {
            className: 'card',
            id: todoItems.id,
        });
        element.render('#cards');    
}

main();
btnCreate.addEventListener('click', clickBtnCreate);