import Cliente from './cliente.js';
import Impuestos from './impuesto.js';

//Creando nueva instancia para impuesto
const impuestoUno = new Impuestos(10000,100);
const impuestoDos = new Impuestos(9000,900);


//Instancia Cliente para impuesto correspondiente
const clienteUno = new Cliente("Dani", impuestoUno);
const clienteDos = new Cliente("Peter", impuestoDos);


//Calculando impuesto anual para clienteuno y dos
console.log(clienteUno.nombre + ':' + clienteUno.calcularImpuesto());
console.log(clienteDos.nombre + ':' + clienteDos.calcularImpuesto());