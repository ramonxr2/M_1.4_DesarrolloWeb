let finDeTransimisionDeDatos = function (id) {
    console.log('Transferencia', id, 'terminada');
  }
  
  let obtenDatosDeInternet = function (id, duracion, callback) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    setTimeout(function () {
      finDeTransimisionDeDatos(id);
      if (callback) {
        callback();
      }
    }, duracion);
  }
  
  module.exports.getDatos = obtenDatosDeInternet;