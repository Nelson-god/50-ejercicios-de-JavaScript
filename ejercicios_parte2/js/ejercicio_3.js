a = parseInt(prompt("Ingrese la hora 0-24: "))
if(a >= 1 && a <= 11){
    alert("El horario es AM")
}else if(a >= 12 && a <= 24){
    alert("El horario es PM")
}