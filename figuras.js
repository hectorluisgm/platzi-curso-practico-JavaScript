
//Codigo Cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del curadrado: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2 ;
console.log("El área del triangulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


// Codigo circulo

console.group("Circulo");

//Radio
const radioCirculo = 4;

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("La constante PI mide: " + PI);

//Circunfetencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide: " + areaCirculo + "cm^2");

console.groupEnd();







