import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import './Movie.css';

 

export function Movie() {
    const {state} = useLocation()  //useLocation devuelve todas las opciones del componente al que navegamos
    //console.log(state)
    const Navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo
    const imageBackdropPath = "https://image.tmdb.org/t/p/w1280" + state.backdrop_path
    const imagePosterPath = "https://image.tmdb.org/t/p/w1280"  + state.poster_path
    const [showTrailer, setShowTrailer] = useState(false);   //estado que controla si el trailer se mostrara o no se mostrara 
    const [trailerKey, setTrailerKey] = useState(null); // Estado para almacenar el trailerKey
     
    
    function closeDescription() {
    //la función Navigate la puedo utilizar para dirigirme a otro lado
    
     Navigate("/")  //redirigir a Home 
        
    }


    useEffect(() => {
    // Ejemplo de solicitud a la API de TMDb para obtener información sobre una película y sus videos.
    const movieId = state.id
    //console.log("hola", state.id)
   const apiKey = "85107dfeaa535d82ecd6bb0797f7ff46"; //

fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
  .then((response) => response.json())
  .then((data) => {
    const videos = data.videos.results;
    console.log("idyoutube" , videos)
    if (videos.length > 0) {
      // El primer video en la lista generalmente es el trailer oficial de la película.
      const trailerKey = videos[0].key;
      console.log('ID de YouTube del trailer:', trailerKey);
      setTrailerKey(trailerKey); //actualiza el estado con el id del trailer
    } else {
      console.log('No se encontraron videos para esta película.');
    }
  })
  .catch((error) => {
    console.error('Error al obtener información de la película:', error);
  });
}, [state.id]); // Asegúrate de que esta función se ejecute cuando cambia el ID de la película












    
    //funcion para mostrar trailer de youtube
    function toggleTrailer() {
      setShowTrailer(!showTrailer);
    }
    
      
  return (
    <div className="divComponentMovie">
    
    <button className= "closeDescription" onClick={closeDescription}> Regresar </button>
   <img className= "imageBackdropPath"  src={imageBackdropPath}/>
   <img className= "imagePosterPath"  src={imagePosterPath}/>
   <p className="titleMovieDescription">{state.original_title}    </p>
   <p className="releaseDate">{state.release_date}    </p>
   <p className="overviewTitle">  Vista general   </p>
   <p className="overviewMovie">{state.overview}    </p>
 
 {/* Botón para mostrar/ocultar el trailer */}
 <button className="toggleTrailerButton" onClick={toggleTrailer} >
      {showTrailer ? 'Ocultar Trailer' : 'Mostrar Trailer'}
      
    </button>

   <div className="modalYoutube">
    {/* Mostrar el trailer si showTrailer es verdadero */}
    {showTrailer && <YouTube videoId={trailerKey}  className="youtube-video" />}
    </div>
    
  </div>
   
  );

}