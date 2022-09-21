const names = ['Александр', 'Ян', 'Оля', 'Вячеслав', 'Маша', 'Анатолий'];

const filteredNames = names.filter(el => { return el.length > 5 })

console.log(filteredNames); // ['Александр', 'Вячеслав', 'Анатолий']