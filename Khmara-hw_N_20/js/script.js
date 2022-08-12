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
}


//create form on load
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
    </div>
    `

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

    if (inputTitle) {
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









//condition and download tasks in json
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





function randonId() {
    return Math.random().toString(16).substr(2,9);
};








function clickBtnCreate(event){
    const targetBtn = event.currentTarget;
    const btnParent = event.currentTarget.parentNode.parentNode;
    const inputTitle = btnParent.querySelector('input');
    const textareaText = btnParent.querySelector('textarea');
    const sel = btnParent.querySelector('.selPrior')''

    if(textareaText.value.length === 0){
        textareaText.value = '...';
    }
    const item = {
        "id": `${randonId()}`,
        "title": `${inputTitle.value}`,
        "descript": `${textareaText.value}`,
        "priority": `${checkSelect(sel)}`,
        "status": "Open"
    };
    renderCard(item);
    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    inputTitle.value = '';
    textareaText.value = '';
    targetBtn.disabled = true;  
}




function checkSelect(select){

    const value = select.value;
    const text = select.options[select.selectedIndex].text;
    return text
}



function selectGenerator(sel, opts){
    let s = new NewElement('select', '', {className: sel.className, id: sel.id})
    const select = s.createEl();
    
    Object.entries(opts).forEach(([val, key]) => {
        let option = new NewElement('option', key, {value: val});
        option = option.createEl();
        select.appendChild(option);
     });

    select.addEventListener('change', function () {
        checkSelect(select);
    });

    return select;
} 



function setSelAttr(parentId){
    const cartPrior = document.getElementById(`prior-${parentId}`);
    const cartPriorB = cartPrior.querySelector('b');
    const cartStat = document.getElementById(`stat-${parentId}`);
    const cartStatB = cartStat.querySelector('b');
    cartPriorB.style.display = 'none';
    cartStatB.style.display = 'none';
    const priorSel = {
        className: "selPrior"
    }
    const statSel = {
        className: "selStat"
    }
    const selPrior = selectGenerator(priorSel, priority);
    cartPrior.appendChild(selPrior);
    const selStat = selectGenerator(statSel, statusS);
    cartStat.appendChild(selStat);

    const allOptions = cartPrior.querySelector('select').querySelectorAll('option');
    allOptions.forEach((val) => {
        if(val.innerText == cartPriorB.innerText){
            val.setAttribute('selected','selected');
        }
    });

    const allStatus = cartStat.querySelector('select').querySelectorAll('option');
    allStatus.forEach((val) => {
        if(val.innerText == cartStatB.innerText){
            val.setAttribute('selected','selected');
        }
    });
}




function deleteTask(event) {
    const btn = event.currentTarget.parentNode.parentNode;
    const parentId = btn.id;
    btn.remove();
    todoItems = todoItems.filter((item) => item.id !== parentId);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function editTask(event) {
    const targetBtn = event.currentTarget;
    const btn = event.currentTarget.parentNode.parentNode;
    targetBtn.style.display = 'none';
    const btnSave = btn.querySelector('.btnSave');
    btnSave.style.display = 'block';
    const parentId = btn.id;
    const targetTitleDiv = btn.querySelector('.titleText');
    const targetTitle = btn.querySelector('.titleText h3');
    const targetDescript = btn.querySelector('.descriptText p');
    targetTitle.setAttribute('contenteditable', 'true');
    targetDescript.setAttribute('contenteditable', 'true');
    setSelAttr(parentId);

    targetTitle.oninput = function(e) {
        let inputVal = e.target.innerText;
        // console.log(inputVal);
        if(inputVal.length > 0){
            btnSave.disabled = false;
            targetTitleDiv.style.border = 'none';
            targetTitleDiv.style.borderRadius = '5px'
        }else{
            btnSave.disabled = true;  
            targetTitleDiv.style.border = '1px solid red';
        }
    }

}

function saveTask(event) {
    const targetBtn = event.currentTarget;
    const btn = event.currentTarget.parentNode.parentNode;
    targetBtn.style.display = 'none';
    const btnEdit = btn.querySelector('.btnEdit');
    btnEdit.style.display = 'block';
    const parentId = btn.id;
    const targetTitle = btn.querySelector('.titleText h3');
    const targetDescript = btn.querySelector('.descriptText p');
    targetTitle.setAttribute('contenteditable', 'false');
    targetDescript.setAttribute('contenteditable', 'false');
    const parentDivP = btn.querySelector(`#prior-${parentId}`);
    const parentDivS = btn.querySelector(`#stat-${parentId}`); 
    const priorB = parentDivP.querySelector('b');
    const statB = parentDivS.querySelector('b');
    priorB.style.display = 'block';
    statB.style.display = 'block';
    const selPrior = btn.querySelector(`.selPrior`);
    const selStat = btn.querySelector(`.selStat`);
    const optnsP = selPrior.querySelectorAll('option');
    const optnsS = selStat.querySelectorAll('option');




    optnsP.forEach((val) => {
        if(val.getAttribute('selected')){
        val.removeAttribute('selected');
        }
        if(val.value === selPrior.value){
            val.setAttribute('selected','selected');
        }
    });

    optnsS.forEach((val) => {
        if(val.getAttribute('selected')){
        val.removeAttribute('selected');
        }
        if(val.value === selStat.value){
            val.setAttribute('selected','selected');
        }
    });

    Object.entries(priority).forEach(([val, key]) => {
        if(selPrior.value == val){
            priorB.innerHTML = `<b>${key}</b>`;
            parentDivP.removeChild(selPrior);
        }
    });

    Object.entries(statusS).forEach(([val, key]) => {
        if(selStat.value == val){
            statB.innerHTML = `<b>${key}</b>`;
            parentDivS.removeChild(selStat);
        }
    });

    let index = todoItems.findIndex(function(e){
        return e.id == parentId
    });

    todoItems[index] = {
        id: `${parentId}`,
        title: `${targetTitle.innerText}`,
        descript: `${targetDescript.innerText}`,
        priority: `${priorB.innerHTML}`,
        status: `${statB.innerHTML}`,
    }
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}






main();