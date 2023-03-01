for(var i = 0; i < 10; i++) {

  console.log("Repetindo for: " + i);

}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

var arr2 = [0,"hi",3,4,1,2,3,4];

for(var z = 0; z < arr2.length; z++) {
  console.log(arr2);
  arr2.splice(0,2)
  arr2.reverse();
  console.log(arr2[z]);
}

console.log(arr.length);

for(var x = 5; x < 100; x *= 3) {
  console.log(x);
}
