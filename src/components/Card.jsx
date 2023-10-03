/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './Card.css';
function Card(props) {
    //función para evento onClick(evento) que mostrara descripción de peliculas en path Movie
    //se puede llamar handle (manejar)
    const Navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo
    function viewDescription() {
    //la función Navigate la puedo utilizar para dirigirme a otro lado
    
     Navigate("/movie-description", {state:props.movie})  //se crea objeto estado para traer la pelicula, state es la propiedad para llevarse cosas 
     
        
    }

  //const titulo = props.movie.title;
  const image = "https://image.tmdb.org/t/p/w200" + props.movie.poster_path
  //console.log("titulo" , titulo);
    return (
        <div className= "DivCardMovie" onClick={viewDescription}> 
            <img className= "imgMovie"  src={image}/>
            
        </div>
       
    )
}


export default Card