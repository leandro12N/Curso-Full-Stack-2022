const peliculas = require("./movies");

const moviesDH = {
    peliculas: "./movies",
    listMovies: function () {
        peliculas.forEach(function(peliculas,index){
            console.log((index+1)+ " "+ peliculas.titulo)
        })
    },
    searchMovie: (id) => {
        let peliculaDetalle = peliculas.filter(pelicula => {
            return pelicula.id === id
        })
        if (peliculaDetalle.length === 0) {
            return null
        } else {
            return peliculaDetalle;
        }
    },
    searchMoviesByGenre: (genero)=>{
        let resultado = peliculas.filter(pelicula=>{
            return pelicula.genero === genero
        })
        if(resultado.length === 0){
            return null
        }else{
            return resultado
        }
    },
    totalPrice: function () {
         let suma = [];
         for (i=0; i<peliculas.length;i++){
         suma.push(peliculas[i].precio)
        }
        let total = suma.reduce((acumulador,valor) => acumulador + valor);
        return "El precio total es $ " + total
    },
     changeMovieGenre: function(id,genero){
       let pelicula = this.searchMovie(id);
        pelicula[0].genero = genero
        return pelicula
     }
}

console.log(moviesDH.listMovies())
//console.log(moviesDH.searchMovie(4))
//console.log(moviesDH.searchMoviesByGenre("Belico"))
//console.log(moviesDH.totalPrice())
//console.log(moviesDH.changeMovieGenre(3,"comedia"))