/*
The key differences between these two properties are:

innerHTML can include HTML tags, while textContent only includes text.
When you set innerHTML, any existing content inside the element is completely replaced by the new HTML content, while textContent replaces only the text content and leaves the HTML structure intact.
innerHTML is generally used when you want to change the HTML structure or content of an element dynamically, while textContent is used when you want to change only the text content of an element and leave the HTML structure intact.

In general, you should be careful when using innerHTML, especially when setting user-generated content, to avoid potential security vulnerabilities, such as cross-site scripting (XSS) attacks. For setting text content, textContent is generally safer and faster than innerHTML.
*/

// selecionar elemento
var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendando e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";