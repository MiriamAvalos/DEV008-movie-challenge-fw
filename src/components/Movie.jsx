import { useLocation } from "react-router-dom";
import './Movie.css';

  
export function Movie() {
    const {state} = useLocation()  //useLocation devuelve todas las opciones del componente al que navegamos
    console.log(state)
    const imageBackdropPath = "https://image.tmdb.org/t/p/w200" + state.backdrop_path
    const imagePosterPath = "https://image.tmdb.org/t/p/w200"  + state.poster_path

  return (
    <div className="divComponentMovie">
   <img className= "imageBackdropPath"  src={imageBackdropPath}/>
   <img className= "imagePosterPath"  src={imagePosterPath}/>
   <p className="titleMovieDescription">{state.original_title}    </p>
   
   </div>
  );
}

