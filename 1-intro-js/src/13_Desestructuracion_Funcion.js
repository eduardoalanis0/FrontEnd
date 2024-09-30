
const carro = {
    marca: 'Seat',
    modelo: 'Fr',
    anio: 2018,
    nombre: 'Leon'
}

const detalle = (carrito) => {
    const { marca, modelo, nombre } = carrito;

    console.log(`El vehiculo de la marca ${marca} es modelo ${modelo} y su nombre es ${nombre}`);
}

detalle(carro);

const detalle2 = ({marca, modelo, nombre}) => {
    //const { marca, modelo, nombre } = carrito;

    console.log(`El vehiculo de la marca ${marca} es modelo ${modelo} y su nombre es ${nombre}`);
}

