//Ejercicio 1:
function inverso_numero(n){
var n = 0;
var diferente = 0;
n = prompt("Digite um numero : ");
for (var i = 0; i < n.length; i ++){
  
  if (n.charAt(i) == n.charAt(n.length -1 -i)){
   }
  else{
    diferente = 1;
  }  
}
if(diferente == 0){
  document.writeln(" * El número digitado es Capicua!");   
 }
 else{
  document.writeln(" * El número digitado no es Capicua!");
 }
}
inverso_numero();

//Ejercicio 2:
function potencia(n, m){
  n= prompt("Digite el numero base");
  m= prompt ("Digite el exponente");
  resultado = Math.pow(n, m)
  document.writeln(" * El resultado de la potencia es: " +resultado);
}
potencia();

//Ejercicio 3:
function contarLetra(cadena){
var cadena = ['murcielago', 'pato','caballo', 'zebra'];
var str = cadena.toString();
var C= "a";
var contador = 0;
for(var i =0; i< str.length; i++){
      if(str[i]==C){
      contador++
    }   
  }
document.writeln(" * Las palabras tienen " +contador+ " letras "+C);
}
contarLetra();

//Ejercicio 4:
function contarPalabras(texto){
var texto= "El mundo es ancho y ajeno"
var array = texto.split(" ");
var resultado = array.length;
document.writeln(" * El texto tiene " +resultado+ " palabra(s)");
}
contarPalabras();

//Ejercicio 5:
function palabraLarga(cadena) {
  cadena=['Gato','Perro','Cocodrilo','leon'];
  var largo= 0;
 for(var i =0; i <cadena.length; i++) {
    if(cadena[largo].length<cadena[i].length)
      largo=i;
   }
   document.writeln(" * El tamaño mas largo de todas las palabras es de : " +cadena[largo].length + " y la palabra es: " +cadena[largo])
  }
 palabraLarga();

//Ejercicio 6:
function contarVocales(cadena){
cadena = ['ojo', 'mouse', 'lapiz'];
var contador = 0;
for (var i = 0; i < cadena.length; i++){
     var w = cadena[i];
    if( w.indexOf('a') >= 0 || w.indexOf ('e')>= 0|| w.indexOf('i')>= 0|| w.indexOf('o')>= 0|| w.indexOf('u')>= 0){
      contador ++
    }
  }
  document.writeln(" * La cadena tiene: " +contador+ " vocales");
}
contarVocales();

//Ejercicio 7:
function impares(n,m){
  var impar =0;
 for(var i = n; i <= m; i++){ 
    if(i % 2 != 0){ 
     impar+= i; 
    } 
  }
 return impar;
}
console.log(impares(1,5));

//Ejercicio 8:
function palabraLarga2(cadena) {
  cadena=['jirafa','leon','gato','murcielago','rata'];
  var largo= 0;
 for(var i =0; i <cadena.length; i++) {
    if(cadena[largo].length<cadena[i].length)
      largo=i;
   }
   document.writeln(" * La palabra más larga es: " +cadena[largo])
  }
 palabraLarga2();

 //Ejercicio 9:
 function invertir(cadena) {
  cadena = prompt("Ingrese palabra a invertir");
  var x = cadena.length; 
  var str = "";
 
  while (x>=0) {
    str = str + cadena.charAt(x);
    x--;
  }
   document.writeln("La palabra al reves es: "+str);
}
invertir();

//Ejercicio 10:
function figura(n){
	
}







