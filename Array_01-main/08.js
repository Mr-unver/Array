const ids = [15, 1, 20, 5];
const peoplesObject = {
  1: 'Alex',
  5: 'Elena',
  15: 'Igor',
  20: 'Vladilen'
};

// const peoples = ids.map(item => peoplesObject[item] + '(id: ' + peoplesObject[item] + ')')
const peoples = ids.map(item => peoplesObject[item] + ' (id :' + item + ')')


console.log(peoples); 
// ['Igor (id: 15)', 'Alex (id: 1)', 'Vladilen (id: 20)', 'Elena (id: 5)']