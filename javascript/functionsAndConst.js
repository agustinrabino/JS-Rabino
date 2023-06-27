//Variable año para definir edad del usuario
let fechaHoy = new Date()
console.log(fechaHoy)
fechaHoy = fechaHoy.getFullYear()

//Declarar un array vacio "usuarios" global
const usuarios = []

//Constructor Usuario: guarda nombre, fecha de nacimiento, edad y altura de un nuevo usuario. Ademas crea un array vacio "pesoLoggeado" en el cual el usuario puede ingresar sus pesos.
class Usuario{
    constructor(persona, nacimiento, edad, altura){
        this.persona = persona,
        this.nacimiento = nacimiento,
        this.edad = edad,
        this.altura = parseInt(altura)
        this.pesoLoggeado = []
    }

    mostrarInfo(){
        console.log(`The new user is ${this.persona}, age: ${this.edad} and height: ${this.altura}`
        )
    }
} 

//TODAS LAS ACCIONES(BOTONES) SON FUNCIONES COMPUESTAS. EL EVENT "CLICK" DEL MENU VA A DESPLEGAR UN FORMULARIO DINAMICO QUE A SU VEZ TIENE UN EVENT "SUBMIT" INTERNO. EL EVENT SUBMIT INICIA UN DIV DE RETORNO CON LOS DATOS CALCULADOS/INGRESADOS SEGUN CORRESPONDA// 

//La funcion nuevoUsuario() valida que el nombre ingresado no este en uso. Si el nombre es valido usa el Contructor "Usuario" para agregar los datos al array "usuarios" y devuelve una etiqueta "p" con los datos del nuevo usuario. 
function nuevoUsuario() {
    let contenedor = document.createElement("div")
    contenedor.setAttribute("class","infoReturn")

    let nombreIngresado = document.getElementById("nombreUsuario").value;
    let dobIngresada = new Date(document.getElementById("edadUsuario").value)
    let dobYearIngresada = dobIngresada.getFullYear()
    dobIngresada = dobIngresada.toLocaleDateString()
    let edadIngresada = fechaHoy - dobYearIngresada
    let alturaIngresada = document.getElementById("alturaUsuario").value;
    let consoleLog1 = document.createElement("p")

    let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())

    if (tempUsuario !== undefined) {
        consoleLog1.innerHTML = `This username is already in the system. Please choose another one`
        contenedor.append(consoleLog1)
    } else if (tempUsuario === undefined) {            
        let usuarioNuevo = new Usuario (nombreIngresado, dobIngresada,edadIngresada, alturaIngresada)
        consoleLog1.innerHTML = `The new user logged into the system is <strong>${nombreIngresado}</strong>, his/her age is <strong>${edadIngresada}</strong>, and his/her height is <strong>${alturaIngresada} cm</strong>`
        usuarios.push(usuarioNuevo)
        console.log(usuarios)
    }
    contenedor.append(consoleLog1)
    calcReturn.append(contenedor)
    formularioReturn.removeChild(formulario)
}
//La funcion agregarUsuario() tiene un EventListener "click" que genera un formulario dinamico y el EventListener "submit" del formulario ejecuta la funcion nuevoUsuario(). 
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
            <label for="edadUsuario" class="form-label">DoB</label>
            <input type="date" id="edadUsuario" class="fecha" name="DoB" value="2000-07-22" required>
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
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        nuevoUsuario()
    })
} 

//Funcion para ver usuarios en el array principal. EventListener "click" que corre un for-of loop para devolver todos los usuarios guardados en el sistema (array "usuarios")
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
        consoleLogTemp.innerHTML = `Name: <strong>${usuario.persona}</strong>, Age: <strong>${usuario.edad}</strong>, Height: <strong>${usuario.altura} cm</strong>, and has : <strong>${usuario.pesoLoggeado.length}</strong> logged weights in the system`
        contenedor.append(consoleLogTemp)
    }
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``
    calcReturn.append(contenedor)
} 

