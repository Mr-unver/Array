const computers = [
    {
      name: 'MacBook Pro 13',
      price: 150000
    },
    {
      name: 'MacBook Pro 14',
      price: 200000
    },
    {
      name: 'MacBook Pro 16',
      price: 300000
    },
  ];
  
  const index = computers.findIndex(el => el.name === 'MacBook Pro 13')

  if (index != -1) 
    {
        computers.splice(index, 1)
    }
  
  console.log(computers);
  /*
  [ 
    {name: 'MacBook Pro 14', price: 200000},
    {name: 'MacBook Pro 16', price: 300000}
  ]
  */