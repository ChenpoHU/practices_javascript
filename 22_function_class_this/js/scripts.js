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


function soma(a, b) {
  var soma = a + b;
  return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));