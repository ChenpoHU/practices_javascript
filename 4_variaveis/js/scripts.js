var teste = 1;
/*
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.*/

var name = "João";

console.log(test); //undefined

test = 'Matheus';

console.log(test); //Matheus

console.log(name);

var $name = 'ASD';
var _name = 'ASD2';

console.log($name);
console.log(_name);

var name5 = 'ASD3';

console.log(name5);

var myFirstName = 'Matheus';

console.log(myFirstName); // camelCase

var myLastName = "Battisti"; // global or function scope

console.log(myLastName);

let testing = 1; // block-scope, e.g., if, else
const ola = 2; // block-scope, will not change

console.log(testing);
console.log(ola);

var myName;

console.log(myName); //undefined

myName = "Matheus";

console.log(myName); //Matheus
