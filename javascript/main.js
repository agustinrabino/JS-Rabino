// Usuarios y constructor usuario
function validarDato(dato){
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

let buttonAgregarUsuario = document.getElementById("buttonAgregarUsuario")
buttonAgregarUsuario.addEventListener("click", agregarUsuario)
function agregarUsuario() {
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``

    let formulario = document.createElement("form")
    formulario.setAttribute("id","formulario")
    formulario.setAttribute("class","form")
    formulario.innerHTML = `
        <div class="">
            <label for="nombreUsuario" class="form-label">Nombre</label>
            <input type="text" class="form-control nombre" id="nombreUsuario" required>
        </div>
        <div class="">
            <label for="edadUsuario" class="form-label">Edad</label>
            <input type="number" class="form-control" id="edadUsuario" required>
        </div>
        <div class="">
            <label for="alturaUsuario" class="form-label">Altura (cm)</label>
            <input type="number" class="form-control" id="alturaUsuario" required>
        </div>
        <button type="submit" class="btn btn-primary submitDatos" id="submitDatos" ><svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></button>
        `
    
    let formularioReturn = document.getElementById("formularioReturn")
    formularioReturn.innerHTML = ``
    formularioReturn.append(formulario)
    formulario.addEventListener("submit", nuevoUsuario)

    function nuevoUsuario() {
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class","infoReturn")

        let nombreIngresado = document.getElementById("nombreUsuario").value;
        let edadIngresada = document.getElementById("edadUsuario").value;
        let alturaIngresada = document.getElementById("alturaUsuario").value;
        
        let usuarioNuevo = new Usuario (nombreIngresado, edadIngresada, alturaIngresada)
    
        let consoleLog1 = document.createElement("p")
        consoleLog1.innerHTML = `El nuevo usuario ingresado al sistema se llama <strong>${nombreIngresado}</strong> su edad es <strong>${edadIngresada}</strong> y su altura <strong>${alturaIngresada} cm</strong>`
        contenedor.append(consoleLog1)
        usuarios.push(usuarioNuevo)

        calcReturn.append(contenedor)
        formularioReturn.removeChild(formulario)
    }
} //Funcion para agregar un nuevo usuario mediante propmts y constructor Usuario. Muestra datos y hace push al array "usuarios"

let buttonVerUsuarios = document.getElementById("buttonVerUsuarios")
buttonVerUsuarios.addEventListener("click", verUsuarios)
function verUsuarios(){
    let formularioReturn = document.getElementById("formularioReturn")
    formularioReturn.innerHTML = ``

    let contenedor = document.createElement("div")
    contenedor.setAttribute("class","infoReturn")
    
    let consoleLog1 = document.createElement("p")
    consoleLog1.innerHTML = `Los usuarios en el sistema son: `
    contenedor.append(consoleLog1)

    for(let usuario of usuarios){
        let consoleLogTemp = document.createElement("p")
        consoleLogTemp.innerHTML = `Nombre: ${usuario.persona}, Edad: ${usuario.edad}, Altura: ${usuario.altura} y tiene : ${usuario.pesoLoggeado.length} peso/s loggeado/s en sistema`
        contenedor.append(consoleLogTemp)
    }
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``
    calcReturn.append(contenedor)
} //Funcion para ver usuarios en el array principal, for-of loop

// Ingresar datos de peso y altura para el usuario
let buttonAñadirPeso = document.getElementById("buttonAñadirPeso")
buttonAñadirPeso.addEventListener("click", formularioLogPeso)
function formularioLogPeso() {
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``

    let formulario = document.createElement("form")
    formulario.setAttribute("id","formulario")
    formulario.setAttribute("class","form")
    formulario.innerHTML = `
        <div class="">
            <label for="nombreUsuario" class="form-label">Usuario</label>
            <input type="text" class="form-control nombre" id="nombreUsuario" required>
        </div>
        <div class="">
            <label for="pesoUsuario" class="form-label">Peso</label>
            <input type="number" class="form-control" id="pesoUsuario" required>
        </div>
        <div class="">
            <label for="fecha" class="form-label">Fecha:</label>
            <input type="date" id="fecha" class="fecha" name="fecha" value="2015-07-22" required> 
        </div>
        <button type="submit" class="btn btn-primary submitDatos" id="submitDatos" ><svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></button>
        `
    
    let formularioReturn = document.getElementById("formularioReturn")
    formularioReturn.innerHTML = ``
    formularioReturn.append(formulario)
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        logPeso()
    })
    
    function logPeso() {
        let nombreIngresado = document.getElementById("nombreUsuario").value;
        let pesoIngresado = document.getElementById("pesoUsuario").value;
        let diaIngresado = new Date(document.getElementById("fecha").value)
        diaIngresado = diaIngresado.toLocaleDateString()
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
        let consoleLog1 = document.createElement("p")
                                        
        let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
        if (tempUsuario === undefined) {
            consoleLog1.innerHTML = `El usuario ingresado no se encuentra en la base de datos`
            contenedor.append(consoleLog1)

        } else if (tempUsuario !== undefined) {            
            let pesoDia = [diaIngresado, pesoIngresado]
            tempUsuario.pesoLoggeado.push(pesoDia)

            consoleLog1.innerHTML = `El usuario ${nombreIngresado} ingreso su peso: ${pesoIngresado} Kg para el dia: ${diaIngresado}`
            contenedor.append(consoleLog1)
        }              
        calcReturn.append(contenedor)
    }
} //Funcion para Loggear peso en un objeto del array usuarios. La funcion crea un objeto con Fecha: y Peso: (mediante prompts y constructor Date) que se hace push al array pesoLoggeado del usuario seleccionado (usuario se encuentra mediante funcion find)

