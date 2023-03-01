// splice
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); //add 3 at index 2

console.log(arr);

arr.splice(4, 1); //delete element at index 4 

console.log(arr);

// indexOf

console.log(arr.indexOf(5));


// join
var arr2 = ["a", "mouse", "gnawed", "a", "clothes"];

console.log(arr2.join(","));


// reverse
console.log(arr2.reverse());