// toLowerCase e toUpperCase

var phrase = "This is the phrase that we are going to manipulate";

var phraseCapsLock = phrase.toUpperCase();

console.log(phraseCapsLock);

console.log(phraseCapsLock.toLowerCase());


// trim

var name1 = "        Matheus     ";

var name1Trim = name1.trim();

console.log(name1);
console.log(name1Trim);

// split

console.log(phrase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var phrasetwo = "I want the last test word of this test phrase";

console.log(phrasetwo.indexOf("test"));

console.log(phrasetwo.lastIndexOf("test"));

console.log(phrasetwo.split(" "));
