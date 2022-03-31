// Clases
// Instanciar clase
class Persona{
    nombre
}
const cesar = new Persona();
cesar.nombre = "César"
// console.log(cesar.nombre);
// Metodos en las clases 
class Persona1{
    saludo(){
        // console.log("Hola k lo l");
    }
}
const kathe = new Persona1();
kathe.saludo();
// Constructor 
class Persona2{
    constructor(nombre, edad, estatura){
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
    }

    saludo(){
        // console.log(`K lo k, te saluda ${this.nombre}, tengo ${this.edad} años y mido ${this.estatura}`);
    }
}
const juan = new Persona2("Busta Rhymes", 22, 1.76);
juan.saludo();

// Herencia

class Dueño{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo(){
        console.log(`Hola`);
    }
}



class Mascota extends Dueño{
    constructor(nombre, edad, nombreM, especie, raza){
        super(nombre, edad);
        this.nombreM = nombreM;
        this.especie = especie;
        this.raza = raza;
    }
    saludo(){
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} y tengo un ${this.especie} de raza ${this.raza} y se llama ${this.nombreM}`);
    }
}

const pp = new Dueño("Juan", "21");
const mm = new Mascota(pp.nombre,pp.edad, "Arturito", "Hamster","Ruso");