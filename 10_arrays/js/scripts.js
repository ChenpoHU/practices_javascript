var arr = [5, "Matheus", true, {test: 1, test: 2}]; // obj => {}

console.log(arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]); // Matheus
console.log(arr2[0]);

arr[4] = 10;

arr[0] = "Test";

console.log(arr); //[Test, "Matheus", true, {test: 1, test: 2} ,10]

console.log(typeof arr); //array
