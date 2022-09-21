const people = [
    {name: 'Ольга', age: 22},
    {name: 'Сергей', age: 20},
    {name: 'Светлана', age: 16},
    {name: 'Василий', age: 27},
    {name: 'Мария', age: 14},
    {name: 'Олег', age: 30},
  ];
  
  const adultPeople = people.filter(el => el.age >= 18);
  
  console.log(adultPeople);
  
  // Вывод:
  // [
  //   {name: 'Ольга', age: 22},
  //   {name: 'Сергей', age: 20},
  //   {name: 'Василий', age: 27},
  //   {name: 'Олег', age: 30},
  // ]