function clickBtnCreate(event){
    const targetBtn = event.currentTarget;
    const btnParent = event.currentTarget.parentNode.parentNode;
    const inputTitle = btnParent.querySelector('input');
    const textareaText = btnParent.querySelector('textarea');
    const sel = btnParent.querySelector('.selPrior');

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