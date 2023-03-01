let pessoa = {
  name1: "Matheus",
  idade: 29,
  falar: function() {
    console.log("Olá, tudo bem?");
  },
  add: function(a, b) {
    return a + b;
  }
};

console.log(pessoa.name1);

pessoa.falar();

var add = pessoa.add(2, 2);

console.log(add);

class person2{

  constructor(name1, age){
    name1 = this.name1;
    age = this.age;
    const name2 = "Matheus";
    const age2 = 29;
  }

  speak() {
    console.log("Hello, how are you");
  };

  add(a, b) {
    return a + b;
  }
};

const mary = new person2("mary", 18)

mary.speak();

var add2 = mary.add(2, 2);

console.log(add2);
