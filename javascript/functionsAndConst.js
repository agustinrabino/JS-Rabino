//Variable año para definir edad del usuario
let fechaHoy = new Date()

//Constructor Usuario: guarda nombre, fecha de nacimiento, edad y altura de un nuevo usuario. Ademas crea un array vacio "pesoLoggeado" en el cual el usuario puede ingresar sus pesos y un array vacio "calorieLoggeado" para poder registrar actividades.
class Usuario{
    constructor(persona, nacimiento, altura){
        this.persona = persona,
        this.nacimiento = nacimiento,
        this.altura = parseInt(altura),
        this.pesoLoggeado = [],
        this.calorieLoggeado = []
    }
} 

//TODAS LAS ACCIONES(BOTONES) SON FUNCIONES COMPUESTAS. EL EVENT "CLICK" DEL SIDEMENU VA A DESPLEGAR UN FORMULARIO DINAMICO QUE A SU VEZ TIENE UN EVENT "SUBMIT" INTERNO. EL EVENT SUBMIT INICIA UN DIV DE RETORNO CON LOS DATOS CALCULADOS/INGRESADOS SEGUN CORRESPONDA// 

//Funcion para eliminar datos. al finalizar la funcion el localStorage se sobreescribe con el nuevo array. La funcion usa un for-of para crear Eventlistener "click" para cada elemento y los remueve con un splice. Incorpora SweetAlert2 para confirmar los delete
function listenDelete(array, fun){
    for (let item of array) {
        let deleteIndex = array.indexOf(item)
        let deleteButton = document.getElementById(`delete${deleteIndex}`)
        deleteButton.addEventListener("click", (e) => {
                e.preventDefault()
                Swal.fire({
                    title: `Are you sure you want to delete this?`,
                    text: `you won't be able to revert this delete`,
                    icon: `warning`,
                    showCancelButton: true,
                    confirmButtonText: "Delete",
                }).then((result) => {
                    if (result.isConfirmed) {
                        array.splice(deleteIndex, 1)
                        localStorage.setItem("usuarios", JSON.stringify(usuarios))
                        fun()
                    }
                });   
            }        
        )
    }
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
//La funcion nuevoUsuario() valida que el nombre ingresado no este en uso. Si el nombre es valido usa el Contructor "Usuario" para agregar los datos al array "usuarios" y devuelve una etiqueta "p" con los datos del nuevo usuario. 
function nuevoUsuario() {
    let contenedor = document.createElement("div")
    contenedor.setAttribute("class","infoReturn")

    let nombreIngresado = document.getElementById("nombreUsuario").value;
    let dobIngresada = new Date(document.getElementById("edadUsuario").value)
    let edadIngresada = Math.floor((fechaHoy - dobIngresada)/31560000000)
    dobIngresada = dobIngresada.toLocaleDateString()
    let alturaIngresada = document.getElementById("alturaUsuario").value;
    let consoleLog1 = document.createElement("p")
    
    let tempUsuario = usuarios.find((el) => el.persona.toLowerCase() == nombreIngresado.toLowerCase())
    if (tempUsuario !== undefined) {
        consoleLog1.innerHTML = `This username is already in the system. Please choose another one`
        contenedor.append(consoleLog1)
    } else if (tempUsuario === undefined) {            
        let usuarioNuevo = new Usuario (nombreIngresado, dobIngresada, alturaIngresada)
        consoleLog1.innerHTML = `The new user logged into the system is <strong>${nombreIngresado}</strong>, his/her age is <strong>${edadIngresada}</strong>, and his/her height is <strong>${alturaIngresada} cm</strong>`
        usuarios.push(usuarioNuevo)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
    contenedor.append(consoleLog1)
    calcReturn.append(contenedor)
    formularioReturn.removeChild(formulario)
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
        let edadIngresada = Math.floor((fechaHoy - new Date(usuario.nacimiento))/31560000000)
        let indexUsuario = usuarios.indexOf(usuario)
        let consoleLogTemp = document.createElement("div")
        consoleLogTemp.setAttribute("class", "usersReturn")
        let consoleLogTempUser = document.createElement("p")
        consoleLogTempUser.innerHTML = `Name: <strong>${usuario.persona}</strong>, Age: <strong>${edadIngresada}</strong>, Height: <strong>${usuario.altura} cm</strong>, has <strong>${usuario.pesoLoggeado.length}</strong> logged weights in the system, and <strong>${usuario.calorieLoggeado.length}</strong> logged calorie records in the system`
        let consoleLogTempDelete = document.createElement("div")
        consoleLogTempDelete.innerHTML = `<button type="button" class="btn btn-primary" id="delete${indexUsuario}" ><i class="fas fa-trash-alt"></i></button>`
        consoleLogTemp.append(consoleLogTempUser, consoleLogTempDelete)
        contenedor.append(consoleLogTemp)
    }
    let calcReturn = document.getElementById("calcReturn")
    calcReturn.innerHTML = ``
    calcReturn.append(contenedor);
    listenDelete(usuarios, verUsuarios)
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

//La funcion logPeso() valida que el nombre ingresado (usuario) este en el sistema. Si el nombre es valido luego valida que la fecha no haya sido declarada por este usuario. Si las dos condiciones se cumplen la funcion declara un array con los datos "date", "weight" y "BMI" que luego se hace push al array usuario.pesoLoggeado
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
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            consoleLog1.innerHTML = `The user ${nombreIngresado} logged his weight: ${pesoIngresado} Kg for the date: ${diaIngresado}`
        } else {
            consoleLog1.innerHTML = `The user ${nombreIngresado} already logged a weight for this date`
        }
        contenedor.append(consoleLog1)
    }              
    calcReturn.append(contenedor)
}

