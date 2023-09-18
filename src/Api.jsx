const API_KEY = "85107dfeaa535d82ecd6bb0797f7ff46"

export default function getData () { 
   return fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
    }