// Consultar pesos
let buttonConsultarPeso = document.getElementById("buttonConsultarPeso")
buttonConsultarPeso.addEventListener("click", formularioVerPesos)
function formularioVerPesos(){
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``
    
    let formulario = document.createElement("form")
    formulario.setAttribute("id","formulario")
    formulario.setAttribute("class","form")
    formulario.innerHTML = `
        <div class="">
            <label for="nombreUsuario" class="form-label">Nombre</label>
            <input type="text" class="form-control nombre" id="nombreUsuario" required>
        </div>
        <button type="submit" class="btn btn-primary submitDatos" id="submitDatos" ><svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></button>
        `
    let formularioReturn = document.getElementById("formularioReturn")
    formularioReturn.innerHTML = ``
    formularioReturn.append(formulario)
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        verPesos()
    })

    function verPesos(){ 
        let nombreIngresado = document.getElementById("nombreUsuario").value;
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
        contenedor.setAttribute("id", "infoReturn")
        let consoleLog1 = document.createElement("p")

        let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
        if (tempUsuario === undefined) {
            consoleLog1.innerHTML = `El usuario ingresado no se encuentra en la base de datos`
            contenedor.append(consoleLog1)
            calcReturn.append(contenedor)     

        } else if (tempUsuario !== undefined) {            
            let tempPesos = tempUsuario.pesoLoggeado
            tempPesos.sort((a,b) => {
                return new Date(b[0]) - new Date (a[0])})
            consoleLog1.innerHTML = `Los pesos del usuario son: `
            contenedor.append(consoleLog1)
            for(let peso of tempPesos){
                let consoleLogTemp = document.createElement("p")
                consoleLogTemp.innerHTML = `fecha: ${peso[0]}, peso: ${peso[1]} Kg`
                contenedor.append(consoleLogTemp)
            }
            calcReturn.append(contenedor)     

            anychart.onDocumentReady(function () {
                    anychart.theme('darkEarth');

                    let grafico = document.createElement("div")
                    grafico.setAttribute("class", "imageReturn")
                    grafico.setAttribute("id", "imageReturn")
                    calcReturn.append(grafico)     

                    let dataSet = anychart.data.set(tempPesos);
                    let firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
                
                    let chart = anychart.line();
                    let dateTimeScale = anychart.scales.dateTime();
                    chart.xScale(dateTimeScale)
                    chart.animation(true);
                    chart.padding([10, 20, 5, 20]);
                    chart.crosshair().enabled(true).yLabel(false).yStroke(null);
                    chart.tooltip().positionMode('point');
                    chart.title(
                      `Grafico del peso del usuario ${nombreIngresado} en funcion del tiempo`
                      );
                
                    chart.yAxis().title('Peso (Kg)');
                    chart.xAxis().labels().padding(5);
                
                    let firstSeries = chart.line(firstSeriesData);
                    firstSeries.hovered().markers().enabled(true).type('circle').size(4);
                    firstSeries
                        .tooltip()
                        .position('right')
                        .anchor('left-center')
                        .offsetX(5)
                        .offsetY(5);
                
                    chart.container('imageReturn');
                    chart.draw();
            });
        }
    }
} //Funcion para ver los pesos de un usuario. Se usa una funcion find para encontrar el usuario seleccionado. Dentro de esta funcion se crea una variable que es el array pesoLoggeado del usuario seleccionado, se usa la funcion Sort para ordenar de manera cronologica y se usa un for-of loop para mostrar en consola (no destructivo dado que no usamos el usuario original sino una variable llamada tempPeso)

