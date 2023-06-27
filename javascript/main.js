// Ingresar nuevo usuario
let buttonAgregarUsuario = document.getElementById("buttonAgregarUsuario")
buttonAgregarUsuario.addEventListener("click", agregarUsuario)

// Ver usuarios en el sistema
let buttonVerUsuarios = document.getElementById("buttonVerUsuarios")
buttonVerUsuarios.addEventListener("click", verUsuarios)

// Ingresar datos de peso para un usuario del sistema
let buttonAñadirPeso = document.getElementById("buttonAñadirPeso")
buttonAñadirPeso.addEventListener("click", agregarPeso)

// Consultar pesos de un usuario en el sistema y grafico en funcion del tiempo
let buttonConsultarPeso = document.getElementById("buttonConsultarPeso")
buttonConsultarPeso.addEventListener("click", usuarioPesosLoggeados)

// funciones para calcular BMI
let buttonCalcularBmi = document.getElementById("buttonCalcularBmi")
buttonCalcularBmi.addEventListener("click", informacionBmi)
