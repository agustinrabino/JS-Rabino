// Usuarios y constructor usuario
function validarNum(dato){
    while (isNaN(dato)){
        dato = parseInt(prompt(`ATENCION el dato ingresado no es un numero, ingrese un valor numerico`))
    }
    return dato   
} //Funcion para validar que el input sea un numero
const usuarios = []
class Usuario{
    constructor(persona, edad, altura){
        this.persona = persona,
        this.edad = edad,
        this.altura = altura
        this.pesoLoggeado = []
    }

    mostrarInfo(){
        console.log(`El nuevo usuario se llama ${this.persona} su edad es ${this.edad} y su altura ${this.altura}`
        )
    }
} //Constructor usuario, guarda nombre, edad y altura
function agregarUsuario() {
    let nombreIngresado = prompt("Nombre del usuario: ")
    let edadIngresada = parseInt(prompt("cual es la edad del usuario?: "))
    edadIngresada = validarNum(edadIngresada)
    let alturaIngresada = parseInt(prompt("cual es la altura(cm) del usuario?: "))
    alturaIngresada = validarNum(alturaIngresada)

    let usuarioNuevo = new Usuario (nombreIngresado, edadIngresada, alturaIngresada)
    usuarioNuevo.mostrarInfo()
    usuarios.push(usuarioNuevo)
    console.log(usuarios)
} //Funcion para agregar un nuevo usuario mediante propmts y constructor Usuario. Muestra datos y hace push al array "usuarios"
function verUsuarios(array){
    console.log(`Los usuarios en el sistema son: `)
    for(let usuario of array){
       console.log(usuario.persona, usuario.edad, usuario.altura)
    }
} //Funcion para ver usuarios en el array principal, for-of loop

// Ingresar datos de peso y altura para el usuario
function logPeso() {
    let nombreIngresado = prompt("Nombre del usuario: ")
    let pesoIngresado = parseInt(prompt("cual es el peso del usuario?: "))
    pesoIngresado = validarNum(pesoIngresado)
    
    let hoy = new Date()
    hoy = hoy.toLocaleDateString()
    let diaIngresado = parseInt(prompt("El peso ingresado corresponde al dia de hoy?\n   1)SI\n   2)NO"))
       switch (diaIngresado) {
        case 1:
            
            break;
        case 2:
            hoy = new Date(prompt("Ingrese la fecha a la que corresponde el peso ingresado (ej. December 17, 2021)"))    
            hoy = hoy.toLocaleDateString()
            break;
        default:
            console.log(`La opcion seleccionada no es valida`)
            diaIngresado = validarNum(diaIngresado)
            break;
       }
            
    console.log(`la fecha ingresada por el usuario es ${hoy}`)
 
    let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
    console.log(tempUsuario)
        if (tempUsuario === undefined) {
            console.log(`El usuario ingresado no se encuentra en la base de datos`)
        } else if (tempUsuario !== undefined) {            
            let pesoDia = {fecha : hoy, peso : pesoIngresado}
            tempUsuario.pesoLoggeado.push(pesoDia)
            console.log(tempUsuario)
        }
    
} //Funcion para Loggear peso en un objeto del array usuarios. La funcion crea un objeto con Fecha: y Peso: (mediante prompts y constructor Date) que se hace push al array pesoLoggeado del usuario seleccionado (usuario se encuentra mediante funcion find)

// Consultar pesos
function verPesos(){ 
    let nombreIngresado = prompt("Nombre del usuario: ")
    let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
    if (tempUsuario === undefined) {
        console.log(`El usuario ingresado no se encuentra en la base de datos`)
    } else if (tempUsuario !== undefined) {            
        let tempPesos = tempUsuario.pesoLoggeado
        tempPesos.sort((a,b) => {
            return new Date(a.fecha) - new Date (b.fecha)})
        console.log(tempPesos)
        console.log(`Los pesos del usuario son: `)
        for(let peso of tempPesos){
           console.log(peso)
        }
    }
} //Funcion para ver los pesos de un usuario. Se usa una funcion find para encontrar el usuario seleccionado. Dentro de esta funcion se crea una variable que es el array pesoLoggeado del usuario seleccionado, se usa la funcion Sort para ordenar de manera cronologica y se usa un for-of loop para mostrar en consola (no destructivo dado que no usamos el usuario original sino una variable llamada tempPeso)

