//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

let myVariable1 = "Bob";

let myVariable2 = document.querySelector('h1');
myVariable2.textContent = "Hello world!";
let myVariable = 3;
myVariable === 4;
console.log(myVariable);
console.log(myVariable===4);
//alert("hello!");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
//document.querySelector("html").addEventListener("click", function () {
//                                                                     alert("Ouch! Stop poking me!");
//                                                                    }
//                                               );
//An arrow function uses () => instead of function ():

document.querySelector("html").addEventListener("click", () => {
                                                                  alert("Ouch! Stop poking me!");
                                                                }
                                               );
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/image2.jpg") {
    myImage.setAttribute("src", "./images/image1.jpg");
  } else {
    myImage.setAttribute("src", "./images/image2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
