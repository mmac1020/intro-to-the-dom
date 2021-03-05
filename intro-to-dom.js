const buttonOne = document.getElementById('buttonOne');

console.log(buttonOne);

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

const allButtonArray = Array.from(allButtons);

console.log(allButtonArray);

allButtonArray.forEach((button) => {
  console.log(button);
});

const parentNode = document.getElementById('parent');

console.log(parentNode.firstChild);
