

const carros = ['Ferrari', 'Nissan GTR', 'Porsche', 'Mc Laren', 'Mercedes GLC'];

carros.push('Mustang GT500', 'Challenger', 'Camaro');

//console.log(carros);


const num = [10, 5, 2, 23, 44];

num.push(332, 543, 756);

console.log(num);


carros.forEach(carro => console.log(carro));

for( const car of carros){
    console.log(car);
}


for (let i = 2; i < carros.length; i++){
    const elem = carros[i];
    console.log('1. ' + elem);
    console.log('2. ' + carros[i]);
}