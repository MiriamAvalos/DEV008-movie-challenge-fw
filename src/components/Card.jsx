/* eslint-disable react/prop-types */
import './Card.css';
function Card(props) {

  //const titulo = props.movie.title;
  const image = "https://image.tmdb.org/t/p/w200" + props.movie.poster_path
  //console.log("titulo" , titulo);
    return (
        <div className= "DivCardMovie"> 
            <img className= "imgMovie" src={image}/>
            
        </div>
    )
}


export default Card