const people = [
    {name: 'Александр', age: 18},
    {name: 'Нина', age: 21},
    {name: 'Алексей', age: 22},
    {name: 'Виталий', age: 26},
    {name: 'Инна', age: 22},
    {name: 'Марина', age: 26}
  ];
  
  const personIndex = people.findIndex(index => index.age === 22)
  
  console.log(personIndex); // 2
  console.log(people[personIndex]); // {name: 'Алексей', age: 22}