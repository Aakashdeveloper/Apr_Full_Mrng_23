es5
var > we can redeclare and reassign

es6
let > we cannot redeclare but can reassign
const> > nor redeclare nor reassign


var a = 10;
var a; declare
a = 10 assignment

> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> let b = 10
undefined
> b
10
> let b = 20
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.
> 

var a = 10
function test(){
    return a*2
}

let b = 10
function test(){
    return b*2
}

const c = 10
function test(){
    return c*2
}




function test(){
    var a = 10
    return a*2
}
console.log(">>A",a)


for(i=0;i<5;i++){
    var z = 10
}
console.log(">>Z",z)



for(i=0;i<5;i++){
    let y = 10
}
console.log(">>Y",y)