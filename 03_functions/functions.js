// const num1=2;
// const num2=3;
num1 = prompt("Enter Num1 : ");
num2 = prompt("Enter Num2 : ");
function myfunc(num1,num2){
    return (`${num1}${num2}`);
}

minus=(num1,num2)=>`${num1}-${num2}`
document.write(myfunc(num1,num2))
console.log(myfunc(num1,num2))
console.log(minus(num1,num2))