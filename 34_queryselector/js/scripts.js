/*
The key differences between these three methods are:

getElementsByTagName and querySelectorAll return live and static NodeList of elements, respectively, while querySelector returns a single element.
getElementsByTagName and querySelectorAll select elements based on tag name and CSS selector, respectively, while querySelector selects the first matching element based on a CSS selector.
querySelector and querySelectorAll are more versatile than getElementsByTagName because they allow you to select elements based on various CSS selectors, including class, ID, attribute, and pseudo-class selectors.

In general, querySelector and querySelectorAll are more commonly used than getElementsByTagName because of their greater flexibility in selecting elements.
*/

var itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);

// querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista');

console.log(lista);

var primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span);