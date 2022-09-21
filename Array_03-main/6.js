const workers = [
    {name: 'Игорь', profession: 'Frontend-developer', salary: 2400},
    {name: 'Ирина', profession: 'Backend-developer', salary: 2200},
    {name: 'Максим', profession: 'DevOps-engineer', salary: 2300},
    {name: 'Екатерина', profession: 'Project-manager', salary: 2500}
];

const workersWithUpdatedSalary = workers.map(item => {
  const money = {}
  money[item.name, 'name'] = item.name
  money[item.profession, 'profession'] = item.profession
  money[item.salary, 'salary'] = item.salary + 300
  return money
}) 

console.log(workersWithUpdatedSalary);

// Вывод:
// [
//   {name: 'Игорь', profession: 'Frontend-developer', salary: 2700},
//   {name: 'Ирина', profession: 'Backend-developer', salary: 2500},
//   {name: 'Максим', profession: 'DevOps-engineer', salary: 2600},
//   {name: 'Екатерина', profession: 'Project-manager', salary: 2800},
// ]