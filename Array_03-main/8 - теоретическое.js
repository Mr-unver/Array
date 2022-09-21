const firstObj = {
    name: 'Владимир',
    age: 23,
    profession: 'Frontend-developer'
  };
  
  const secondObj = firstObj;
  
  const thirdObj = {
    name: 'Владимир',
    age: 23,
    profession: 'Frontend-developer'
  };
  
  console.log(firstObj === secondObj);
  console.log(firstObj === thirdObj);