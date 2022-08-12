let celulares = [
    {
      iphone: "modelo1",
      precio: 10000,
    },
    { iphone: "modelo5", precio: 90000 },
    {
      iphone: "modelo4",
  
      precio: 80000,
    },
  ];
  let pepito = 0;
  let masCaro = celulares.reduce((acum, value) => acum + value.precio, pepito)
  
  console.log(masCaro);
  