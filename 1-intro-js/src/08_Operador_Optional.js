const carro = {
    id: 1,
    nombre: 'LaFerrari',
    date: new Date(),
    marca: {
        id: 1,
        nombre: 'Ferrari',
        ubicacion: 'Europa',
        age: 100
    },
    inventarios: [
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 11000000
        },
        {
            id: 2,
            color: 'Blanco',
            cantidad: 2,
            precio: 10000000
        },
        {
            id: 3,
            color: 'Amarillo',
            cantidad: 5,
            precio: 11500000
        },
    ],
    totalInventario: function (){
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio*inventario.cantidad;
        });
        return total;
    },
    costo: 10000000,
    saludo: function () {
        return  `Hola ${this.marca.nombre} ${this.costo}`;
    }
}

if(carro.lugarProcedencia != undefined && carro.lugarProcedencia.name){
    console.log('Cumple');
}else{
    console.log('No existe el lugar de procedencia');
}

console.log(carro.lugarProcedencia);
console.log(carro.lugarProcedencia?.name);
console.log(carro.marca?.municipio?.name);