const MaxMin=()=>{
let cuanto_veces=parseInt(prompt("Cuantos numero vas a ingresar"));
let array=[];

for (let i=1; cuanto_veces>=i;i++) {
let numero=parseInt(prompt("Numero a ingresar"));
array.push(numero);
}
alert(`
Maximo: ${Math.max.apply(null,array) }
Minimo: ${Math.min.apply(null,array) }
`);
};

// MaxMin();

const Area_Perimetro=()=>{
let pi=3.14159265359;
let radio=parseFloat(prompt(`cual es el area del la circuferensia`));
let longitud=parseFloat(prompt(`cual es la longitud del la circuferensia`));
let area=pi * (radio*2);
let Perimetro=longitud * pi * radio;
alert(`
Perímetro: ${Perimetro}
Area: ${area}
`);
}
// Area_Perimetro();

const strig=()=>{
    let String=prompt(`String`);

   if (String.toUpperCase(String)==String) {
    alert("Es Masyuscula.");
   }
   else if (String.toLowerCase(String)==String){
    alert("Es Minuscula.");
   }
   else{
    alert("Es Masyuscula y Minuscula.");
   }

}
// strig();

const Palíndromo=()=>{
    let str=prompt(`Palabra`);
    let palindrimo = str.toLowerCase().match(/[a-z]/gi).reverse();
    alert( palindrimo.join('') === palindrimo.reverse().join(''));
}
// Palíndromo();

while(true){
let que_quieres=prompt(`
A qui puedes elegor que ocion requieres solo pon el numero.

1: Calcular Max Min.
2: Area y el perímetro de una circunferencia.
3: Información sobre una cadena de texto.
4: Palíndromo.
5: Salir.
`);
if (que_quieres==1) {
    MaxMin();
}
else if (que_quieres==2) {
    Area_Perimetro();
}
else if (que_quieres==3) {
    strig();
}
else if (que_quieres==4) {
    Palíndromo();
}
else if (que_quieres==5) {
    alert(`As terminado secion. `);
    break;
}}