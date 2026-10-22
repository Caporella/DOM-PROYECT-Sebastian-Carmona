function sumar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let cifra1 = parseFloat(numero1);
    let cifra2 = parseFloat(numero2);
    document.getElementById("resultado").value = `${cifra1 + cifra2}`;
};
function restar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let cifra1 = parseFloat(numero1);
    let cifra2 = parseFloat(numero2);
    document.getElementById("resultado").value = `${cifra1 - cifra2}`;
};
function multiplicar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let cifra1 = parseFloat(numero1);
    let cifra2 = parseFloat(numero2);
    document.getElementById("resultado").value = `${cifra1 * cifra2}`;
};
function dividir(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1 !=0 & numero2 !=0){
        let cifra1 = parseFloat(numero1);
        let cifra2 = parseFloat(numero2);
        document.getElementById("resultado").value = `${cifra1 / cifra2}`;
    }
    else{
        document.getElementById("resultado").value = `No se puede dividir por cero`;
    }
};