//La funcion agregarCalories() tiene un EventListener "click" que genera un formulario dinamico y el EventListener "submit" del formulario ejecuta la funcion logCalories(). 
function agregarCalories() {
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
            <label for="activity" class="form-label">Activity</label>
            <input type="text" class="form-control" id="activity" required>
        </div>
        <div class="">
            <label for="activityTime" class="form-label">Time spent (h)</label>
            <input type="number" class="form-control" id="activityTime" required>
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
        logCalories()
    })
}

//La funcion logCalories() valida que el nombre ingresado (usuario) este en el sistema. Si el nombre es valido luego valida que la fecha no haya sido declarada por este usuario. Si las dos condiciones se cumplen la funcion usa un API para buscar las calorias quemadas por hora para el deporte ingresado por el usuasrio. ACLARACION: en la documentacion del API solo ejemplificaba como usarlo definiendo una busqueda. Por lo tanto no consumi el API entero sino lo puse dentro de la funcion. PUEDE DEMORARSE UNOS mSEG. Si la actividad fisica/deporte se encuentra en la base de datos la funcion declara un array con los datos "date", "nombre del deporte", "duracion y "calorias totales" que luego se hace push al array usuario.calorieLoggeado
function logCalories() {
    calcReturn.innerHTML = ``

    let nombreIngresado = document.getElementById("nombreUsuario").value;
    let actividadIngresada = document.getElementById("activity").value
    let duracionIngresado = document.getElementById("activityTime").value;
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
        let diaUsuario = tempUsuario.calorieLoggeado.find((el) => el[0] == diaIngresado)
        if (diaUsuario === undefined) {
            fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${actividadIngresada}`, { 
                method: 'GET',
                headers: { 'X-Api-Key': 'lgNDMAvMoaLjb7cpQUQTYg==ubbgMEPFvewYhRL5'}
                })
                .then((succes) => succes.json())
                .then((result) => {
                    console.log(result[0]);
                    let caloriesSpent = (parseInt(result[0].calories_per_hour) * parseInt(duracionIngresado));
                    let calorieDia = [diaIngresado, result[0].name, parseInt(result[0].calories_per_hour), parseInt(duracionIngresado), caloriesSpent];
                    tempUsuario.calorieLoggeado.push(calorieDia);
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    consoleLog1.innerHTML = `The user ${nombreIngresado} spent ${duracionIngresado} hours exercising and burnt ${caloriesSpent} calories`
                })
                .catch((error) => {
                    console.log(error);
                    consoleLog1.innerHTML = `We were not able to found this sport/activity in our database`
                })
            }
        }
    contenedor.append(consoleLog1)              
    calcReturn.append(contenedor)
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
            <option value="3">Calories</option>
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

//La funcion verPesos() valida que el nombre ingresado (usuario) este en el sistema. Si el nombre es valido luego ordena los pesos o BMI o calorias del "usuario" cronologicamente. La funcion devuelve un "p" con los datos ingresados por el usuario y un grafico en funcion del tiempo
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

        let tempCal = tempUsuario.calorieLoggeado
        tempCal.sort((a,b) => {
            return new Date(b[0]) - new Date (a[0])})

        if (optionWeightBmi == 1) {
            consoleLog1.innerHTML = `The weights for <strong>${nombreIngresado}</strong> are: `
            contenedor.append(consoleLog1)
            for(let peso of tempPesos){
                let indexPeso = tempPesos.indexOf(peso)
                let consoleLogTemp = document.createElement("div")
                consoleLogTemp.setAttribute("class", "usersReturn")
                let consoleLogTempPeso = document.createElement("p")
                consoleLogTempPeso.innerHTML = `Date: ${peso[0]}, Weight: ${peso[1]} Kg`
                let consoleLogTempDelete = document.createElement("div")
                consoleLogTempDelete.innerHTML = `<button type="button" class="btn btn-primary" id="delete${indexPeso}" ><i class="fas fa-trash-alt"></i></button>`
                consoleLogTemp.append(consoleLogTempPeso, consoleLogTempDelete)
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
            listenDelete(tempPesos, verPesos)
        } else if (optionWeightBmi == 2) {
            consoleLog1.innerHTML = `The calculated BMIs for <strong>${nombreIngresado}</strong> are: `
            contenedor.append(consoleLog1)
            for(let peso of tempPesos){
                let consoleLogTemp = document.createElement("p")
                peso[2] > 25 && consoleLogTemp.setAttribute("class", "rojo")
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
        } else {
            consoleLog1.innerHTML = `The calories spent for <strong>${nombreIngresado}</strong> are: `
            contenedor.append(consoleLog1)
            for(let calories of tempCal){
                let indexCal = tempCal.indexOf(calories)
                let consoleLogTemp = document.createElement("div")
                consoleLogTemp.setAttribute("class", "usersReturn")
                let consoleLogTempCal = document.createElement("p")
                consoleLogTempCal.innerHTML = `Date: ${calories[0]}, Total calories burnt ${calories[1]}: ${calories[4]} cal (${calories[3]} hours)`
                let consoleLogTempDelete = document.createElement("div")
                consoleLogTempDelete.innerHTML = `<button type="button" class="btn btn-primary" id="delete${indexCal}" ><i class="fas fa-trash-alt"></i></button>`
                consoleLogTemp.append(consoleLogTempCal, consoleLogTempDelete)
                contenedor.append(consoleLogTemp)
            }
            calcReturn.append(contenedor)     
            
            anychart.onDocumentReady(function () {
                anychart.theme('darkEarth');
                
                let grafico = document.createElement("div")
                grafico.setAttribute("class", "imageReturn")
                grafico.setAttribute("id", "imageReturn")
                calcReturn.append(grafico)     
                
                let dataSet = anychart.data.set(tempCal);
                let firstSeriesData = dataSet.mapAs({ x: 0, value: 4 });
                
                let chart = anychart.line();
                let dateTimeScale = anychart.scales.dateTime();
                chart.xScale(dateTimeScale)
                chart.animation(true);
                chart.padding([10, 20, 5, 20]);
                chart.crosshair().enabled(true).yLabel(false).yStroke(null);
                chart.tooltip().positionMode('point');
                chart.title(
                    `Graph showing calories burnt by date for user ${nombreIngresado}`
                );
                    
                chart.yAxis().title('Calories');
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
            listenDelete(tempCal, verPesos)
        }
    }
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

//La funcion calcularBmi() calcula el indice de masa corporal con los datos ingresados. Segun el valor calculado y mediante varias declaraciones "if else" regresa 4 "p" y 1 "img" con un analisis detallado. 
function calcularBmi(){
    calcReturn.innerHTML = ``
    let dobIngresada = new Date(document.getElementById("edadUsuario").value)
    let edadIngresada = Math.floor((fechaHoy - dobIngresada)/31560000000)
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
        consoleLog4.innerHTML = `The user doesn't have a healthy BMI (${bmi}). However, the user is a young person (${edadIngresada} years) so he/she is not in an immediate risk. We recommend to seek a nutritionist to change his/her dietary habits and monitor the BMI daily to prevent any health problems`
        contenedor.append(consoleLog4)
    } else if (bmi > 25 & edadIngresada < 40) {
        consoleLog4.innerHTML = `The user has a slightly high BMI (${bmi}). However, the user is a young person (${edadIngresada} years) so he/she is not in an immediate risk. We recommend to change the daily habits to improve on this metric`
        contenedor.append(consoleLog4)
    } else if (bmi < 18.5) {
        consoleLog4.innerHTML = `The user's BMI (${bmi}) is below the recommended value. While there is no immediate risk, we recommend to seek a nutritionist to change his/her dietary habits and monitor the BMI daily to prevent any health problems`
        contenedor.append(consoleLog4)      
    } else {
        consoleLog4.innerHTML = `The user has a healthy BMI (${bmi}), keep on with the good habits!`
        contenedor.append(consoleLog4)  
    }
    calcReturn.append(contenedor)
    calcReturn.append(imageReturn)
}
