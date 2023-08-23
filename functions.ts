function add(num1:number,num2:number , num3?:number)  : number{
    return num3 ? num1 + num2 + num3 : num1 + num2 
}

const sub = (num1:number , num2:number,num3=10) : number => num1 -num2 - num3;

console.log(sub(2,4 ));

const mult = function(num1:number , num2:number) : number {
    return num1 + num2
}

function add2 (num1:number,num2:number , ...num3:number[]) :number {
return num1 + num2 + num3.reduce( (a,b)=> a-b , 0 )
}

let numbers = [1,2,3,4,5,6]
console.log('add number 2:',add2(3,4,5, ...[5,6,7,8,9]));
