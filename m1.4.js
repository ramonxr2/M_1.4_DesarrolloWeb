

let asignatura = {
    nombre : "",
    creditos : "",
    clave : "",
    calificacion : "",
    fecha : ""
}

function generarCalificacion() {
      return Math.floor(Math.random() * 101);
}

function generarCreditos(){
    return Math.floor(Math.random() * 5)+4;
}

function generarFechas(){
  const fechaInicio = new Date('2021-01-01');
  const fechaFin = new Date('2023-06-30');

 const difTiempo = fechaFin.getTime() - fechaInicio.getTime();

 const tiempoR = Math.floor(Math.random() * difTiempo);

 const fechaR = new Date(fechaInicio.getTime() + tiempoR);

// Formatear la fecha como "YYYY-MM-DD"

const fechaForm = fechaR.toISOString().split('T')[0];
return fechaForm;
}

let nombres = ['Algebra','Ingles','Programacion','Electronica','Sistemas','Calculo Integral','Ecuaciones','Ingles II','Ecuaciones Diferenciales','Frances','Redes','Desarrollo Web','Ingenieria en procesos','Desarrollo Movil'];
let claves = ['111','132','432','613','732','943','324','043','042','542','934','623','012','491'];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingresa un numero entero positivo mayor que 0: ', (userInput) => {
  try {
    let integerValue = parseInt(userInput);

    if (isNaN(integerValue) || integerValue <= 0) {
      throw new Error('Entrada invalida. Debe ingresar un numero entero positivo mayor que 0.');
    }

    console.log('Ingresaste:', integerValue);

  // generar los arreglos con las asignaturas // ocupa calificaciones, fechas creditos etc
  
  let asignaturasArray = [];

  for (let index = 0; index < integerValue; index++) {

    // conseguir nombre random
    let nombreR = nombres[Math.floor(Math.random() * nombres.length)];

    // conseguir clave random
    let claveR = claves[Math.floor(Math.random() * claves.length)];

    // conseguir fecha
    let fechaR=generarFechas();

    // get creditos
    let creditoR=generarCreditos();
    // get calificacion
    let calificacionR=generarCalificacion();

    const asig = {
      nombre: nombreR,
      creditos: creditoR,
      clave: claveR,
      calificacion: calificacionR,
      fecha: generarFechas()
  };

  asignaturasArray.push(asig);
  }

  console.log(asignaturasArray);

  rl.close();
} catch (error) {
  console.log(error.message);
  rl.close();
}
});