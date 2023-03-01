var test = 5;

console.log(this);
console.log(this.test);
console.log(test);

let pessoa = {
  name1: "Matheus",
  idade: 29,
  falar: function() {
    console.log("Olá, tudo bem?");
  },
  dizername1: function() {
    console.log("O meu name1 é " + this.name1);
  },
  aniversario: function() {
    this.idade += 1;
  },
  saudacao: function() {
    return 'Sr. ' + this.name1;
  }
};

pessoa.dizername1();

console.log(pessoa.idade);
for (x=0; x<=2; x+= 1){
  pessoa.aniversario();

}

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);