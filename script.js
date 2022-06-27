let numero = parseFloat(prompt(" ingrese una nota, para saber el promedio ingrese -1"));
total=0;
suma= 0;
acumulador = 0;
while(numero !=-1){
    suma = suma + numero;
    acumulador = acumulador + 1;
    total = suma / acumulador;
    numero = parseFloat(prompt(" ingrese una nota, para saber el promedio ingrese -1"));
}

console.log("el promedio es "+ total);