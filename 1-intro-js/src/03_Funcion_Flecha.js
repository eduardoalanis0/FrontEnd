
const obtenerInfo = (name = 'Eduardo', lastname = 'Alanis') => `${name} ${lastname}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Pablo', 'García');

console.log(info);
console.log(sum(20,10))