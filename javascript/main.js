//Declarar un array vacio "usuarios" global
let usuarios = []

//Funcion async para hacer fetch al JSON con datos de los usuario precargado
let cargarPesosAPI = async() =>{
    const res = await fetch("weightAPI.json")
    usuarios = await res.json()
    console.log(`los usuarios fueron cargados`)
    console.log(usuarios)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

//Iniciar "usuarios" array en el localStorage
if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}else{
    cargarPesosAPI()
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

// Ingresar datos de calorias para un usuario del sistema
let buttonAñadirCalorias = document.getElementById("buttonAñadirCalories") 
buttonAñadirCalorias.addEventListener("click", agregarCalories)

// Consultar pesos de un usuario en el sistema y grafico en funcion del tiempo
let buttonConsultarPeso = document.getElementById("buttonConsultarPeso")
buttonConsultarPeso.addEventListener("click", usuarioPesosLoggeados)

// funciones para calcular BMI
let buttonCalcularBmi = document.getElementById("buttonCalcularBmi")
buttonCalcularBmi.addEventListener("click", informacionBmi)

// MediaQuery manipulations --adaptive response
function openNav() {
    document.getElementById("sideMenu").classList.add("sideMenuOn"),
    document.body.addEventListener("click", closeNav)
  }
function closeNav() {
    document.getElementById("sideMenu").classList.remove("sideMenuOn");
}
