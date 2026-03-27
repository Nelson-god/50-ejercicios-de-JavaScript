a = parseFloat(prompt("Género (M/F):"))
b = parseFloat(prompt("Edad:"))

if (a == "M") {
    if (b < 18) 
        alert("Bienvenido joven")
    else 
        alert("Bienvenido señor")
} else if (a == "F") {
    if (b < 18) 
        alert("Bienvenida joven")
    else 
        alert("Bienvenida señora")
}