var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

var listaUl = document.createElement('ul');

var text = "Everybody want to be in this rank!";

var textUl = document.createElement('p');

var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listaUl);

body[0].appendChild(textUl);

var pNoBody = document.getElementsByTagName('p');

var texttoP = document.createTextNode(text);

pNoBody[0].appendChild(texttoP);


var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

  var liFor = document.createElement('li');

  var textoLi = document.createTextNode(lista[i]);

  liFor.appendChild(textoLi);

  listaNoBody[0].appendChild(liFor);

}