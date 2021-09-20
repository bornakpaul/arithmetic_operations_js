function addition(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 0;

    result = num1 + num2;
    document.getElementById("result").value = result;
}

function substraction(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 0;

    result = num1 - num2;
    document.getElementById("result").value = result;
}

function division(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 0;

    result = num1 / num2;
    document.getElementById("result").value = result;
}

function multiplication(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 0;

    result = num1 * num2;
    document.getElementById("result").value = result;
}

function clean(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}