// Datos del usuario 
class Usuario{
    constructor(persona, edad, altura, peso){
        this.persona = persona,
        this.edad = edad,
        this.altura = altura,
        this.peso = peso
    }
    mostrarInfo(){
        console.log(`El usuario se llama ${this.persona} su edad es ${this.edad},
         su altura es ${this.altura} y se peso es ${this.peso}`
        )
    }
}
// funciones para calcular BMI dependiendo de las unidades
function bmiKg (peso, altura){
    return (peso / Math.pow(altura, 2))
}

function bmiLbs (peso, altura){
    return (703 * (peso / Math.pow(altura, 2)))
}
function validarNum(dato){
    while (isNaN(dato)){
        dato = parseInt(prompt(`ATENCION el dato ingresado no es un numero, ingrese un valor numerico`))
    }
    return dato   
}
// Saludo inicial
alert("Esto es una calculadora de Indice de masa corporal (BMI)")

// Prompt para definir unidades a usar

let unidad = parseInt(prompt("Que unidad quiere usar? Seleccione una opcion\n 1) unidades metricas (kg y cm)\n 2) unidades imperiales (lbs y pulgadas)\n\n 0) salir de la calculadora BMI"))
let loop = false
// Para el tutor: quise que el codigo se repitiera si el usuario ingresaba un numero que no era 0,1,2 
// mi codigo era: "while (isNaN(unidad) && (unidad>2));" - pero no funcionaba correctamente. no pude encontrar el error, para poder hacerlo para la entrega defini una variable "loop" para que funcione

do {
    if (unidad == 1) {
        alert(`complete los siguientes datos en unidades metricas`)
        loop = true
    } else if (unidad == 2) {
        alert(`complete los siguientes datos en unidades imperiales`)
        loop = true
    } else if (unidad == 0) {
        alert(`Gracias por usar la calculadora BMI, nos vemos!`)
        loop = true
    } else {
        unidad = prompt("La opcion seleccionada no es valida\n 1) unidades metricas (kg y cm)\n 2) unidades imperiales (lbs y pulgadas)\n\n 0) salir de la calculadora BMI")
    }
} while (loop != true);

console.log(`se selecciono la unidad ${unidad}, 0)Salir; 1)KG y Cm; 2)Lbs y pulgadas`)

if ( unidad !=0) {
    // Datos del usuario que seran almacenados con la class Usuario
    let v1 = prompt("Nombre del usuario: ")
    let v2 = parseInt(prompt("cual es la edad del usuario?: "))
    v2 = validarNum(v2)
    let v3 = parseInt(prompt("cual es la altura(cm) del usuario?: "))
    v3 = validarNum(v3)
    let v4 = parseInt(prompt("cual es el peso(Kg) del usuario?: "))
    v4 = validarNum(v4)


    let usuario1 = new Usuario (v1, v2, v3, v4)

    console.log(usuario1.mostrarInfo())

    alert(`El usuario es ${usuario1.persona}, su edad es ${usuario1.edad}, pesa ${usuario1.peso} y mide ${usuario1.altura} `)

    // Calcular BMI dependiendo de la unidad seleccionada
    let bmi = 0

    if (unidad == 1) {
        usuario1.altura = usuario1.altura/100
        bmi = bmiKg(usuario1.peso, usuario1.altura)
    } else if (unidad == 2) {
        bmi = bmiLbs(usuario1.peso, usuario1.altura)
    }


    // Analisis del BMI, Raw index
    bmi = bmi.toFixed(2)
    console.log(`el BMI del usario es: ${bmi}`)

    if (bmi > 39.9) {
        alert(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona extremadamente obeso`)
        console.log(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona extremadamente obeso`)    
    
    } else if (bmi > 29.9) {
        alert(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona con obesidad`)
        console.log(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona con obesidad`)    
    
    } else if (bmi > 24.9) {
        alert(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona con sobrepeso`)    
        console.log(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona con sobrepeso`)    

    } else if (bmi > 18.5){
        alert(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona de peso sano`)    
        console.log(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona de peso sano`)    

    } else {
        alert(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona flaca, por debajo de un peso sano`)    
        console.log(`el usuario ${usuario1.persona} tiene un bmi de ${bmi}, lo cual indica que es una persona flaca, por debajo de un peso sano`)    
           
    }

    // Analisis del BMI 2, Edad
    
    if (bmi > 29.9 && usuario1.edad > 40) {
        alert(`el usuario ${usuario1.persona} tiene un BMI:${bmi} y se encuentra en alto riesgo dado su edad, porfavor consulte un medico`)    
        console.log(`el usuario ${usuario1.persona} tiene un BMI:${bmi} y se encuentra en alto riesgo dado su edad, porfavor consulte un medico`)    

    } else {
        alert(`dado los parametros ingresados por el usuario ${usuario1.persona} el mismo no se encuentra en riesgo, recuerde tener habitos sanos y una dieta balanceada para seguir asi`)    
        console.log(`dado los parametros ingresados por el usuario ${usuario1.persona} el mismo no se encuentra en riesgo, recuerde tener habitos sanos y una dieta balanceada para seguir asi`)    

    }
    
    alert(`Gracias ${usuario1.persona} por usar la calculadora BMI, vuelva prontoS`)
} 


