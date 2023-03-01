function firstfunction() {

  console.log("Hello World");

}

firstfunction();

class Person {

  constructor(name) {
    this.name = name;
  }


  speak(words) {

    console.log(`${this.name} says: ${words}`);
  
  }
  
  eat(food) {
  
    console.log(`${this.name} is eating ${food}`);
  
  }

};

var name1 = "Mary";

const mary = new Person(name1);

mary.speak("I am a cat");
mary.eat("rat");


function add(a, b) {
  var add = a + b;
  return add;
}

var addUm = add(2, 5);

console.log(addUm);

var addtwo = add(5, 5);

console.log(addtwo);

console.log(add(4, 5));