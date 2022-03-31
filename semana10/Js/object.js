// // objecto forma 1
// const carro1 = {}; 
// // objecto forma 2
// const carro2 = new Object(); 
// // objecto forma 3 
// const carro3 = Object.create();
// // objecto forma 4 
function Carro(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

const carro4 = new Carro('Renault', 'sendero', 'gris');

// console.log(`Mi carro es un ${carro4.marca} ${carro4.modelo} ${carro4.color} `);

const Vehiculo = {
    tipo: ["Carro", "Moto", "Bote"],
    marca: {
        nombre: "BMW"
    },
    motor: "1200HP"
}

// console.log(Vehiculo.tipo[1]);
// console.log(Vehiculo.marca.nombre);
// console.log(Vehiculo.motor);

const car = {
    brand: "Susuki",
    model: "Swift",
    start: function () {
        // console.log(`Car started ${this.brand} ${this.model}`);
    }
}

car.start();