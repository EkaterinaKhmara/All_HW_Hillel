const sels = document.getElementById('selPrior');

function checkSelect(){
    const sel = sels.selectedIndex;
    const options = sels.options;
    let selOp = options[sel].value;
    return selOp[0].toUpperCase() + selOp.slice(1);
}

function selectGenerator(parent, sel, opts) {
    const select = document.createElement('select');
    select.classList = sel.classList;
    select.id = sel.id;
    select.onchange = checkSelect();
    parent.appendChild(select);
    Object.entries(opts).forEach(([val, key]) => {
        const option = document.createElement('option');
        option.value = val;
        option.innerText = key; 
        select.appendChild(option);
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
        classList: "selPrior"
    }
    const statSel = {
        classList: "selStat"
    }
    const selP = selectGenerator(cartPrior, priorSel, priority);
    cartPrior.appendChild(selP);
    const selS = selectGenerator(cartPrior, statSel, statusS);
    cartStat.appendChild(selS);

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