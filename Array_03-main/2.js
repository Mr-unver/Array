const json = '{"name":"Илья","age":23,"profession":"Fullstack-developer","favorite_activity":"Read books"}';

const object = JSON.parse(json)

console.log(object);

// Вывод:
// {
//   name: 'Илья',
//   age: 23,
//   profession: 'Fullstack-developer',
//   favorite_activity: 'Read books'
// }