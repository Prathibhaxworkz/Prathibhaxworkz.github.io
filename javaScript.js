console.log("javascript")
var a=15;
console.log(a)
console.log(typeof(a))
a="javascript"
console.log(a)
console.log(typeof(a))

var b=20;
console.log(b)
console.log(b)
console.log(typeof(b))
var a;
console.log(a)

a=true;
console.log(a)
console.log(typeof(a))


function disp(){
    console.log("calling display function")
    var dispMessage=document.getElementById("disp");
    console.log(dispMessage);
    dispMessage.innerHTML="calling disp";
}
function displaying(){
    console.log("displaying")
    var displayingMessage=document.getElementById("displaying");
    console.log(displayingMessage);
    displayingMessage.innerHTML="calling displaying";
}
function show(){
    console.log("show")
    var showMessage=document.getElementById("show");
    console.log(showMessage);
    showMessage.innerHTML="calling show method";
}
function clicking(){
    console.log("clicking")
    var clickingMessage=document.getElementById("clicking");
    console.log(clickingMessage);
    clickingMessage.innerHTML="calling click method";
}
function showing(){
    console.log("showing")
    var showingMessage=document.getElementById("showing");
    console.log(showingMessage);
    showingMessage.innerHTML="showing";
}
function sum(){
    console.log("calling sum ");
    var num1=document.getElementById("num1");
    console.log(num1);
    var num2=document.getElementById("num2");
    console.log(num2);
    console.log(num1.value);
    console.log(num2.value);

    var c= parseInt(num1.value)+parseInt(num2.value);
    var result=document.getElementById("result");
    result.innerHTML=c;
}
function sub(){
    console.log("calling sub ");
    var no1=document.getElementById("no1");
    console.log(no1);
    var no2=document.getElementById("no2");
    console.log(no2);
    console.log(no1.value);
    console.log(no2.value);

    var d= parseInt(no1.value) - parseInt(no2.value);
    var result=document.getElementById("subtraction");
    result.innerHTML=d;
}
function mul(){
    console.log("calling mul ");
    var no1=document.getElementById("no1");
    console.log(no1);
    var no2=document.getElementById("no2");
    console.log(no2);
    console.log(no1.value);
    console.log(no2.value);

    var d= parseInt(no1.value) * parseInt(no2.value);
    var result=document.getElementById("multiplication");
    result.innerHTML=d;
}
function div(){
    console.log("calling div ");
    var no1=document.getElementById("no1");
    console.log(no1);
    var no2=document.getElementById("no2");
    console.log(no2);
    console.log(no1.value);
    console.log(no2.value);

    var d= parseInt(no1.value) / parseInt(no2.value);
    var result=document.getElementById("division");
    result.innerHTML=d;
}