//La funcion logPeso() valida que el nombre ingresado (usuario) este en el sistema. Si el nombre es valido luego valida que la fecha no haya sido declarada por este usuario. Si las dos condiciones se cumplen la funcion declara un array con los datos "date" y "weight" que luego se hace push al array usuario.pesoLoggeado
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
            let bmiDia = pesoIngresado / Math.pow((tempUsuario.altura/100), 2)
            bmiDia = bmiDia.toFixed(2)
            let pesoDia = [diaIngresado, parseInt(pesoIngresado), parseInt(bmiDia)]
            tempUsuario.pesoLoggeado.push(pesoDia)
            consoleLog1.innerHTML = `The user ${nombreIngresado} logged his weight: ${pesoIngresado} Kg for the date: ${diaIngresado}`
        } else {
            consoleLog1.innerHTML = `The user ${nombreIngresado} already logged a weight for this date`
        }
        contenedor.append(consoleLog1)
    }              
    calcReturn.append(contenedor)
}
//La funcion agregarPeso() tiene un EventListener "click" que genera un formulario dinamico y el EventListener "submit" del formulario ejecuta la funcion logPeso(). 
function agregarPeso() {
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
            <label for="fecha" class="form-label">Date:</label>
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
} 

//La funcion verPesos() valida que el nombre ingresado (usuario) este en el sistema. Si el nombre es valido luego ordena los pesos "usuario.pesoLoggeado". La funcion devuelve un "p" con los pesos ingresados por el usuario y un grafico en funcion del tiempo
function verPesos(){ 
    calcReturn.innerHTML = ``
    let nombreIngresado = document.getElementById("nombreUsuario").value;
    let optionWeightBmi = document.getElementById("weightBmi").value;
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

        if (optionWeightBmi == 1) {
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
        } else {
            consoleLog1.innerHTML = `The calculated BMIs for <strong>${nombreIngresado}</strong> are: `
            contenedor.append(consoleLog1)
            for(let peso of tempPesos){
                let consoleLogTemp = document.createElement("p")
                consoleLogTemp.innerHTML = `Date: ${peso[0]}, BMI: ${peso[2]}`
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
                let firstSeriesData = dataSet.mapAs({ x: 0, value: 2 });
                
                let chart = anychart.line();
                let dateTimeScale = anychart.scales.dateTime();
                chart.xScale(dateTimeScale)
                chart.animation(true);
                chart.padding([10, 20, 5, 20]);
                chart.crosshair().enabled(true).yLabel(false).yStroke(null);
                chart.tooltip().positionMode('point');
                chart.title(
                    `Graph showing BMI by date for user ${nombreIngresado}`
                );
                    
                chart.yAxis().title('BMI');
                chart.xAxis().labels().padding(5);
                    
                let firstSeries = chart.line(firstSeriesData);
                firstSeries.hovered().markers().enabled(true).type('circle').size(4);
                firstSeries
                .tooltip()
                .position('right')
                .anchor('left-center')
                .offsetX(5)
                .offsetY(5);

                chart
                .lineMarker()
                .value(25);
                    
                chart.container('imageReturn');
                chart.draw();
            });
        }    
    }
}
//La funcion usuarioPesosLoggeados() tiene un EventListener "click" que genera un formulario dinamico y el EventListener "submit" del formulario ejecuta la funcion verPesos(). 
function usuarioPesosLoggeados(){
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
            <label for="weightBmi" class="form-label">Track</label>
            <select class="form-select" id="weightBmi">
            <option value="1">Weight</option>
            <option value="2">BMI</option>
            </select>
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
} 

//La funcion calcularBmi() calcula el indice de masa corporal con los datos ingresados. Segun el valor calculado y mediante varias declaraciones "if else" regresa 4 "p" y 1 "img" con un analisis detallado. 
function calcularBmi(){
    calcReturn.innerHTML = ``
    let dobIngresada = new Date(document.getElementById("edadUsuario").value)
    let dobYearIngresada = dobIngresada.getFullYear()
    let edadIngresada = fechaHoy - dobYearIngresada
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
//La funcion informacionBmi() tiene un EventListener "click" que genera un formulario dinamico y el EventListener "submit" del formulario ejecuta la funcion calcularBmi(). 
function informacionBmi(){
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``

    let formulario = document.createElement("form")
    formulario.setAttribute("id","formulario")
    formulario.setAttribute("class","form")
    formulario.innerHTML = `
        <div class="">
            <label for="edadUsuario" class="form-label">DoB</label>
            <input type="date" id="edadUsuario" class="fecha" name="DoB" value="2000-07-22" required>
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
}


// Datos precargados. 
let usuarioPrueba = new Usuario("usuarioBot", "7/21/2000", 23, 180)
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
console.log(usuarioPrueba)
usuarios.push(usuarioPrueba)

