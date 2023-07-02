// Datos precargados. 
let usuarioPrueba = new Usuario("usuarioBot", "7/21/2000", 180)
usuarioPrueba.pesoLoggeado = [
    [(new Date("6/24/23")).toLocaleDateString(), 80, 24.69],
    [(new Date("7/21/15")).toLocaleDateString(), 80, 24.69],
    [(new Date("8/21/15")).toLocaleDateString(), 85, 26.23],
    [(new Date("9/21/15")).toLocaleDateString(), 80, 24.69],
    [(new Date("10/21/15")).toLocaleDateString(), 82, 25.31],
    [(new Date("11/21/15")).toLocaleDateString(), 78, 24.07],
    [(new Date("12/21/15")).toLocaleDateString(), 80, 24.69],
    [(new Date("1/21/16")).toLocaleDateString(), 65, 20.06],
    [(new Date("7/21/16")).toLocaleDateString(), 69, 21.30],
    [(new Date("1/21/17")).toLocaleDateString(), 75, 23.15],
    [(new Date("7/21/17")).toLocaleDateString(), 70, 21.60],
    [(new Date("8/21/17")).toLocaleDateString(), 70, 21.60],
    [(new Date("10/21/17")).toLocaleDateString(), 71, 21.91],
    [(new Date("1/21/18")).toLocaleDateString(), 71, 21.91],
    [(new Date("4/21/18")).toLocaleDateString(), 70, 21.60],
    [(new Date("5/21/18")).toLocaleDateString(), 78, 24.07],
    [(new Date("6/21/18")).toLocaleDateString(), 76, 23.46],
    [(new Date("8/21/18")).toLocaleDateString(), 78, 24.07],
    [(new Date("1/21/19")).toLocaleDateString(), 73, 22.53],
    [(new Date("3/21/19")).toLocaleDateString(), 74, 22.84],
    [(new Date("9/21/19")).toLocaleDateString(), 77, 23.77],
    [(new Date("7/21/20")).toLocaleDateString(), 74, 22.84],
    [(new Date("7/21/21")).toLocaleDateString(), 70, 21.60],
    [(new Date("2/21/22")).toLocaleDateString(), 71, 21.91],
    [(new Date("9/21/22")).toLocaleDateString(), 72, 22.22],
    [(new Date("10/21/22")).toLocaleDateString(), 70, 21.60],
    [(new Date("2/21/23")).toLocaleDateString(), 71, 21.91],
    [(new Date("6/21/23")).toLocaleDateString(), 70, 21.60],
]
//Iniciar "usuarios" array en el localStorage
//Declarar un array vacio "usuarios" global
let usuarios = []
if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}else{
    usuarios.push(usuarioPrueba)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

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
