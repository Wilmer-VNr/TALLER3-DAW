//***** ejercicios en clase */

// Variables simples


let cantidadProductos = 10;  
let usuarioActivo = true;     
const numCedula = 1717453252;
let nombreUsuario = "Wilmer"; 

let nombreProducto1 = "Zapatillas de Running Ultra-Ligeras"; 
let precioProducto1 = '35.09'; 
let estadoProducto1 = true;  

console.log(`El producto ${nombreProducto1.toUpperCase()} tiene un precio de $ ${precioProducto1} y actualmente se encuentra en estado ${estadoProducto1 ? 'disponible' : 'no disponible'}`);

let nombreProducto2 = "Auriculares Inalámbricos TWS";  
let precioProducto2 = 3.77;  
let estadoProducto2 = true;  

console.log(`El producto ${nombreProducto2.toUpperCase()} tiene un precio de $ ${precioProducto2} y actualmente se encuentra en estado ${estadoProducto2 ? 'disponible' : 'no disponible'}`);

console.log(`Nombre cliente: ${nombreUsuario} con cedula de identidad: ${numCedula} Total a pagar: $${precioProducto1+precioProducto2}`);

// Variables compuestas
let productosDestacados = ["Auriculares", "Zapatillas de Running", "Chaqueta Casual", "Conjunto de Yoga"];
let vendedor = {
    nombre: "Tienda TEMU [premium]",
    numEstrellas: 4.9
};

// String 
let ofertas = "TEMU - OFERTAS";
console.log(ofertas.length);

// Métodos
console.log(ofertas.trim());
console.log(ofertas.includes('TEMU[premium]'));
console.log(ofertas.toUpperCase());
console.log(ofertas.toLowerCase());

// forma estandarizada
console.log(`Código de descuento: ${ofertas}`);

//convertir un string a un numero
console.log(+precioProducto1 + precioProducto2);  //

// Operadores ternarios
let puntosUsuario = 850;
let puntosRequeridos = 1000;
puntosUsuario >= puntosRequeridos ? console.log("Tienes suficientes puntos para el descuento") : console.log("Sigue acumulando puntos");

// Valores verdaderos - truthy
let nivelMembresia = 3;
nivelMembresia === 4 ? console.log("Membresía premium activada") : console.log("Actualiza tu membresía");

// Valores falsy o falsos
let usuario = "";
!usuario ? console.log("No existe usuario") : console.log("Usuario registrado");

// Comparación
let codProd = "123456";
codProd === "123456" ? console.log("Código encontrado") : console.log("Código no registrado");

// Loops
const productosTemu = [
    "Auriculares Inalámbricos TWS",
    "Zapatillas de Running Ultra-Ligeras",
    "2PCS Luces de Emergencia LED",

];

// Mostrar productos recomendados (similares a la imagen)
productosTemu.forEach(producto => {
    console.log(producto);
});

// Mostrar productos destacados
console.log(productosDestacados);


//---------------------------------------------------
// Función Anónima y autoejecutada 
(function() {
    console.log("Ejecución de una función");
})();

// Variables
const userEmail = 'user@example.com';
const userToken = 'abcd1234';

// Función Declarada
function mostrarProducto() {
    console.log('Producto: Zapatillas de Running Ultra-Ligeras');
}
mostrarProducto();

// Función Expresada
const connectionBDD = function() {
    console.log("Conexión a la base de datos de productos exitosa");
};
connectionBDD();

// ARGUMENTOS
const validarEmailAndToken = function(email, token) {
    console.log(`El token es ${token} y su email es ${email}`);
};
validarEmailAndToken(userEmail, userToken);


// RETORNO
function tiposRetorno() {
    return {
        producto: "Auriculares Inalámbricos TWS",
        precio: 3.77,
        stock: true
    };
}
console.log(tiposRetorno());

// ES6
// ARROW FUNCTION
const connectionBDDMongo = () => {
    console.log("Conexión a MongoDB exitosa");
};
connectionBDDMongo();

// Función Flecha Abreviada
const registrarUsuario = email => console.log(`Usuario registrado: ${email}`);
registrarUsuario("usuario@correo.com");


// OBJETOS
const producto1 = {
    name: "Zapatillas de Running Ultra-Ligeras",
    price: 35.09,
    available: true
};

const cliente = {
    nombre: 'Wilmer V',
    edad: 21,
    direccion: {
        ciudad: 'Quito',       
    },
    genero: 'masculino'
};


console.log('Cliente:', cliente);


const producto = {
    nameProduct: 'Auriculares Inalámbricos TWS para Juegos',
    price: 3.77,
    sales: 33000,
    desc: 71
};

console.log(`Producto: ${producto.nameProduct}`);
console.log(`Precio: $${producto.price}`);
console.log(`Ventas: ${producto.sales}`);
console.log(`Descuento: ${producto.desc}%`);

console.log('-----------------------------');

console.log('Producto:', producto);




