// const workers = [
//   {name: 'Игорь', profession: 'Frontend-developer', tasks: 7},
//   {name: 'Ирина', profession: 'Backend-developer', tasks: 5},
//   {name: 'Максим', profession: 'DevOps-engineer', tasks: 6},
//   {name: 'Екатерина', profession: 'Project-manager', tasks: 4},
// ];

// const tasksSum = workers.map(i => i.tasks).reduce((a, b) => a + b);

// console.log(tasksSum); // 22

 
// var traveler = [{description: 'Senior', Amount: 50},
//                 {description: 'Senior', Amount: 50},
//                 {description: 'Adult', Amount: 75},
//                 {description: 'Child', Amount: 35},
//                 {description: 'Infant', Amount: 25}];

// function amount(item){
//   return item.Amount;
// }

// function sum(prev, next){
//   return prev + next;
// }

// traveler.map(amount).reduce(sum);
// // => 235;

// // or use arrow functions
// traveler.map(item => item.Amount).reduce((prev, next) => prev + next);


// https://translated.turbopages.org/proxy_u/en-ru.ru.e6c31f5f-62f91aef-698e2aa8-74722d776562/https/stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array



// https://codepen.io/younver/pen/OJvBQNR


const workers = [
  {name: 'Игорь', profession: 'Frontend-developer', tasks: 7},
  {name: 'Ирина', profession: 'Backend-developer', tasks: 5},
  {name: 'Максим', profession: 'DevOps-engineer', tasks: 6},
  {name: 'Екатерина', profession: 'Project-manager', tasks: 4},
];

const allTask = workers.map(i => i.tasks)

const tasksSum = allTask.reduce((a, b) => a+b)

console.log(tasksSum); // 22