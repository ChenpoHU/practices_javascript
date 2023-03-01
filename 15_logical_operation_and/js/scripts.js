const Person ={};
Person.age = 16;
Person.name = "João";

if(Person.name == "João" && Person.age == 16) {
  console.log("João can join the fencing class");
} else {
  console.log("This is not John");
}

if(1 == 1 && 3 > 2 && true) {
  console.log("It happened");
}

if((1 == 1 && 3 > 3) && true) {
  console.log("It happened");
} else if(Person.name === "João" && Person.age >= 14) {
  console.log("Here passes!");
}