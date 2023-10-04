import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Movie.css';

  

export function Movie() {
    const {state} = useLocation()  //useLocation devuelve todas las opciones del componente al que navegamos
    console.log(state)
    const imageBackdropPath = "https://image.tmdb.org/t/p/w200" + state.backdrop_path
    const imagePosterPath = "https://image.tmdb.org/t/p/w200"  + state.poster_path


    const Navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo
    function closeDescription() {
    //la función Navigate la puedo utilizar para dirigirme a otro lado
    
     Navigate("/")  //redirigir a Home 
     
        
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
 

   
   </div>
  );

}