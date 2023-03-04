const dinero = parseInt(prompt("¿Cuanto dinero quieres invertir?"));
const tiempo = parseInt(prompt("Ingresar cantidad de meses a invertir (recuerde que el simulador solo calcula de 0 a 3 años):"));
const banco = parseInt(prompt("Ingresar banco (ingrese el numero que corresponda)\n 1 Itau \n 2 Banelco \n 3 Galicia"));

// 1 año 
if ((tiempo <= 12 && tiempo > 0) && banco == 1) {
    alert("El interés anual es de 48%");
    let interes12 = dinero + (((dinero/100) * 4)*tiempo);
    alert("Usted retirara " + interes12 + " pesos") }

else if ((tiempo <= 12 && tiempo > 0) && banco == 2) {
    alert("El interés anual es de 72%");
    let interes12 = dinero + (((dinero/100) * 6)*tiempo);
    alert("Usted retirara " + interes12 + " pesos") }
        
else if ((tiempo <= 12 && tiempo > 0) && banco == 3) {
    alert("El interés anual es de 96%");
    let interes12 = dinero + (((dinero/100) * 8)*tiempo);
    alert("Usted retirara " + interes12 + " pesos") }

// 2 años
else if((tiempo <= 24 && tiempo > 12) && banco == 1){
    alert("El interés bi-anual es de 144%");
    let interes24 = dinero + (((dinero/100) * 6)*tiempo);
    alert("Usted retirara " + interes24 + " pesos")
}
else if((tiempo <= 24 && tiempo > 12) && banco == 2){
    alert("El interés bi-anual es de 192%");
    let interes24 = dinero + (((dinero/100) * 8)*tiempo);
    alert("Usted retirara " + interes24 + " pesos")
}
else if((tiempo <= 24 && tiempo > 12) && banco == 3){
    alert("El interés bi-anual es de 240%");
    let interes24 = dinero + (((dinero/100) * 10)*tiempo);
    alert("Usted retirara " + interes24 + " pesos")
}   

//3 años
else if((tiempo <= 36 && tiempo > 24 && banco == 1)){
    alert("El interés anual es de 288%");
    let interes36 = dinero + (((dinero/100) * 8)*tiempo);
    alert("Usted retirara " + interes36 + " pesos")
}
else if((tiempo <= 36 && tiempo > 24 && banco == 2)){
    alert("El interés anual es de 340%");
    let interes36 = dinero + (((dinero/100) * 10)*tiempo);
    alert("Usted retirara " + interes36 + " pesos")
}
else if((tiempo <= 36 && tiempo > 24 && banco == 3)){
    alert("El interés anual es de 432%");
    let interes36 = dinero + (((dinero/100) * 12)*tiempo);
    alert("Usted retirara " + interes36 + " pesos")
}
    
else if(tiempo < 1){
    alert('La cantidad de meses indicada es menor a la mínima permitida.')
} else if(tiempo > 36){
    alert('La cantidad de meses indicada es mayor a la náxima permitida.')
}