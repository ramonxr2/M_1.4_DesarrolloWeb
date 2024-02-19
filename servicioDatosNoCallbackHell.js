let finDeTransimisionDeDatos = function (id) {
    console.log('Transferencia', id, 'terminada');
  }
  
  let obtenDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
  
    return new Promise(resolve => {
      setTimeout(() => {
        finDeTransimisionDeDatos(id);
        resolve();
      }, duracion);
    });
  }
  
  module.exports.getDatos = obtenDatosDeInternet;