function add() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var sum = num1 + num2;
    sum = sum.toFixed(3);
    var n1 = isNaN(num1);
    var n2 = isNaN(num2);
    var display;
    display = "The sum of "+num1+" and "+num2+" is "+sum+".";
    document.getElementById("result").innerHTML = display;

    if (n1 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
    if (n2 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
}
function subtract() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var difference = num1 - num2;
    difference = difference.toFixed(3);
    var n1 = isNaN(num1);
    var n2 = isNaN(num2);
    var display;
    display = "The difference of "+num1+" and "+num2+" is "+difference+".";
    document.getElementById("result").innerHTML = display;

    if (n1 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
    if (n2 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
}
function multiply() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var product = num1 * num2;
    product = product.toFixed(3);
    var n1 = isNaN(num1);
    var n2 = isNaN(num2);
    var display;
    display = "The product of "+num1+" and "+num2+" is "+product+".";
    document.getElementById("result").innerHTML = display;

    if (n1 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
    if (n2 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
}
function divide() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var quotient = num1 / num2;
    quotient = quotient.toFixed(3);
    var n1 = isNaN(num1);
    var n2 = isNaN(num2);
    var display;
    display = "The quotient of "+num1+" and "+num2+" is "+quotient+".";
    document.getElementById("result").innerHTML = display;

    if (n1 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
    if (n2 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
}
function mod() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var remainder = num1 % num2;
    remainder = remainder.toFixed(3);
    var n1 = isNaN(num1);
    var n2 = isNaN(num2);
    var display;
    display = "The remainder when "+num1+" is divided by "+num2+" is "+remainder+".";
    document.getElementById("result").innerHTML = display;

    if (n1 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
    if (n2 == true) {
        display = "Invalid operation"
        document.getElementById("result").innerHTML = display;
    }
}