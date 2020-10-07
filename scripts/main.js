let author = 'RocketSH';
let myHeading = document.querySelector('h1');
myHeading.textContent = `Hello ${author} `;

let starNumber1 = document.querySelector("#starNumber1");
let starNumber2 = document.querySelector("#starNumber2");
let starNumberTotal = (starNumber1 + starNumber2);

 document.querySelector("#starCalculator").addEventListener(
   "submit",
   function (event) {
     alert(starNumberTotal);
     event.preventDefault();
   },
   false
 );