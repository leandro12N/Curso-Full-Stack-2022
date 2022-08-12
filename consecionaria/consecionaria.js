let autos = require("./autos")

const concesionaria = {
   autos: autos,
   buscarAuto: function (patente) {
      for (i = 0; i < autos.length; i++) {
         if (autos[i].patente == patente) {
            return autos[i]
          } 
         }
    return null;
   },
   venderAuto: function (patente) {
      const auto = this.buscarAuto(patente);
      if (auto) {
         auto.vendido = true;
      }
   },
   autosParaLaVenta: function () {

      return this.autos.filter(function (auto) {
         return auto.vendido == false;
      });
   },
   autosNuevos: function () {
      let autosVenta = this.autosParaLaVenta();
       return autosVenta.filter(function (auto) {
         return auto.km < 100;
      });
   }
}

console.log(concesionaria.venderAuto("APL123"))