function clickButton(){
    const inputVal = document.getElementById("withName").value;

    console.log(inputVal);

    document.getElementById("outputText").innerHTML = `Hello, ${inputVal}`;
    document.getElementById("inputBox").style.display = "none";
    document.getElementById("outputBox").style.display = "flex";
}

