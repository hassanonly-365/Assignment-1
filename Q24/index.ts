
//Tests for equality and inequality with strings
function equality(memo1:string ,memo2:string) :boolean {
    return memo1.length == memo2.length
}
let memo1 = "Hello World!";
let memo2 = "Hello World!";
console.log(equality(memo1,memo2));

//Tests using lowercase function
function lowercase(memo3:string) :boolean{
    return memo3 === memo3.toLowerCase()
    }   

    let memo3 = "the sentence is being used to test lowercase function";
    console.log (lowercase(memo3));
 
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
function num(num1:number, num2:number) : boolean{
    return num1 >= num2
}
let num1 = 369;
let num2 = 988;
console.log(num(num1,num2));

//Tests using "and" and "or" operators

//test using "and" operator
console.log(num1<num2 && num2<1000 );
console.log(num2>num1 && num1>300);

//test uning "or" operator
console.log(num1>num2 || num2<1000);
console.log(num1<num2 || num1>300);

//Test whether an item is in an array
let cars= [`Mark X` ,`Grande X` ,`Civic X`];
console.log(Array.isArray(cars));

//Test whether an item is  NOT in an array
console.log(!Array.isArray(cars));
