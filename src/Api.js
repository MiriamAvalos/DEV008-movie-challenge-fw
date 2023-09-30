//se crea la función que llamara a la API
const API_KEY = "85107dfeaa535d82ecd6bb0797f7ff46"
export function getPopularMovie () { 
   return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${1}&language-en-US`)
      .then((response) => {
        return response.json()

        
      })
    } 



 export function searchAllMovies (text) {
 

  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&language=en-US&page=1`)
  .then((response) => {
    return response.json()

    
  })
 }



