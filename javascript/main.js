const usuarios = []
class Usuario{
    constructor(persona, edad, altura){
        this.persona = persona,
        this.edad = edad,
        this.altura = altura
        this.pesoLoggeado = []
    }

    mostrarInfo(){
        console.log(`The new user is ${this.persona}, age: ${this.edad} and height: ${this.altura}`
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
            <label for="nombreUsuario" class="form-label">Name</label>
            <input type="text" class="form-control nombre" id="nombreUsuario" required>
        </div>
        <div class="">
            <label for="edadUsuario" class="form-label">Age</label>
            <input type="number" class="form-control" id="edadUsuario" required>
        </div>
        <div class="">
            <label for="alturaUsuario" class="form-label">Height (cm)</label>
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
        let consoleLog1 = document.createElement("p")

        let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())

        if (tempUsuario !== undefined) {
            consoleLog1.innerHTML = `This username is already in the system. Please choose another one`
            contenedor.append(consoleLog1)
        } else if (tempUsuario === undefined) {            
            let usuarioNuevo = new Usuario (nombreIngresado, edadIngresada, alturaIngresada)
            consoleLog1.innerHTML = `The new user logged into the system is <strong>${nombreIngresado}</strong>, his/her age is <strong>${edadIngresada}</strong>, and his/her height is <strong>${alturaIngresada} cm</strong>`
            usuarios.push(usuarioNuevo)
        }
        contenedor.append(consoleLog1)
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
    consoleLog1.innerHTML = `The users logged in the system are: `
    contenedor.append(consoleLog1)

    for(let usuario of usuarios){
        let consoleLogTemp = document.createElement("p")
        consoleLogTemp.innerHTML = `Name: <strong>${usuario.persona}</strong>, Age: <strong>${usuario.edad}</strong>, Height: <strong>${usuario.altura}</strong>, and has : <strong>${usuario.pesoLoggeado.length}</strong> logged weights in the system`
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
            <label for="nombreUsuario" class="form-label">User</label>
            <input type="text" class="form-control nombre" id="nombreUsuario" required>
        </div>
        <div class="">
            <label for="pesoUsuario" class="form-label">Weight (Kg)</label>
            <input type="number" class="form-control" id="pesoUsuario" required>
        </div>
        <div class="">
            <label for="fecha" class="form-label">Fecha:</label>
            <input type="date" id="fecha" class="fecha" name="Date" value="2015-07-22" required> 
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
        calcReturn.innerHTML = ``

        let nombreIngresado = document.getElementById("nombreUsuario").value;
        let pesoIngresado = document.getElementById("pesoUsuario").value;
        let diaIngresado = new Date(document.getElementById("fecha").value)
        diaIngresado = diaIngresado.toLocaleDateString()
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
        let consoleLog1 = document.createElement("p")
                                        
        let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
        if (tempUsuario === undefined) {
            consoleLog1.innerHTML = `The user was not found in the system`
            contenedor.append(consoleLog1)

        } else {  
            let diaUsuario = tempUsuario.pesoLoggeado.find((el) => el[0] == diaIngresado)
            if (diaUsuario === undefined) {
                let pesoDia = [diaIngresado, pesoIngresado]
                tempUsuario.pesoLoggeado.push(pesoDia)
                consoleLog1.innerHTML = `The user ${nombreIngresado} logged his weight: ${pesoIngresado} Kg for the date: ${diaIngresado}`
            } else {
                consoleLog1.innerHTML = `The user ${nombreIngresado} already logged a weight for this date`
            }
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
            <label for="nombreUsuario" class="form-label">Name</label>
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
        calcReturn.innerHTML = ``
        let nombreIngresado = document.getElementById("nombreUsuario").value;
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
        contenedor.setAttribute("id", "infoReturn")
        let consoleLog1 = document.createElement("p")

        let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
        if (tempUsuario === undefined) {
            consoleLog1.innerHTML = `The user <strong>${nombreIngresado}</strong>, was not found in the system`
            contenedor.append(consoleLog1)
            calcReturn.append(contenedor)     

        } else if (tempUsuario !== undefined) {            
            let tempPesos = tempUsuario.pesoLoggeado
            tempPesos.sort((a,b) => {
                return new Date(b[0]) - new Date (a[0])})
            consoleLog1.innerHTML = `The weights for <strong>${nombreIngresado}</strong> are: `
            contenedor.append(consoleLog1)
            for(let peso of tempPesos){
                let consoleLogTemp = document.createElement("p")
                consoleLogTemp.innerHTML = `Date: ${peso[0]}, Weight: ${peso[1]} Kg`
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
                      `Graph showing weights by date for user ${nombreIngresado}`
                      );
                
                    chart.yAxis().title('Weight (Kg)');
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
            <label for="edadUsuario" class="form-label">Age</label>
            <input type="number" class="form-control" id="edadUsuario" required>
        </div>
        <div class="">
            <label for="alturaUsuario" class="form-label">Height (cm)</label>
            <input type="number" class="form-control" id="alturaUsuario" required>
        </div>
        <div class="">
            <label for="pesoUsuario" class="form-label">Weight (Kg)</label>
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
        calcReturn.innerHTML = ``
        let edadIngresada = document.getElementById("edadUsuario").value;
        let alturaIngresada = document.getElementById("alturaUsuario").value;
        alturaIngresada = alturaIngresada/100;
        let pesoIngresado = document.getElementById("pesoUsuario").value;

        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "infoReturn")
    
        let consoleLog1 = document.createElement("p")
        consoleLog1.innerHTML = `The user's information is: <strong>Age</strong> ${edadIngresada} years, <strong>weight</strong> ${pesoIngresado} Kg, and <strong>height</strong> ${alturaIngresada} meters`
        contenedor.append(consoleLog1)

        let bmi = (pesoIngresado / Math.pow(alturaIngresada, 2))

        // Analisis del BMI, Raw index
        bmi = bmi.toFixed(2)

        let consoleLog2 = document.createElement("p")
        consoleLog2.innerHTML = `The user's <strong>BMI</strong> is: ${bmi}`
        contenedor.append(consoleLog2)

        let consoleLog3 = document.createElement("p")
        let imageReturn = document.createElement("img")

        if (bmi > 39.9) {
            consoleLog3.innerHTML = `This indicates the user is a person with <strong>extreme obesity</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-40.gif"   
        
        } else if (bmi > 29.9) {
            consoleLog3.innerHTML = `This indicates the user is an <strong>obese</strong> person`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-35.gif"   

        } else if (bmi > 24.9) {
            consoleLog3.innerHTML = `This indicates the user is a person with <strong>overweight</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-30.gif"   

        } else if (bmi > 18.5){
            consoleLog3.innerHTML = `This indicates the user is a person with <strong>healthy weight</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-25.gif"   

        } else {
            consoleLog3.innerHTML = `This indicates the user is a skinny person, <strong>below a healthy weight</strong>`
            contenedor.append(consoleLog3)
            imageReturn.src = "./multimedia/bmi-18.gif"      
        }

        // Analisis del BMI 2, Edad
        let consoleLog4 = document.createElement("p")
        if (bmi > 29.9 & edadIngresada > 40) {
            consoleLog4.innerHTML = `Given the information provided (BMI: ${bmi} and age: ${edadIngresada} years), the user has a high health risk, please talk to a clinician/nutritionist`
            contenedor.append(consoleLog4)   
        } else if (bmi > 29.9 & edadIngresada < 40) {
            consoleLog4.innerHTML = `The user doesn't have a healthy BMI (${bmi}). However, the user is a young person (${edadIngresada} years) so he/she is not in an immediate risk. We recommend to seek a nutriosionits to change his/her dietary habits and monitor the BMI daily to prevent any health problems`
            contenedor.append(consoleLog4)
        } else if (bmi < 18.5) {
            consoleLog4.innerHTML = `The user's BMI (${bmi}) is below the recommended value. While there is no immediate risk, we recommend to seek a nutriosionits to change his/her dietary habits and monitor the BMI daily to prevent any health problems`
            contenedor.append(consoleLog4)      
        } else {
            consoleLog4.innerHTML = `The user has a healthy BMI (${bmi}), keep on with the good habits!`
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

