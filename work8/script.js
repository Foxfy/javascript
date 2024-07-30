var text = "";
var display = document.getElementById('display');
var clear = document.getElementById('clear');
var number = 0;
var mark = "";
var result = 0;

function num(value){
    text = text + value;
    display.innerHTML = text;

    if(value == '+'){
        mark = "+";
        // const textArray = text.split("+");
        // number = Number(textArray[0]) + Number(textArray[1]);
        // return number;
    }else if(value == '-'){
        mark = "-";
    }else if(value == '*'){
        mark = "*";
    }else if(value == '/'){
        mark = "/";
    }
}

function cleartext(){
    number = 0;
    mark = "";
    result = "";
    text = number;
    display.innerHTML = text;
}

function calculate(){
    let allnum = text.split(mark);
    let num1 = Number(allnum[0]);
    let num2 = Number(allnum[1]);

    if(mark == "+"){
        result = num1 + num2;
        display.innerHTML = result;
    }
}