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

function main() {
    createMainForm();
    getTasks();
    createTitleCards();
}

function createMainForm(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="form">
        <h1>New Task</h1>
        <div class="formBox">
            <input type="text" placeholder="Title" id="title">
            <textarea id="descript" cols="30" rows="5" placeholder="Description"></textarea>
            <div class="optionButton">
                <div class="priority">
                    <p>Priority: <p>
                </div>
                <button class="btn createBtn" id="btnCreate" onclick="clickBtnCreate(event)">Create task</button>
            </div>
        </div>
    </div>`
    const priorSel = {
        className: "selPrior",
        id: "selPrior"
    }
    const selP = selectGenerator(priorSel, priority);
    const innerSelect = root.querySelector('.priority');
    innerSelect.appendChild(selP);

    for(key of selP){
        if(key.innerHTML === 'Medium'){
            key.setAttribute('selected','selected');
        }
    }
 
    const btnCreate = document.getElementById('btnCreate');
    const inputTitle = document.getElementById('title');
    btnCreate.disabled = true; 

    if(inputTitle){
        inputTitle.onblur = function() {
            if(inputTitle.value.length === 0){
                inputTitle.style.border = '1px solid red';
                btnCreate.disabled = true;  
            }else{
                btnCreate.disabled = false;
            }
        };
        inputTitle.onfocus = function() {
            const textareaText = document.getElementById('descript');
            textareaText.style.border = 'none';
            inputTitle.innerHTML = '';
            inputTitle.style.border = 'none';
        };
        inputTitle.oninput = function(e) {
            let inputVal = e.target.value;
            if(inputVal.length > 0){
                btnCreate.disabled = false;
            }else{
                btnCreate.disabled = true;  
            }
        }
    }
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

function createTitleCards(){
    const divForCards = document.getElementById('mainCards');
    divForCards.insertAdjacentHTML('beforeEnd', '<div class="cards" id="cards">');
    divForCards.insertAdjacentHTML('afterBegin', '</div> <h1>My Tasks</h1>');
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

function randonId() {
    return Math.random().toString(16).substr(2,9);
};

main();