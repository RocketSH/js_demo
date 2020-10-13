let author = "RocketSH";
let myHeading = document.querySelector("h1");
myHeading.textContent = `Hello ${author} `;

let starNumber1 = document.querySelector("#starNumber1");
let starNumber2 = document.querySelector("#starNumber2");
starNumber1.focus();

document.querySelector("#starCalculator").addEventListener(
  "submit",
  function (event) {
    let starNumberTotal = starNumber1.valueAsNumber + starNumber2.valueAsNumber;
    alert(starNumberTotal);
    event.preventDefault();
  },
  false
);
