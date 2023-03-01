// length
var arr = [1,2,3,4,5];

console.log(arr.length);

// push
arr.push(6);
arr.push('Anything');
arr.push('new');

console.log(arr);
console.log(arr.reverse());

// pop
arr.pop();
arr.pop();

console.log(arr);

// unshift
arr.unshift(0);
arr.unshift('test');

console.log(arr);

// shift
arr.shift();

console.log(arr);

// access the second last element
console.log(arr[arr.length - 2]);

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));
