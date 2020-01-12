var a = prompt("Введите первое число");
var b = prompt("Введите второе число");
var c = prompt("Введите +, -, *, /");
var a = parseInt(a);
var b = parseInt(b);
var sum;
switch(c){
    case '+': sum = a + b;
    break;
    case '-': sum = a - b;
    break;
    case '*': sum = a * b;
    break;
    case '/': sum = a / b;
    break;
    default: alert('Неверное значение');
}
alert(sum);