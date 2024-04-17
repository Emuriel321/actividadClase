// 1. siempre se debe hacer -> verificar   que si este conectado con html 
console.log("esta es la actidaad de hoy")


//2 traer los elementos que necesitan de su html->> los que tienen id 
// los elementos que me traiga deben estar en una variable deben ser constantes 


//document-> me accede a mi html 
// getElementById -> me trae un elemneto en partcular por su identificador unico 
// dentro de loa parentesis debo poner el mismo id qiue puse en mi html 

//mi elemento 1 
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

//mi elemneto 2 
//const btn = document.getElementById("boton");
//console.log(btn); 
const mensaje =document.getElementById("mensajeEdad");
console.log(mensaje); 

function verificarEdad(){

    console.log("entro a mi funcion a verificar edad");
    let edad = edadInput.value; 
    console.log(edad); 



    //utilizar condicionales 

   if(edad>= 18 ){
    console.log("eres mayor de edad")
    mensaje.textContent = "eres mayor de edad"


   } else{ 
    console.log("eres memor de edad")

    mensaje.textContent = "eres menor de edad"
   }

}






