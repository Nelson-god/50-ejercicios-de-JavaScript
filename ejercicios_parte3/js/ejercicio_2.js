a = parseFloat(prompt("Ingrese su edad: "))
b = parseFloat(prompt("Usted tiene licencia? s/n"))
if(a >= 18){
    if(b == "s" || b == "S"){
        alert("Usted puede conducir")
    }else if(b == "n" || b == "N"){
        alert("Usted no puede conducir")
    }
}else if(a < 18){
    alert("Usted es menor de edad, no puede conducir")
}