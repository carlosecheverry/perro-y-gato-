const mensajeEnConsola = (callback, mensaje) => {
    callback(mensaje);
}

mensajeEnConsola(console.info, "hola");


/* ALT+SHIFT+A */

/* 3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números. */

    const higherOrder = (num1, num2, callback) => {  
        callback(num1);
        callback(num2);
        }
    
    const suma = (num1 + num2) => sumar(num1+num2);
    
    const callbackSuma = (num1+num2) => {
        return .... en ves de console.log
        console.log (suma(num1 + num2));
        console.log(num1 + num2);
        }
    
    const miResultado = {5, 3, suma};
    higherOrder(miResultado, callbackSuma);
    
    hacer los mismo para la resta y multiplicación
    
    lueog pintar el resultado si se aplica alguna de las tres operaciones
    
        
    console.log(miResultado(5, 3, restar);
    
