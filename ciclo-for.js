//ciclo for
//index es el iterador o varibale control del for
//el primero de los tres componentes(separados por ;)
//del for es el iterador con su valor inicial
//el segundo componente es la condicion la cual sabemos
//cuando dejara de cumplirse, mientras se cumpla el ciclo
//se ejecutara
//el tercer componente es la variacion del iterador, lo que
//hara que el ciclo deje de ejecutarse alguna vez

for (let index = 0; index < 10; index++) {
    console.log(index);//no siempre se usa el iterador en el bloque de
    //instrucciones
}
console.log("----------------------------------------");

//por ejemplo aca no se usa el iterador dentro del bloque del for
for (let index = 0; index < 200; index++) {
    console.log("HOLA ADSI 2469181 ");
}
console.log("----------------------------------------");
/*
//Un programa que pida 10 letras al usuario y las imprima
for (let index = 15; index < 26; index++) {
    let letra = prompt("Ingrese letra");
    console.log(letra);
}*/
console.log("----------------------------------------");
//Un programa que muestre la tabla del 7 del 10 al 50.
for (let index = 10; index < 51; index++) {
    console.log("7 x " + index, index*7);
}
console.log("----------------------------------------");

//Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use
//ciclo for. Use funciones.
//ascendente
function ascendente() {
    for (let index = 0; index <= 100; index++) {
        console.log(index); 
    }
}
ascendente();
//descendente
function descendente() {
    for (let index = 100; index >= 0; index = index - 1) {
        console.log(index); 
    }
}
descendente();




