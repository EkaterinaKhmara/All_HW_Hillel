function clickButton(){
    const inputVal = document.getElementById("item");
    const ulVal = document.getElementById("ulList");

    if(inputVal.value.trim()){
        inputVal.style.border = "1px solid #cd5d00";
        ulVal.insertAdjacentHTML('beforeend', `<li>${inputVal.value}</li>`);
        inputVal.value = "";
    }else{
        inputVal.style.border = "3px solid red";
    }
}
