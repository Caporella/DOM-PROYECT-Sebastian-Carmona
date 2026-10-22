function calcular(){
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let cifra1 = parseFloat(nota1);
    let cifra2 = parseFloat(nota2);
    let cifra3 = parseFloat(nota3);
    let promedio = (cifra1+cifra2+cifra3)/3
    if(cifra1 >= 0 && cifra1 <=5 && cifra2 >= 0 && cifra2 <=5 && cifra3 >= 0 && cifra3 <=5){
        document.getElementById("promedio").value = `${promedio.toFixed(2)}`
    }
    else{
        document.getElementById("promedio").value = `Valor Invalido`
    }
}