// funciones para calcular BMI
let buttonCalcularBmi = document.getElementById("buttonCalcularBmi")
buttonCalcularBmi.addEventListener("click", formularioCalcularBmi)
function formularioCalcularBmi(){
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``

    let formulario = document.createElement("form")
    formulario.setAttribute("id","formulario")
    formulario.setAttribute("class","form")
    formulario.innerHTML = `
        <div class="">
            <label for="edadUsuario" class="form-label">Edad</label>
            <input type="number" class="form-control" id="edadUsuario" required>
        </div>
        <div class="">
            <label for="alturaUsuario" class="form-label">Altura (cm)</label>
            <input type="number" class="form-control" id="alturaUsuario" required>
        </div>
        <div class="">
            <label for="pesoUsuario" class="form-label">Peso (Kg)</label>
            <input type="number" class="form-control" id="pesoUsuario" required>
        </div>
        <button type="submit" class="btn btn-primary submitDatos" id="submitDatos" ><svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></button>
        `
    let formularioReturn = document.getElementById("formularioReturn")
    formularioReturn.innerHTML = ``
    formularioReturn.append(formulario)
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        calcularBmi()
    })

    function calcularBmi(){
        let edadIngresada = document.getElementById("edadUsuario").value;
        let alturaIngresada = document.getElementById("alturaUsuario").value;
        alturaIngresada = alturaIngresada/100;
        let pesoIngresado = document.getElementById("pesoUsuario").value;

        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
    
        let consoleLog1 = document.createElement("p")
        consoleLog1.innerHTML = `Los datos ingresados por el usuario son: <strong>edad</strong> ${edadIngresada} años, <strong>pesa</strong> ${pesoIngresado} Kg y <strong>mide</strong> ${alturaIngresada} metros`
        contenedor.append(consoleLog1)

        let bmi = (pesoIngresado / Math.pow(alturaIngresada, 2))

        // Analisis del BMI, Raw index
        bmi = bmi.toFixed(2)

        let consoleLog2 = document.createElement("p")
        consoleLog2.innerHTML = `el <strong>BMI</strong> del usario es: ${bmi}`
        contenedor.append(consoleLog2)

        let consoleLog3 = document.createElement("p")
        let imageReturn = document.createElement("img")

        if (bmi > 39.9) {
            consoleLog3.innerHTML = `esto indica que es una persona <strong>extremadamente obesa</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-40.gif"   
        
        } else if (bmi > 29.9) {
            consoleLog3.innerHTML = `esto indica que es una persona <strong>obesa</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-35.gif"   

        } else if (bmi > 24.9) {
            consoleLog3.innerHTML = `esto indica que es una persona con <strong>sobrepeso</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-30.gif"   

        } else if (bmi > 18.5){
            consoleLog3.innerHTML = `esto indica que es una persona de <strong>peso sano</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-25.gif"   

        } else {
            consoleLog3.innerHTML = `esto indica que es una persona flaca, por <strong>debajo de un peso sano</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-18.gif"      
        }

        // Analisis del BMI 2, Edad
        let consoleLog4 = document.createElement("p")
        if (bmi > 29.9 & edadIngresada > 40) {
            consoleLog4.innerHTML = `El usuario tiene un BMI:${bmi} y se encuentra en alto riesgo de salud dado su edad avanzada (${edadIngresada}), porfavor consulte un medico`
            contenedor.append(consoleLog4)   
        } else if (bmi > 29.9 & edadIngresada > 40) {
            consoleLog4.innerHTML = `El usuario no tiene un BMI saludable (${bmi}), dado que es una persona de edad joven (${edadIngresada}) le recomendamos que vea un medico nutricionista y monitoree su BMI para prevenir mayores problemas`
            contenedor.append(consoleLog4)   
        } else {
            consoleLog4.innerHTML = `Segun la edad ingresada por el usuario, este posee buena salud, recuerde tener habitos sanos y una dieta balanceada para seguir asi`
            contenedor.append(consoleLog4)  
        }
        calcReturn.append(contenedor)
        calcReturn.append(imageReturn)
    }
} //Funcion diseñada para calcular el BMI. Prompt pide los datos del usuario y devuelve un valor de BMI con un analisis segun valor del BMI y peso (If Else)


// Datos precargados
let usuarioPrueba = new Usuario("usuarioBot", 35, 180)
usuarioPrueba.pesoLoggeado = [
    [(new Date("6/24/23")).toLocaleDateString(), 170],
    [(new Date("7/21/15")).toLocaleDateString(), 80],
    [(new Date("8/21/15")).toLocaleDateString(), 85],
    [(new Date("9/21/15")).toLocaleDateString(), 80],
    [(new Date("10/21/15")).toLocaleDateString(), 82],
    [(new Date("11/21/15")).toLocaleDateString(), 78],
    [(new Date("12/21/15")).toLocaleDateString(), 80],
    [(new Date("1/21/16")).toLocaleDateString(), 65],
    [(new Date("7/21/16")).toLocaleDateString(), 69],
    [(new Date("1/21/17")).toLocaleDateString(), 75],
    [(new Date("7/21/17")).toLocaleDateString(), 70],
    [(new Date("8/21/17")).toLocaleDateString(), 70],
    [(new Date("10/21/17")).toLocaleDateString(), 71],
    [(new Date("1/21/18")).toLocaleDateString(), 71],
    [(new Date("4/21/18")).toLocaleDateString(), 70],
    [(new Date("5/21/18")).toLocaleDateString(), 78],
    [(new Date("6/21/18")).toLocaleDateString(), 76],
    [(new Date("8/21/18")).toLocaleDateString(), 78],
    [(new Date("1/21/19")).toLocaleDateString(), 73],
    [(new Date("3/21/19")).toLocaleDateString(), 74],
    [(new Date("9/21/19")).toLocaleDateString(), 77],
    [(new Date("7/21/20")).toLocaleDateString(), 74],
    [(new Date("7/21/21")).toLocaleDateString(), 70],
    [(new Date("2/21/22")).toLocaleDateString(), 71],
    [(new Date("9/21/22")).toLocaleDateString(), 72],
    [(new Date("10/21/22")).toLocaleDateString(), 70],
    [(new Date("2/21/23")).toLocaleDateString(), 71],
    [(new Date("6/21/23")).toLocaleDateString(), 70],
]
console.log(usuarioPrueba)
usuarios.push(usuarioPrueba)

