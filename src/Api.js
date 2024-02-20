//se crea la función que llamara a la API
const API_KEY = import.meta.env.VITE_API_KEY;

export function getPopularMovie (page =1) { 
   return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=es`)
      .then((response) => {
        return response.json()

        
      })
    } 



//función para  búsqueda de películas en la API
 export function searchAllMovies (text) {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&language=en-US&page=1`)
  .then((response) => {
    return response.json()

    
  })
 }



 // Función para obtener series populares
export function getPopularSeries(page = 1) {
  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}&language=es`)
    .then((response) => {
      return response.json();
    });
}
// Función para búsqueda de series en la API
export function searchAllSeries(text) {
  return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${text}&language=en-US&page=1`)
    .then((response) => {
      return response.json();
    });
}




