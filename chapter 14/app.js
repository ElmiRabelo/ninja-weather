//store data in local storage
//local string storage only strings, it will convert any value into string
localStorage.setItem('name', 'elmi');
localStorage.setItem('age', 24);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//updating data
localStorage.setItem('name', 'Gui');
name = localStorage.getItem('name');
console.log(name);

localStorage.age = 29;
age = localStorage.getItem('age');
console.log(age);

// DELETING ITEMS FROM LOCAL STORAGE

//###----> deleting item
// localStorage.removeItem('name');

//cleaning up local storage
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

