var obj = {
  name: "Matheus",
  age: 29,
  job: "programmer",
  thisWorking: true,
};

console.log(obj);

console.log(typeof obj);//Object

console.log(obj.name);
console.log(obj.age);
console.log(obj.job);

console.log("My name is " + obj.name);

obj.name = "Pedro";

console.log(obj.name); //Pedro, the property of const object can also be modified.

console.log(obj);

obj.graduation = true;

console.log(obj);
