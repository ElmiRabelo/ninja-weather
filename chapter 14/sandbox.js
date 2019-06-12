const todos = [
  {title: 'do the dishes', author: 'Elmi'},
  {title: 'do the rice', author: 'Gui'},
  {title: 'be a slut', author: 'Brenda'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('tasks', JSON.stringify(todos));

const stored = localStorage.getItem('tasks');

console.log(JSON.parse(stored));