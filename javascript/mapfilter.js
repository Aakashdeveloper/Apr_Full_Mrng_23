Map
> map help to iterate over the array 
> it helps to apply the logics
> it always same length of output array as input except one condition
filter
> it always return those valeu for which output/condition is true

var a = [4,8,3,34,12,45]
a.map((data) => {return data*2})


var a = [4,8,3,34,12,45]
a.map((data) => {return a.push(data*2)})


var a = [4,8,3,34,12,45,7]
a.filter((data) =>  {return data>20})
[34, 45]

a.map((data) =>  {return data>20})
[false, false, false, true, false, true, false]


var a = [0,1,2,3]

a.map((data) =>  {return data*2})
[0,2,4,6]

a.filter((data) =>  {return data*2})
 [1, 2, 3]