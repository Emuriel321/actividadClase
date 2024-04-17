// esta es la manera de jacer comentarios en js
// consola.log> la forma de enviar menajes a la consola del navegador. 
    console.log("hola mundo, aca estoy para continuar");


// conceptos basicos en js
//tipos de variables
// manejo del DOM
//condicionales 
//ciclos 

// las variables en js

// hay 3 tipos de variables en js

//var> tipo de variable que ya no se usa(no la vamos a usar)


// lef> una variable que cambia en el tiempo 
//ej resultado 5*4= 9 pero puede cambiar 

// conat> variable constante > esuna variable que no puede cambiar con el tiempo. 


//tipos de datos io informacion que podemos almacenar
// el =  en js no es comparativo sin que me sirve para asignar valores  

//numericos
//cadena de caracteres > texto> srting (en programacion )
//el texto siempre debe estar dentro de comillas 

//booleanos>un dato que puede ser verdadero o falso
let esVerdadero = true; // true> verdad
let esFalso = false; // false> falso

// arreglos> arrays(e programacion) > me permite almacenar varios datos en el mismo tiempo en una variable 
let arregloNombres = ["luisa", "emanuel", "paula"];
let arregloNumero = [1, 2, 3,];

// objetos -> " una representacion de elemnetos de la vida real pero en nuestro codigo"

// -> atributos -> caracteristicas de ese objeto 
// -> metodos -> acciones que puede realizar el objeto -> funciones 
// (), [], {} 
// [] -> corvhetes -> son para declarar arreglos 
// {} -> llaves .> son para declarar objetos 
// () -> parentesis -> para invocar acciones 


const celular = {
    color: "blanco",
    modelo: "galaxy a7",
    ancho: 350,
    alto: 800,
    // el metodo -> un menaje que me indica o me representa la accion 
    enviarMnensajes: function () {
        // entre estos corvhetes al lado de un parentesis yo establezco la accion a realizar. 
        console.log("mensaje enviado");

    },
    // el mwtodo -> las acciones -> directamente una operacion 
    sumar: function () {
        console.log(5 + 4);
    }

}


//ejemplos de funciones
// funciones -> acciones que usted puede tener en sus sitios web 
function buscarObjeto() {
    console.log("le muestra lo que esta buscando");
}

function filtrarInformacion() {
    console.log("mostrar solo informacion de la depresion");
}



// en la carpeta scripts van tosos los archivos de js pero para darle dinamismo al sitio web

// NODE JS -> utilizamos para poder implementar js en nuestro backend -> operaciones logicas nos 
//permiten el funcionamiento nuestro sitio web nose relacionan con la funcionalidad del sitio a nivel del backen  





