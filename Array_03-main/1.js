const person = {
    name: 'Владислав',
    age: 27,
    profession: 'Frontend-developer',
    favorite_activity: 'Watch TV series',
  };
  
  const jsonPerson = JSON.stringify(person)
  
  console.log(jsonPerson);
  
  // Вывод:
  // '{"name":"Владислав","age":27,"profession":"Frontend-developer","favorite_activity":"Watch TV series"}'