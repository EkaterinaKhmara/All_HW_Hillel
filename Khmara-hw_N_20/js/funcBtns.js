const btnCreate = document.getElementById('btnCreate');
const inputTitle = document.getElementById('title');
const textareaText = document.getElementById('descript');
btnCreate.disabled = true;  

function randonId() {
    return Math.random().toString(16).substr(2,9);
};

function deleteStyle(){
    inputTitle.style.border = 'none';
    textareaText.style.border = 'none';
}

function clickBtnCreate(){
    if(textareaText.value.length === 0){
        textareaText.value = '...';
    }
    const item = {
        "id": `${randonId()}`,
        "title": `${inputTitle.value}`,
        "descript": `${textareaText.value}`,
        "priority": `${checkSelect()}`,
        "status": "Open"
    };
    renderCard(item);
    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    inputTitle.value = '';
    textareaText.value = '';
    btnCreate.disabled = true;  
}

inputTitle.onblur = function() {
    if(inputTitle.value.length === 0){
        inputTitle.style.border = '1px solid red';
        btnCreate.disabled = true;  
    }else{
        btnCreate.disabled = false;
    }
};

inputTitle.onfocus = function() {
    inputTitle.innerHTML = '';
    deleteStyle();
}

inputTitle.oninput = function(e) {
    let inputVal = e.target.value;
    if(inputVal.length > 0){
        btnCreate.disabled = false;
    }else{
        btnCreate.disabled = true;  
    }
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
    const targetTitle = btn.querySelector('.titleText h3');
    const targetDescript = btn.querySelector('.descriptText p');
    targetTitle.setAttribute('contenteditable', 'true');
    targetDescript.setAttribute('contenteditable', 'true');
    setSelAttr(parentId);
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
        if(checkSelect()){
        val.removeAttribute('selected');
        }
        if(val.value === selPrior.value){
            val.setAttribute('selected','selected');
        }
    });

    optnsS.forEach((val) => {
        if(checkSelect()){
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