// funciones para calcular BMI dependiendo de las unidades
function bmiKg(){
    let edadIngresada = parseInt(prompt("cual es la edad del usuario?: "))
    edadIngresada = validarNum(edadIngresada)
    let alturaIngresada = parseInt(prompt("cual es la altura(cm) del usuario?: "))
    alturaIngresada = validarNum(alturaIngresada)
    alturaIngresada = alturaIngresada / 100
    let pesoIngresado = parseInt(prompt("cual es el peso(Kg) del usuario?: "))
    pesoIngresado = validarNum(pesoIngresado)

    console.log(`Los datos ingresados por el usuario son: edad ${edadIngresada} años, pesa ${pesoIngresado} Kg y mide ${alturaIngresada} cm`)
    let bmi = (pesoIngresado / Math.pow(alturaIngresada, 2))

    // Analisis del BMI, Raw index
    bmi = bmi.toFixed(2)
    console.log(`el BMI del usario es: ${bmi}`)

    if (bmi > 39.9) {
        console.log(`Su BMI es de ${bmi}, lo cual indica que es una persona extremadamente obeso`)    
    
    } else if (bmi > 29.9) {
        console.log(`Su BMI es de ${bmi}, lo cual indica que es una persona con obesidad`)    
    
    } else if (bmi > 24.9) {
        console.log(`Su BMI es de ${bmi}, lo cual indica que es una persona con sobrepeso`)    

    } else if (bmi > 18.5){
        console.log(`Su BMI es de ${bmi}, lo cual indica que es una persona de peso sano`)    

    } else {
        console.log(`Su BMI es de ${bmi}, lo cual indica que es una persona flaca, por debajo de un peso sano`)    
           
    }

    // Analisis del BMI 2, Edad
    
    if (bmi > 29.9 && edadIngresada > 40) {
        console.log(`El usuario tiene un BMI:${bmi} y se encuentra en alto riesgo dado su edad (${edadIngresada}), porfavor consulte un medico`)    

    } else {
        console.log(`Segun la edad ingresada por el usuario, este no se encuentra en riesgo de salud, recuerde tener habitos sanos y una dieta balanceada para seguir asi`)    

    }
} //Funcion diseñada para calcular el BMI. Prompt pide los datos del usuario y devuelve un valor de BMI con un analisis segun valor del BMI y peso (If Else)

// Saludo inicial
alert("Esto es un Fitness tracker y calculadora de Indice de masa corporal (BMI)")

// Menu inicial
function menu() {
    let salirMenu = true   
    do {
        let opcion = parseInt(prompt("Que opcion desea usar\n          1) Ingresar un usuario nuevo\n          2)Añadir nuevo peso\n          3)Consulte los pesos de un usuario\n          4)Calcule su Indice de masa corporal (BMI)\n          0)Salir del menu"))
        switch (opcion) {
            case 1:
                agregarUsuario()
                verUsuarios(usuarios)
                break;
            case 2:
                logPeso()
                break;
            case 3:
                verPesos(usuarios)
                break;
            case 4:
                bmiKg()
                break;
            case 0:
                console.log(`Gracias por usar el Fitness tracker y calculadora BMI, nos vemos!`)
                salirMenu = false
                break;
        
            default:
                console.log(`La opcion seleccionada no es valida`)
                break;
        }
    } while (salirMenu);
}

menu()

// DATOS PARA PRUEBA DE CODIGO
// let usuarioPrueba = new Usuario ("Agustin", 29, 172)

// let hoy = new Date()
// hoy = hoy.toLocaleDateString()
// let pesoDia = {fecha : hoy, peso : 70}
// usuarioPrueba.pesoLoggeado.push(pesoDia)
// let pesoDia2 = {fecha : hoy, peso : 90}
// usuarioPrueba.pesoLoggeado.push(pesoDia2)

// console.log(usuarioPrueba)

// let tempPesos = usuarioPrueba.pesoLoggeado 
// console.log(tempPesos)
// console.log(`Los pesos del usuario son: `)
// for(let peso of tempPesos){
//    console.log(peso)
// }