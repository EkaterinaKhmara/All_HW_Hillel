function checkSelect(select){
    const text = select.options[select.selectedIndex].text;
    return text;
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