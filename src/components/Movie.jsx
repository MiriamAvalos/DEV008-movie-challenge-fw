import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Movie.css';
import star from '../images/star.png';
import play from '../images/play.png';



export function Movie() {
    const {state} = useLocation()  //useLocation devuelve todas las opciones del componente al que navegamos
    //console.log(state)
    const Navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo
    const imageBackdropPath = "https://image.tmdb.org/t/p/w1280" + state.backdrop_path
    const imagePosterPath = "https://image.tmdb.org/t/p/w1280"  + state.poster_path
    const [showTrailer, setShowTrailer] = useState(false);   //estado que controla si el trailer se mostrara o no se mostrara 
    const [trailerKey, setTrailerKey] = useState(null); // Estado para almacenar el trailerKey


 //ordenamiento de fecha en día, mes y año
    const releaseDate = state.release_date || state.first_air_date;
// Separar la fecha en partes (año, mes, día)
const [year, month, day] = releaseDate.split('-');
// Rearrangemento de las partes de la fecha en el orden deseado (día, mes, año)
const formattedDate = `${day}-${month}-${year}`;
     
    
    function closeDescription() {
    //la función Navigate la puedo utilizar para dirigirme a otro lado
    
     Navigate(-1)  //redirigir a Home 
     
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
    
    console.log(trailerKey);
      
  return (
    <div className="divComponentMovie">
    
    <button className= "closeDescription" onClick={closeDescription}> Regresar </button>
   <img className= "imageBackdropPath"  src={imageBackdropPath}/>
   <img className= "imagePosterPath"  src={imagePosterPath}/>
   <div className="keyData">
   <p className="titleMovieDescription">{state.name || state.title} </p> 
   </div>
   
    <div className="divInformation">
    <p className="originalTitleMovieDescription fontStyle">Titulo original: <span className="nameDescription">{ state.original_title || state.original_name}</span> </p>
   <p className="releaseDate fontStyle">Estreno: <span className="nameDescription">{formattedDate} </span>  </p>
   <p className="languageMovieDescription fontStyle">Idioma original: <span className="nameDescription">{state.original_language}</span> </p>
   </div>
    
   <div className="movieRtings">
  
   <p className="scoreMovieDescription"> <img src={star} className='star' /> {state.vote_average.toString().split('.')[0]}.{state.vote_average.toString().split('.')[1]}
    </p>
    <p className="votesMovieDescription ">Votos: {state.vote_count}</p>
    </div>

   <div className="divOverViewMovie">
   <p className="overviewTitle">  Vista general   </p>
   <p className="overviewMovie">{state.overview}    </p>
      
<div className="modalWrapper">
  <div className="divToggleTrailerButton">
  <img src={play} className='imagePlay' />
 <button className="toggleTrailerButton" onClick={toggleTrailer}>
 
    {showTrailer ? '' : 'Trailer'}
  </button>
  </div>
  <div className={`modalYoutube${showTrailer ? ' visible' : ''}`}>
    {/* Mostrar el trailer si showTrailer es verdadero */}
    {showTrailer && trailerKey && (
      <>
        <div className="youtube-video"> 
        <iframe src={`https://www.youtube.com/embed/${trailerKey}?rel=0`}
          width="90%" 
          height="100%"
          
          /> </div>
        <button className="hideTrailerButton" onClick={toggleTrailer}>Cerrar</button>
       
      </>
    )}
  </div>
</div>
    
  </div>
  </div>

  );

}