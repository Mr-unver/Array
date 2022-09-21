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
  
 const macbook = computers.find(el => el.name === 'MacBook Pro 16')
  
  console.log(macbook);
  // { name: 'MacBook Pro 16', price: 300000 }

