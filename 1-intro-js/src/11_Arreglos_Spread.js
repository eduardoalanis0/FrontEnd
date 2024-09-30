

const carros = ['Ferrari', 'Nissan', 'Porsche', 'Mc Laren', 'Mercedes'];

const carros2 = carros.concat('Mustang GT500', 'Challenger', 'Camaro');

const motos = ['Italika', 'Chooper', 'Ninja', 'SuperSport'];

const tienda = [...carros, ...motos, 'rin 18'];

const tienda2 = motos.concat(carros2).concat('rin 18');


console.log(carros2);

console.log(tienda2);