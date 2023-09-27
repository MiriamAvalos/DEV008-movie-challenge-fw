/* eslint-disable react/prop-types */
import './Card.css';
function Card(props) {
 /*console.log(props)*/
  const titulo = props.original_title;
    return (
        <div className= "DivCardMovies"> 
            <img className="cardMovie" src="https://th.bing.com/th/id/R.121c6890d59a11b6c41a1ea996e8bfda?rik=NY%2b4NGJvrY1jGw&pid=ImgRaw&r=0"> 
            </img>
            <p>{titulo}</p>
        </div>
    )
}


export default Card