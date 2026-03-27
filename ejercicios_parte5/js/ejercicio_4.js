a = parseFloat(prompt("¿Cuál es tu sueldo?"))
if (a <= 500) {
    alert("Se te aplicó un bono. Nuevo sueldo: " + (a + 50))
} else {
    alert("Sueldo normal: " + a)
}